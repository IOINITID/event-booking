import React, { MouseEvent, useEffect, useState } from 'react';
import { getLogin } from '../../features/user/userSlice';
import { useDispatchTyped } from '../../hooks';
import { styles } from './styled';
import ticketsImage from '../../assets/images/tickets.png';
import { NavLink } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Loader from '../loader';
import { LOGIN } from '../../graphql/queries';
import Button from '../button';

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

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
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
    <form className={styles.form}>
      <div className={styles.formInfo}>
        <h2 className={styles.formInfoTitle}>Будь в курсе последних событий и бронируй мероприятия в один клик</h2>
        <img className={styles.formImage} src={ticketsImage} alt="Билеты на мероприятия." />
      </div>
      <div className={styles.formFields}>
        <header className={styles.formFieldsHeader}>
          <h2 className={styles.formFieldsTitle}>Войти в свой профиль</h2>
          <p className={styles.formFieldsInfo}>
            У Вас ещё нет аккаунта?{' '}
            <NavLink className={styles.formFieldsInfoLink} to="/registration">
              Создать учётную запись
            </NavLink>
          </p>
        </header>
        <div className={styles.formContainer}>
          <div className={styles.formFieldsFieldset}>
            <div className={styles.formField}>
              <label className={styles.label} htmlFor="email">
                Адрес электронной почты
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Электронная почта"
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.label} htmlFor="password">
                Пароль
              </label>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="***************"
              />
            </div>
          </div>
          <Button className={styles.button} type="primary" onClick={submitHandler}>
            Войти ⟶
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Authorization;
