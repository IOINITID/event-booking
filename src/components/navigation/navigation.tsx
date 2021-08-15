import { MouseEvent } from 'react';

// Components
import { Link } from '../link';
import logoIcon from '../../assets/images/logo-icon.svg';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/userSlice';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Router
import { useLocation } from 'react-router-dom';
import { Routes } from '../../routes';

// Types
import { LinkDataType } from './types';

// Additional
import { nanoid } from 'nanoid';

// Styles
import { styles } from './styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const token = useSelector(userTokenSelector);
  const { pathname } = useLocation();

  const LinksData: LinkDataType[] = [
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
          {LinksData.map(({ id, enable, title, path, onClick }: LinkDataType) => {
            return (
              enable && (
                <li key={id} className={styles.navigationItem}>
                  <Link variant={pathname === path ? 'contained' : 'outlined'} to={path} onClick={onClick}>
                    {title}
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
