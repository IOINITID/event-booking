import React, { Fragment } from 'react';

// Components imports
import Button from '../button';

// Store imports
import { NavLink, useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

// Router imports
import { useSelectorTyped } from '../../hooks';
import { selectToken } from '../../features/user/userSlice';

// Styles imports
import { styles } from './styled';

// Additional imports
import { cx } from '@emotion/css';

// Interfaces and types
interface IInfoBanner {
  onCreateEvent: () => void;
}

const InfoBanner = (props: IInfoBanner) => {
  // Store values
  const token = useSelectorTyped(selectToken);

  // Router values
  const history = useHistory();

  return (
    <Fragment>
      {!token ? (
        <div className={styles.infoBanner}>
          <h2 className={styles.infoBannerHeading}>
            Регистрируй учётную запись, чтобы бронировать мероприятия и создавать свои
          </h2>
          <p className={styles.infoBannerText}>
            У Вас уже есть аккаунт?{' '}
            <NavLink className={styles.infoBannerLink} to={ROUTES.AUTHORIZATION}>
              Войдите в свой профиль
            </NavLink>
          </p>
          <Button type="primary" onClick={() => history.push(ROUTES.REGISTRATION)}>
            Создать аккаунт ⟶
          </Button>
        </div>
      ) : (
        <div className={cx(styles.infoBanner, styles.infoBannerAuthenticated)}>
          <h2 className={cx(styles.infoBannerHeading, styles.infoBannerHeadingAuthenticated)}>
            Создайте своё мероприятие, и другие пользователи получат возможность забронировать его
          </h2>
          <Button type="primary" onClick={props.onCreateEvent}>
            Создать мероприятие ⟶
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default InfoBanner;
