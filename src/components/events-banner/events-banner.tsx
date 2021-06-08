import { cx } from '@emotion/css';
import React, { Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import Button from '../button';
import { styles } from './styled';

interface IInfoBanner {
  onCreateEvent: () => void;
}

const InfoBanner = (props: IInfoBanner) => {
  const token = useSelectorTyped(selectToken);
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
            <NavLink className={styles.infoBannerLink} to="/authorization">
              Войдите в свой профиль
            </NavLink>
          </p>
          <Button type="primary" onClick={() => history.push('/registration')}>
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
