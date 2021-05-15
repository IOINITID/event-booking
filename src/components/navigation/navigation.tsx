import { cx } from '@emotion/css';
import React, { Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout, selectToken } from '../../features/user/userSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import {
  styledHeader,
  styledHeading,
  styledNavigation,
  styledNavigationItem,
  styledNavigationLink,
  styledNavigationList,
} from './styled';

const Navigation = () => {
  const dispatch = useDispatchTyped();
  const token = useSelectorTyped(selectToken);
  const history = useHistory();

  return (
    <header className={styledHeader}>
      <div>
        <h1 className={styledHeading}>Event booking</h1>
      </div>
      <nav className={styledNavigation}>
        <ul className={styledNavigationList}>
          <li className={styledNavigationItem}>
            <NavLink className={styledNavigationLink} to="/events">
              Мероприятия
            </NavLink>
          </li>
          {!token && (
            <li className={styledNavigationItem}>
              <NavLink className={cx('auth', styledNavigationLink)} to="/auth">
                Войти
              </NavLink>
            </li>
          )}
          {token && (
            <Fragment>
              <li className={styledNavigationItem}>
                <NavLink className={styledNavigationLink} to="/bookings">
                  Bookings
                </NavLink>
              </li>
              <li>
                <a
                  href="#no_scroll"
                  className={cx('auth', styledNavigationLink)}
                  onClick={() => {
                    dispatch(logout());
                    history.push('/auth');
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
