import React, { MouseEvent, useState } from 'react';
import { styles } from './styled';
import ticketsImage from '../../assets/images/tickets.png';
import { NavLink, useHistory } from 'react-router-dom';
import { CREATE_USER } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import Loader from '../loader';
import Button from '../button';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [createUser, { loading }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      toast('Регистрация выполнена успешно.');
      history.push('/authorization');
    },
  });

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    createUser({
      variables: {
        email: email,
        password: password,
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
          <h2 className={styles.formFieldsTitle}>Регистрация</h2>
          <p className={styles.formFieldsInfo}>
            У Вас уже есть аккаунт?{' '}
            <NavLink className={styles.formFieldsInfoLink} to="/authorization">
              Войти в свой профиль
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
            <p className={styles.formFieldsPolicy}>
              Нажимая на кнопку, Вы соглашаетесь с{' '}
              <a className={styles.formFieldsPolicyLink} href="#no_scrooll">
                политикой обработки персональных данных
              </a>
            </p>
          </div>
          <Button className={styles.button} type="primary" onClick={submitHandler}>
            Зарегистрироваться ⟶
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Registration;
