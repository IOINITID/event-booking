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

const Authorization = () => {
  const dispatch = useDispatchTyped();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password,
      },
    };

    if (!isLogin) {
      requestBody = {
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
    }

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

  const switchModeHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <form className={styledForm} onSubmit={submitHandler}>
      <div className={styledFormInfo}>
        <h2 className={styledFormInfoTitle}>Будь в курсе последних событий и бронируй мероприятия в один клик</h2>
        <img src={ticketsImage} alt="Билеты на мероприятия." />
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
    </form>
  );
};

export default Authorization;
