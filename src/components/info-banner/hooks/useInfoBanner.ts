// Routes
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../routes';

// Types
import { InfoBannerType } from '../types';

export const useInfoBanner = (info: InfoBannerType) => {
  const history = useHistory();

  const title = 'Здесь пока пусто.';
  const description =
    info === 'events'
      ? 'Создай любое мероприятие, и оно появится в этом списке!'
      : 'Забронируй любое мероприятие, и оно появится в этом списке!';
  const buttonTitle = info === 'events' ? 'Создать мероприятие ⟶' : 'Забронировать мероприятие ⟶';
  const handleInfoBannerClick = () => history.push(Routes.Events);

  return { title, description, buttonTitle, handleInfoBannerClick };
};
