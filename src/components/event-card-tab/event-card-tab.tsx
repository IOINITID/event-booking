// Components
import { Button } from '../button';

// Types
import { EventCardTabProps } from './types';

// Additional
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Styles
import { styles } from './styles';

const EventCardTab = ({ type, index, title, price, date, location, image, onDeleteClick }: EventCardTabProps) => {
  return (
    <div className={styles.container}>
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
        <Button className={styles.button} variant="outlined" onClick={onDeleteClick}>
          {type === 'bookings' ? 'Отменить' : 'Удалить'}
        </Button>
      </div>
    </div>
  );
};

export { EventCardTab };
