import React from 'react';

// Components imports
import logoIcon from '../../assets/images/logo-icon.svg';

// Store imports
import { logout } from '../../store/userSlice';

// Router imports
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

// Styles imports
import { styles } from './styled';

// Additional imports
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Interfaces and types
interface ILink {
  id: string;
  enable: boolean;
  title: string;
  path: ROUTES;
  onClick: () => void | null;
}

const Navigation = () => {
  // Store values
  const dispatch = useDispatch();
  const token = useSelector(userTokenSelector);

  // Components data
  const links: ILink[] = [
    {
      id: nanoid(),
      enable: true,
      title: 'Мероприятия',
      path: ROUTES.EVENTS,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(!token),
      title: 'Регистрация',
      path: ROUTES.REGISTRATION,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(!token),
      title: 'Войти',
      path: ROUTES.AUTHORIZATION,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(token),
      title: 'Забронированные',
      path: ROUTES.BOOKINGS,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(token),
      title: 'Выйти',
      path: ROUTES.AUTHORIZATION,
      onClick: () => dispatch(logout()),
    },
  ];

  return (
    <header className={styles.header}>
      <NavLink to={ROUTES.MAIN}>
        <img src={logoIcon} width="210" alt="Логотип Event booking." />
      </NavLink>
      <nav>
        <ul className={styles.navigationList}>
          {links.map((link: ILink) => {
            return (
              link.enable && (
                <li key={link.id} className={styles.navigationItem}>
                  <NavLink className={styles.navigationLink} to={link.path} onClick={link.onClick}>
                    {link.title}
                  </NavLink>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
