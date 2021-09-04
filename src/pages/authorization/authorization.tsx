import { MouseEvent, useState } from 'react';

// Components
import { Loader } from '../../components/loader';
import { Button } from '../../components/button';

// Store
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/userSlice';

// Router
import { NavLink, useHistory } from 'react-router-dom';
import { Routes } from '../../routes';

// Services
import { useLazyQuery } from '@apollo/client';
import { AUTHORIZATION } from '../../services/user';

// Additional
import { toast } from 'react-toastify';

// Styles
import { styles } from './styles';

const Authorization = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [authorization, { loading }] = useLazyQuery(AUTHORIZATION, {
    onCompleted: ({ authorization: { id, token } }) => {
      dispatch(setLogin({ id, token }));
      toast.success('Вы успешно авторизовались.');
      history.push(Routes.Main);
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    authorization({ variables: { email, password } });
  };

  if (loading) {
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
            <NavLink className={styles.formFieldsInfoLink} to={Routes.Registration}>
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
