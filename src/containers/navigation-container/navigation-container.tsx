// Components
import { Navigation } from '../../components/navigation';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/userSlice';
import { tokenSelector } from '../../store/userSlice/selectors';

// Router
import { useLocation } from 'react-router-dom';
import { Routes } from '../../routes';

// Types
import { LinkDataType } from '../../components/navigation/types';

// Additional
import { nanoid } from 'nanoid';

const NavigationContainer = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const token = useSelector(tokenSelector);

  const handleNavigationLogoutClick = () => dispatch(setLogout());

  const linksData: LinkDataType[] = [
    {
      id: nanoid(),
      enable: true,
      title: 'Мероприятия',
      path: Routes.Events,
      onClick: undefined,
    },
    {
      id: nanoid(),
      enable: !token,
      title: 'Регистрация',
      path: Routes.Registration,
      onClick: undefined,
    },
    {
      id: nanoid(),
      enable: !token,
      title: 'Войти',
      path: Routes.Authorization,
      onClick: undefined,
    },
    {
      id: nanoid(),
      enable: Boolean(token),
      title: 'Забронированные',
      path: Routes.Bookings,
      onClick: undefined,
    },
    {
      id: nanoid(),
      enable: Boolean(token),
      title: 'Выйти',
      path: Routes.Authorization,
      onClick: handleNavigationLogoutClick,
    },
  ];

  return <Navigation pathname={pathname} linksData={linksData} />;
};

export { NavigationContainer };
