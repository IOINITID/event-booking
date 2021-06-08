import React, { Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout, selectToken } from '../../features/user/userSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { styles } from './styled';
import logoIcon from '../../assets/images/logo-icon.svg';

const Navigation = () => {
  const dispatch = useDispatchTyped();
  const token = useSelectorTyped(selectToken);
  const history = useHistory();

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img src={logoIcon} width="210" alt="Логотип Event booking." />
      </NavLink>
      <nav>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <NavLink className={styles.navigationLink} to="/events">
              Мероприятия
            </NavLink>
          </li>
          {!token && (
            <li className={styles.navigationItem}>
              <NavLink className={styles.navigationLink} to="/registration">
                Регистрация
              </NavLink>
            </li>
          )}
          {!token && (
            <li className={styles.navigationItem}>
              <NavLink className={styles.navigationLink} to="/authorization">
                Войти
              </NavLink>
            </li>
          )}
          {token && (
            <Fragment>
              <li className={styles.navigationItem}>
                <NavLink className={styles.navigationLink} to="/bookings">
                  Забронированные
                </NavLink>
              </li>
              <li className={styles.navigationItem}>
                <a
                  href="#no_scroll"
                  className={styles.navigationLink}
                  onClick={() => {
                    dispatch(logout());
                    history.push('/authorization');
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
