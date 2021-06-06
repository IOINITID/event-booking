import React from 'react';
import { styles } from './styled';
import eventImage from '../../assets/images/event-image.jpg';
import dayjs from 'dayjs';

interface IEventItem {
  eventId: string;
  image: string;
  price: string;
  title: string;
  date: string;
  onDetail: (eventId: string) => void;
}

const EventItem = (props: IEventItem) => {
  return (
    <li className={styles.event} key={props.eventId}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.image ? props.image : eventImage} alt="Изображение мероприятия." />
        <span className={styles.price}>{Number(props.price).toLocaleString()} ₽</span>
      </div>
      <div className={styles.info}>
        <h3>{props.title}</h3>
        <p>{dayjs(props.date).locale('ru').format('DD MMMM — HH:mm')}</p>
        <button className={styles.button} type="button" onClick={() => props.onDetail(props.eventId)}>
          Подробнее
        </button>
      </div>
    </li>
  );
};

export default EventItem;
