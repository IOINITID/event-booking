import { cx } from '@emotion/css';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import {
  styledInfoBanner,
  styledInfoBannerText,
  styledInfoBannerLink,
  styledInfoBannerButton,
  styledInfoBannerAuthenticated,
  styledInfoBannerHeadingAuthenticated,
  styledInfoBannerHeading,
} from './styled';

const InfoBanner = (props: any) => {
  const token = useSelectorTyped(selectToken);

  return (
    <Fragment>
      {!token ? (
        <div className={styledInfoBanner}>
          <h2 className={styledInfoBannerHeading}>
            Регистрируй учётную запись, чтобы бронировать мероприятия и создавать свои
          </h2>
          <p className={styledInfoBannerText}>
            У Вас уже есть аккаунт?{' '}
            <NavLink className={styledInfoBannerLink} to="/authorization">
              Войдите в свой профиль
            </NavLink>
          </p>
          <NavLink className={styledInfoBannerButton} to="/registration">
            Создать аккаунт ⟶
          </NavLink>
        </div>
      ) : (
        <div className={cx(styledInfoBanner, styledInfoBannerAuthenticated)}>
          <h2 className={cx(styledInfoBannerHeading, styledInfoBannerHeadingAuthenticated)}>
            Создайте своё мероприятие, и другие пользователи получат возможность забронировать его
          </h2>
          <button className={styledInfoBannerButton} type="button" onClick={props.onCreateEvent}>
            Создать мероприятие ⟶
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default InfoBanner;
