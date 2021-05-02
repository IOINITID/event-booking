import React from 'react';
import { NavLink } from 'react-router-dom';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import {
  styledHeader,
  styledHeading,
  styledNavigation,
  styledNavigationItem,
  styledNavigationLink,
  styledNavigationList,
} from './styled';

const Navigation = () => {
  const token = useSelectorTyped(selectToken);

  return (
    <header className={styledHeader}>
      <div className="logo">
        <h1 className={styledHeading}>Event Booking Logo</h1>
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
            <li className={styledNavigationItem}>
              <NavLink className={styledNavigationLink} to="/bookings">
                Bookings
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
