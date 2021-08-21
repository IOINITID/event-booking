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
import { useMutation } from '@apollo/client';
import { REGISTRATION } from '../../services/user';

// Additional imports
import { toast } from 'react-toastify';

// Styles
import { styles } from './styles';

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleCreateUserCompleted = (id: string, token: string) => {
    dispatch(setLogin({ id, token }));
    toast.success('Регистрация выполнена успешно.');
    history.push(Routes.Main);
  };

  const [registration, { loading }] = useMutation(REGISTRATION, {
    onCompleted: ({ registration: { id, token } }) => handleCreateUserCompleted(id, token),
  });

  const submitHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    registration({ variables: { email: email, password: password } });
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
          <h2 className={styles.formFieldsTitle}>Регистрация</h2>
          <p className={styles.formFieldsInfo}>
            У Вас уже есть аккаунт?{' '}
            <NavLink className={styles.formFieldsInfoLink} to={Routes.Authorization}>
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
              <a className={styles.formFieldsPolicyLink} href="#no_scroll">
                политикой обработки персональных данных
              </a>
            </p>
          </div>
          <Button className={styles.button} variant="contained" onClick={submitHandler}>
            Зарегистрироваться ⟶
          </Button>
        </div>
      </div>
    </form>
  );
};

export { Registration };
