// Components
import { Button } from '../button';
import { InfoBanner } from '../info-banner';

// Types
import { EventsTabProps } from './types';

// Hooks
import { useInfoBanner } from '../info-banner/hooks';

// Additional
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Styles
import { styles } from './styles';
import { EventType } from '../../store/eventsSlice/types';

const EventsTab = ({ events, onEventDeleteClick }: EventsTabProps) => {
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
      {events.map(({ id, title, price, date, location, image }: EventType, index: number) => {
        const handleEventDeleteClick = () => onEventDeleteClick(id);

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
              <Button className={styles.button} variant="outlined" onClick={handleEventDeleteClick}>
                Удалить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { EventsTab };
