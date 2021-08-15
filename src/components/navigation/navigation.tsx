// Components
import { Link } from '../link';
import logoIcon from '../../assets/images/logo-icon.svg';

// Router
import { Routes } from '../../routes';

// Types
import { LinkDataType } from './types';

// Hooks
import { useNavigation } from './hooks';

// Additional
import { nanoid } from 'nanoid';

// Styles
import { styles } from './styles';
import { useRenderCount } from '../../hooks';

const Navigation = () => {
  const { pathname, isAuthorized, onLogoutClick } = useNavigation();

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
      enable: !isAuthorized,
      title: 'Регистрация',
      path: Routes.Registration,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: !isAuthorized,
      title: 'Войти',
      path: Routes.Authorization,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: isAuthorized,
      title: 'Забронированные',
      path: Routes.Bookings,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: isAuthorized,
      title: 'Выйти',
      path: Routes.Authorization,
      onClick: onLogoutClick,
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
