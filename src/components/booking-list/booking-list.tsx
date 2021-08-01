// Components imports
import { Button } from '../button';
import InfoBanner from '../info-banner';

// Router imports
import { useHistory } from 'react-router';
import { ROUTES } from '../../utils/constants';

// Styles imports
import { styles } from './styled';

// Additional imports
import dayjs from 'dayjs';

// Interfaces and types
interface IBooking {
  _id: string;
  event: IEvent;
}

interface IEvent {
  title: string;
  price: string;
  date: string;
  location: string;
  image: string;
}

interface IBookingList {
  bookings: IBooking[];
  onDelete: (bookingId: string) => void;
}

const BookingList = (props: IBookingList) => {
  // Store values
  const history = useHistory();

  if (!props.bookings.length) {
    return (
      <InfoBanner
        description="Забронируй любое мероприятие, и оно появится в этом списке!"
        buttonTitle="Забронировать мероприятие"
        onClick={() => history.push(ROUTES.EVENTS)}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {props.bookings.map((booking: IBooking, index: number) => {
        const { title, image, date, price, location } = booking.event;

        return (
          <li className={styles.listItem} key={booking._id}>
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
              <Button variant="outlined" className={styles.button} onClick={() => props.onDelete(booking._id)}>
                Отменить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
