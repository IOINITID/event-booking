import { MouseEvent, useState } from 'react';

// Store imports
import { getLogin } from '../../store/userSlice';

// Components imports
import { Loader } from '../../components/loader';
import { Button } from '../../components/button';

// GraphQL imports
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../graphql/queries';

// Router imports
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes';

// Styles imports
import { styles } from './styled';

// Additional imports
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Authorization = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // GraphQL query hooks
  const [login, { loading: loginLoading }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      dispatch(
        getLogin({
          token: data.login.token,
          userId: data.login.userId,
        })
      );
      toast(data.login.message);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  // Components handlers
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

  // Loader conditions
  if (loginLoading) {
    return <Loader />;
  }

  return (
    <form className={styles.form}>
      <div className={styles.formInfo}>
        <h2 className={styles.formInfoTitle}>Будь в курсе последних событий и бронируй мероприятия в один клик</h2>
      </div>
      <div className={styles.formFields}>
        <header className={styles.formFieldsHeader}>
          <h2 className={styles.formFieldsTitle}>Войти в свой профиль</h2>
          <p className={styles.formFieldsInfo}>
            У Вас ещё нет аккаунта?{' '}
            <NavLink className={styles.formFieldsInfoLink} to={Routes.Authorization}>
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
          <Button className={styles.button} variant="contained" onClick={submitHandler}>
            Войти ⟶
          </Button>
        </div>
      </div>
    </form>
  );
};

export { Authorization };
