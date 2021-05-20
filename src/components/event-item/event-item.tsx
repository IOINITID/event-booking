import React from 'react';
import { selectUserId } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import {
  styledEvent,
  styledEventImage,
  styledEventImageContainer,
  styledEventInfo,
  styledEventItemButton,
  styledEventPrice,
} from './styled';
import eventImage from '../../assets/images/event-image.jpg';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

const EventItem = (props: any) => {
  return (
    <li className={styledEvent} key={props.eventId}>
      <div className={styledEventImageContainer}>
        <img className={styledEventImage} src={eventImage} alt="Изображение мероприятия." />
        <span className={styledEventPrice}>{props.price} ₽</span>
      </div>
      <div className={styledEventInfo}>
        <h3>{props.title}</h3>
        <p>{dayjs(props.date).locale(ru).format('DD MMMM — HH:mm')}</p>
        <button className={styledEventItemButton} type="button" onClick={props.onDetail.bind(this, props.eventId)}>
          Подробнее
        </button>
      </div>
    </li>
  );
};

export default EventItem;
