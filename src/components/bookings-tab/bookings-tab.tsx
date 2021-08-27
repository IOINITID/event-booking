// Components
import { Button } from '../button';
import { InfoBanner } from '../info-banner';

// Types
import { BookingsTabProps } from './types';
import { BookingType } from '../../store/bookingsSlice/types';

// Hooks
import { useInfoBanner } from '../info-banner/hooks';

// Additional
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Styles
import { styles } from './styles';

const BookingsTab = ({ bookings, onBookingDeleteClick }: BookingsTabProps) => {
  const { title, description, buttonTitle, handleInfoBannerClick } = useInfoBanner('bookings');

  if (bookings.length === 0) {
    return (
      <InfoBanner
        type="bookings"
        title={title}
        description={description}
        buttonTitle={buttonTitle}
        onClick={handleInfoBannerClick}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {bookings.map(({ id, event: { title, price, date, location, image } }: BookingType, index: number) => {
        const handleBookingDeleteClick = () => onBookingDeleteClick(id);

        return (
          <li className={styles.listItem} key={id}>
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
              <Button variant="outlined" className={styles.button} onClick={handleBookingDeleteClick}>
                Отменить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { BookingsTab };
