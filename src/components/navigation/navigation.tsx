import { MouseEvent } from 'react';

// Components
import { Link } from '../link';
import logoIcon from '../../assets/images/logo-icon.svg';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/userSlice';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Types
import { LinkDataType } from './types';

// Router
import { useLocation } from 'react-router-dom';
import { Routes } from '../../routes';

// Additional
import { nanoid } from 'nanoid';

// Styles
import { styles } from './styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(userTokenSelector);
  const { pathname } = useLocation();

  const links: LinkDataType[] = [
    {
      id: nanoid(),
      enable: true,
      title: 'Мероприятия',
      path: Routes.Events,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(!token),
      title: 'Регистрация',
      path: Routes.Registration,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(!token),
      title: 'Войти',
      path: Routes.Authorization,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(token),
      title: 'Забронированные',
      path: Routes.Bookings,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: Boolean(token),
      title: 'Выйти',
      path: Routes.Authorization,
      onClick: (event: MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.blur();
        dispatch(setLogout());
      },
    },
  ];

  return (
    <header className={styles.header}>
      <Link to={Routes.Main}>
        <img src={logoIcon} width="210" alt="Логотип Event booking." />
      </Link>
      <nav>
        <ul className={styles.navigationList}>
          {links.map((link: LinkDataType) => {
            return (
              link.enable && (
                <li key={link.id} className={styles.navigationItem}>
                  <Link
                    variant={pathname === link.path ? 'contained' : 'outlined'}
                    to={link.path}
                    onClick={link.onClick}
                  >
                    {link.title}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
