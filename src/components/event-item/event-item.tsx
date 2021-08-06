// Components
import { Button } from '../button';

// Additional
import dayjs from 'dayjs';

// Styles
import { styles } from './styled';

// Interfaces or types
interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: {
    _id: string;
    email: string;
  };
}

type EventItemProps = {
  event: IEvent;
  onDetail: (eventId: string) => void;
};

const EventItem = ({ event, onDetail }: EventItemProps) => {
  return (
    <li className={styles.event}>
      <div className={styles.container}>
        <img className={styles.image} src={event.image} alt="Изображение мероприятия." />
        <span className={styles.price}>{event.price ? `${Number(event.price).toLocaleString()} ₽` : 'Бесплатно'}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.date}>{dayjs(event.date).locale('ru').format('DD MMMM — HH:mm')}</p>
        <Button className={styles.button} variant="leaf" onClick={() => onDetail(event._id)}>
          Подробнее
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
