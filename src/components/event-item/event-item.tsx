// Components
import { Button } from '../button';

// Types
import { EventItemProps } from './types';

// Additional
import dayjs from 'dayjs';

// Styles
import { styles } from './styles';

const EventItem = ({ event, onDetailClick }: EventItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img className={styles.image} src={event.image} alt="Изображение мероприятия." />
        <span className={styles.price}>{event.price ? `${Number(event.price).toLocaleString()} ₽` : 'Бесплатно'}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.date}>{dayjs(event.date).locale(dayjs.locale('ru')).format('DD MMMM — HH:mm')}</p>
        <Button className={styles.button} variant="leaf" onClick={onDetailClick}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export { EventItem };
