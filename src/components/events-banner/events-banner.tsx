// Components imports
import { Button } from '../button';

// Store imports
import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Router imports
import { NavLink, useHistory } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

// Styles imports
import { styles } from './styled';

// Additional imports
import { cx } from '@emotion/css';

// Interfaces and types
interface IInfoBanner {
  onCreateEvent: () => void;
}

const InfoBanner = (props: IInfoBanner) => {
  const history = useHistory();
  const token = useSelector(userTokenSelector);

  return (
    <>
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
          <Button variant="contained" onClick={() => history.push(ROUTES.REGISTRATION)}>
            Создать аккаунт ⟶
          </Button>
        </div>
      ) : (
        <div className={cx(styles.infoBanner, styles.infoBannerAuthenticated)}>
          <h2 className={cx(styles.infoBannerHeading, styles.infoBannerHeadingAuthenticated)}>
            Создайте своё мероприятие, и другие пользователи получат возможность забронировать его
          </h2>
          <Button variant="contained" onClick={props.onCreateEvent}>
            Создать мероприятие ⟶
          </Button>
        </div>
      )}
    </>
  );
};

export default InfoBanner;
