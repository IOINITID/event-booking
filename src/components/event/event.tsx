// Components
import { Button } from '../button';

// Types
import { EventProps } from './types';

// Additional
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Styles
import { styles } from './styles';

const Event = ({ title, date, price, image, onDetailClick }: EventProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img className={styles.image} src={image} alt="Изображение мероприятия." />
        <span className={styles.price}>{price ? `${Number(price).toLocaleString()} ₽` : 'Бесплатно'}</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{dayjs(date).locale(dayjs.locale('ru')).format('DD MMMM — HH:mm')}</p>
        <Button className={styles.button} variant="leaf" onClick={onDetailClick}>
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export { Event };
