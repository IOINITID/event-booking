// Components
import { Button } from '../button';
import { InfoBanner } from '../info-banner';

// Types
import { EventProps, ItemsListProps } from './types';

// Hooks
import { useInfoBanner } from '../info-banner/hooks';

// Additional
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Styles
import { styles } from './styles';

const ItemsList = ({ events, onDelete }: ItemsListProps) => {
  const { title, description, buttonTitle, handleInfoBannerClick } = useInfoBanner('events');

  if (events.length === 0) {
    return (
      <InfoBanner
        type="events"
        title={title}
        description={description}
        buttonTitle={buttonTitle}
        onClick={handleInfoBannerClick}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {events.map((event: EventProps, index: number) => {
        const { _id, title, image, date, price, location } = event;

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
              <Button className={styles.button} variant="outlined" onClick={() => onDelete(_id)}>
                Отменить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { ItemsList };
