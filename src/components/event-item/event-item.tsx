import React from 'react';
import { styles } from './styled';
import dayjs from 'dayjs';
import Button from '../button';

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
      <div className={styles.container}>
        <img className={styles.image} src={props.image} alt="Изображение мероприятия." />
        <span className={styles.price}>{Number(props.price).toLocaleString()} ₽</span>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.date}>{dayjs(props.date).locale('ru').format('DD MMMM — HH:mm')}</p>
        <Button type="primary" className={styles.button} onClick={() => props.onDetail(props.eventId)}>
          Подробнее
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
