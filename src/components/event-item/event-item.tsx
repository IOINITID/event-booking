// Components
import { Button } from '../button';

// Additional
import dayjs from 'dayjs';

// Styles
import { styles } from './styles';

// Interfaces or types
type EventType = {
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
};

type EventItemProps = {
  event: EventType;
  onDetailClick: (eventId: string) => void;
};

const EventItem = ({ event, onDetailClick }: EventItemProps) => {
  const handleDetailClick = () => onDetailClick(event._id);

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img className={styles.image} src={event.image} alt="Изображение мероприятия." />
        <span className={styles.price}>{event.price ? `${Number(event.price).toLocaleString()} ₽` : 'Бесплатно'}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.date}>{dayjs(event.date).locale('ru').format('DD MMMM — HH:mm')}</p>
        <Button className={styles.button} variant="leaf" onClick={handleDetailClick}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export { EventItem };
