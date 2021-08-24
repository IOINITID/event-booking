// Components
import { EventsBanner } from '../../components/events-banner';

// Store
import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Routes
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes';

// Types
import { EventsBannerContainerProps } from './types';

const EventsBannerContainer = ({ onCreateEventClick }: EventsBannerContainerProps) => {
  const history = useHistory();
  const token = useSelector(userTokenSelector);

  const handleCreateAccountClick = () => history.push(Routes.Registration);

  return (
    <EventsBanner
      isAuthorizated={Boolean(token)}
      onCreateAccountClick={handleCreateAccountClick}
      onCreateEventClick={onCreateEventClick}
    />
  );
};

export { EventsBannerContainer };
