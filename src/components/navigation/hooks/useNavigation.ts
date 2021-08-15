import { MouseEvent } from 'react';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../../store/userSlice';
import { userTokenSelector } from '../../../store/userSlice/selectors';

// Router
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const token = useSelector(userTokenSelector);

  const handleNavigationLogoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();
    dispatch(setLogout());
  };

  return {
    pathname,
    isAuthorized: Boolean(token),
    onLogoutClick: handleNavigationLogoutClick,
  };
};
