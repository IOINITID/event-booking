import React, { Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout, selectToken } from '../../features/user/userSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { styles } from './styled';
import logoIcon from '../../assets/images/logo-icon.svg';
import { ROUTES } from '../../utils/constants';

const Navigation = () => {
  const dispatch = useDispatchTyped();
  const token = useSelectorTyped(selectToken);
  const history = useHistory();

  return (
    <header className={styles.header}>
      <NavLink to={ROUTES.MAIN}>
        <img src={logoIcon} width="210" alt="Логотип Event booking." />
      </NavLink>
      <nav>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <NavLink className={styles.navigationLink} to={ROUTES.EVENTS}>
              Мероприятия
            </NavLink>
          </li>
          {!token && (
            <li className={styles.navigationItem}>
              <NavLink className={styles.navigationLink} to={ROUTES.REGISTRATION}>
                Регистрация
              </NavLink>
            </li>
          )}
          {!token && (
            <li className={styles.navigationItem}>
              <NavLink className={styles.navigationLink} to={ROUTES.AUTHORIZATION}>
                Войти
              </NavLink>
            </li>
          )}
          {token && (
            <Fragment>
              <li className={styles.navigationItem}>
                <NavLink className={styles.navigationLink} to={ROUTES.BOOKINGS}>
                  Забронированные
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <a
                  href="#no_scroll"
                  className={styles.navigationLink}
                  onClick={() => {
                    dispatch(logout());
                    history.push(ROUTES.AUTHORIZATION);
                  }}
                >
                  Выйти
                </a>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
