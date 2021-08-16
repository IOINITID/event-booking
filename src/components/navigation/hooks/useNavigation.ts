import { MouseEvent } from 'react';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../../store/userSlice';
import { userTokenSelector } from '../../../store/userSlice/selectors';

// Router
import { useLocation } from 'react-router-dom';
import { Routes } from '../../../routes';

// Types
import { LinkDataType } from '../types';

// Additional
import { nanoid } from 'nanoid';

export const useNavigation = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const token = useSelector(userTokenSelector);

  const handleNavigationLogoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
    dispatch(setLogout());
  };

  const linksData: LinkDataType[] = [
    {
      id: nanoid(),
      enable: true,
      title: 'Мероприятия',
      path: Routes.Events,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: !token,
      title: 'Регистрация',
      path: Routes.Registration,
      onClick: null,
    },
    {
      id: nanoid(),
      enable: !token,
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
      onClick: handleNavigationLogoutClick,
    },
  ];

  return {
    pathname,
    linksData,
  };
};
