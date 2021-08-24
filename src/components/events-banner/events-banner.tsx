// Components
import { Button } from '../button';

// Router
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes';

// Types
import { EventsBannerProps } from './types';

// Additional
import { cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const EventsBanner = ({ isAuthorizated, onCreateAccountClick, onCreateEventClick }: EventsBannerProps) => {
  return (
    <>
      {!isAuthorizated ? (
        <div className={styles.infoBanner}>
          <h2 className={styles.infoBannerHeading}>
            Регистрируй учётную запись, чтобы бронировать мероприятия и создавать свои
          </h2>
          <p className={styles.infoBannerText}>
            У Вас уже есть аккаунт?{' '}
            <NavLink className={styles.infoBannerLink} to={Routes.Authorization}>
              Войдите в свой профиль
            </NavLink>
          </p>
          <Button variant="contained" onClick={onCreateAccountClick}>
            Создать аккаунт ⟶
          </Button>
        </div>
      ) : (
        <div className={cx(styles.infoBanner, styles.infoBannerAuthenticated)}>
          <h2 className={cx(styles.infoBannerHeading, styles.infoBannerHeadingAuthenticated)}>
            Создайте своё мероприятие, и другие пользователи получат возможность забронировать его
          </h2>
          <Button variant="contained" onClick={onCreateEventClick}>
            Создать мероприятие ⟶
          </Button>
        </div>
      )}
    </>
  );
};

export { EventsBanner };
