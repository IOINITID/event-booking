// Components imports
import { Button } from '../button';
import { InfoBanner } from '../info-banner';

// Router imports
import { useHistory } from 'react-router';
import { Routes } from '../../routes';

// Types
import { BookingListProps, BookingProps } from './types';

// Additional imports
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Styles imports
import { styles } from './styles';

const BookingList = ({ bookings, onDelete }: BookingListProps) => {
  const history = useHistory();

  if (!bookings.length) {
    const handleInfoBannerButtonClick = () => history.push(Routes.Events);
    return (
      <InfoBanner
        description="Забронируй любое мероприятие, и оно появится в этом списке!"
        buttonTitle="Забронировать мероприятие"
        onClick={handleInfoBannerButtonClick}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {bookings.map(({ _id, event }: BookingProps, index: number) => {
        const { title, image, date, price, location } = event;
        const handleBookingListButtonClick = () => onDelete(_id);

        return (
          <li className={styles.listItem} key={_id}>
            <span className={styles.number}>{index + 1}</span>
            <img className={styles.image} src={image} alt="Изображение мероприятия." />
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>
              <div>{dayjs(date).locale('ru').format('DD MMMM')}</div>
              <div>{dayjs(date).locale('ru').format('HH:MM')}</div>
            </div>
            <div className={styles.price}>{price ? `${Number(price).toLocaleString()} ₽` : 'Бесплатно'}</div>
            <div className={styles.location}>{location}</div>
            <div>
              <Button variant="outlined" className={styles.button} onClick={handleBookingListButtonClick}>
                Отменить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { BookingList };
