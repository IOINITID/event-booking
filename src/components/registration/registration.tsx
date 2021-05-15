import React, { FormEvent, useState } from 'react';
import { login } from '../../features/user/userSlice';
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
} from './styled';
import { REQUEST_URL } from '../../utils/constants';
import ticketsImage from '../../assets/images/tickets.png';
import { NavLink } from 'react-router-dom';

const Registration = () => {
  const dispatch = useDispatchTyped();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const requestBody = {
      query: `
        mutation CreateUser($email: String!, $password: String!) {
          createUser(userInput: {email: $email, password: $password}) {
            _id
            email
          }
        }
      `,
      variables: {
        email: email,
        password: password,
      },
    };

    fetch(REQUEST_URL, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }

        return res.json();
      })
      .then((resData) => {
        if (resData.data.login.token) {
          dispatch(login({ token: resData.data.login.token, userId: resData.data.login.userId }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className={styledForm} onSubmit={submitHandler}>
      <div className={styledFormInfo}>
        <h2 className={styledFormInfoTitle}>Будь в курсе последних событий и бронируй мероприятия в один клик</h2>
        <img src={ticketsImage} alt="Билеты на мероприятия." />
      </div>

      <div className={styledFormFields}>
        <header className={styledFormFieldsHeader}>
          <h2 className={styledFormFieldsTitle}>Регистрация</h2>
          <p className={styledFormFieldsInfo}>
            У Вас уже есть аккаунт?{' '}
            <NavLink className={styledFormFieldsInfoLink} to="/authorization">
              Войти в свой профиль
            </NavLink>
          </p>
        </header>
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
          <p className={styledFormFieldsInfo}>
            Нажимая на кнопку, Вы соглашаетесь с{' '}
            <a className={styledFormFieldsInfoLink} href="#no_scrooll">
              политикой обработки персональных данных
            </a>
          </p>
        </div>
        <button className={styledButton} type="submit">
          Зарегистрироваться ⟶
        </button>
      </div>
    </form>
  );
};

export default Registration;
