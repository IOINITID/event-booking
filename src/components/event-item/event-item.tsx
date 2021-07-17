// Components imports
import { Button } from '../button';

// Styles imports
import { styles } from './styled';

// Additional imports
import dayjs from 'dayjs';

// Interfaces and types
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

interface IEventItem {
  event: IEvent;
  onDetail: (eventId: string) => void;
}

const EventItem = (props: IEventItem) => {
  const { _id, title, date, price, image } = props.event;

  return (
    <li className={styles.event}>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="Изображение мероприятия." />
        <span className={styles.price}>{price ? `${Number(price).toLocaleString()} ₽` : 'Бесплатно'}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{dayjs(date).locale('ru').format('DD MMMM — HH:mm')}</p>
        <Button type="primary" className={styles.button} onClick={() => props.onDetail(_id)}>
          Подробнее
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
