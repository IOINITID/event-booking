import React, { FormEvent, useEffect, useState } from 'react';
import { getLogin } from '../../features/user/userSlice';
import { useDispatchTyped } from '../../hooks';
import {
  styledButton,
  styledForm,
  styledFormField,
  styledFormFields,
  styledFormFieldsHeader,
  styledFormFieldsInfo,
  styledFormFieldsInfoLink,
  styledFormFieldsTitle,
  styledFormInfo,
  styledFormInfoTitle,
  styledInput,
  styledLabel,
  styledFormFieldsFieldset,
  styledFormImage,
  styledFormContainer,
} from './styled';
import ticketsImage from '../../assets/images/tickets.png';
import { NavLink } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Loader from '../loader';
import { LOGIN } from '../../graphql/queries';

const Authorization = () => {
  const dispatch = useDispatchTyped();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, loading, error }] = useLazyQuery(LOGIN, {
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (data) {
      dispatch(
        getLogin({
          token: data.login.token,
          userId: data.login.userId,
        })
      );
      toast(data.login.message);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast(error.message);
    }
  }, [error]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    login({
      variables: {
        email,
        password,
      },
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <form className={styledForm} onSubmit={submitHandler}>
      <div className={styledFormInfo}>
        <h2 className={styledFormInfoTitle}>Будь в курсе последних событий и бронируй мероприятия в один клик</h2>
        <img className={styledFormImage} src={ticketsImage} alt="Билеты на мероприятия." />
      </div>
      <div className={styledFormFields}>
        <header className={styledFormFieldsHeader}>
          <h2 className={styledFormFieldsTitle}>Войти в свой профиль</h2>
          <p className={styledFormFieldsInfo}>
            У Вас ещё нет аккаунта?{' '}
            <NavLink className={styledFormFieldsInfoLink} to="/registration">
              Создать учётную запись
            </NavLink>
          </p>
        </header>
        <div className={styledFormContainer}>
          <div className={styledFormFieldsFieldset}>
            <div className={styledFormField}>
              <label className={styledLabel} htmlFor="email">
                Адрес электронной почты
              </label>
              <input
                className={styledInput}
                type="email"
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Электронная почта"
              />
            </div>
            <div className={styledFormField}>
              <label className={styledLabel} htmlFor="password">
                Пароль
              </label>
              <input
                className={styledInput}
                type="password"
                id="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="***************"
              />
            </div>
          </div>
          <button className={styledButton} type="submit">
            Войти ⟶
          </button>
        </div>
      </div>
    </form>
  );
};

export default Authorization;
