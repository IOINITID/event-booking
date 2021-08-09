import { MouseEvent } from 'react';

// Components
import { Link } from '../link';
import logoIcon from '../../assets/images/logo-icon.svg';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/userSlice';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Types
import { LinkDataType } from './types';

// Router
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

// Styles
import { styles } from './styled';

// Additional
import { nanoid } from 'nanoid';

const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(userTokenSelector);
  const { pathname } = useLocation();

  const links: LinkDataType[] = [
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
      onClick: (event: MouseEvent<HTMLAnchorElement>) => {
        event.currentTarget.blur();
        dispatch(logout());
      },
    },
  ];

  return (
    <header className={styles.header}>
      <Link to={ROUTES.MAIN}>
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
