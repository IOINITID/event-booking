import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { logout, selectToken } from '../../features/user/userSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import {
  styledHeader,
  styledHeading,
  styledNavigation,
  styledNavigationButton,
  styledNavigationItem,
  styledNavigationLink,
  styledNavigationList,
} from './styled';

const Navigation = () => {
  const dispatch = useDispatchTyped();
  const token = useSelectorTyped(selectToken);

  return (
    <header className={styledHeader}>
      <div>
        <h1 className={styledHeading}>Event Booking</h1>
      </div>
      <nav className={styledNavigation}>
        <ul className={styledNavigationList}>
          {!token && (
            <li className={styledNavigationItem}>
              <NavLink className={styledNavigationLink} to="/auth">
                Authenticate
              </NavLink>
            </li>
          )}
          <li className={styledNavigationItem}>
            <NavLink className={styledNavigationLink} to="/events">
              Events
            </NavLink>
          </li>
          {token && (
            <Fragment>
              <li className={styledNavigationItem}>
                <NavLink className={styledNavigationLink} to="/bookings">
                  Bookings
                </NavLink>
              </li>
              <li>
                <button className={styledNavigationButton} onClick={() => dispatch(logout())}>
                  Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
