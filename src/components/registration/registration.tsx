import { MouseEvent, useState } from 'react';

// Components imports
import { Loader } from '../loader';
import { Button } from '../button';

// GraphQL imports
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/mutations';

// Router imports
import { NavLink, useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

// Styles imports
import { styles } from './styled';

// Additional imports
import { toast } from 'react-toastify';

const Registration = () => {
  // State values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Router values
  const history = useHistory();

  // GraphQL mutation hooks
  const [createUser, { loading: createUserLoading }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      toast('Регистрация выполнена успешно.');
      history.push(ROUTES.AUTHORIZATION);
    },
  });

  // Components handlers
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

  // Loader conditions
  if (createUserLoading) {
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
            <NavLink className={styles.formFieldsInfoLink} to={ROUTES.AUTHORIZATION}>
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

export default Registration;
