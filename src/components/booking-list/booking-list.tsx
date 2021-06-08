import { css } from '@emotion/css';
import dayjs from 'dayjs';
import React from 'react';
import Button from '../button';
import { styles } from './styled';

const BookingList = (props: any) => {
  return (
    <ul className={styles.list}>
      {props.bookings.map((booking: any, index: number) => {
        return (
          <li className={styles.listItem} key={booking._id}>
            <span>{index}</span>
            <img
              className={css`
                width: 96px;
                height: 96px;
                border-radius: 8px;
                object-fit: cover;
              `}
              src={booking.event.image}
              alt="Изображение мероприятия."
            />
            <div
              className={css`
                max-width: 111px;
              `}
            >
              {booking.event.title}
            </div>
            <div>
              <div>{dayjs(booking.event.date).locale('ru').format('DD MMMM')}</div>
              <div>{dayjs(booking.event.date).locale('ru').format('HH:MM')}</div>
            </div>
            <div>{booking.event.price} ₽</div>
            <div
              className={css`
                max-width: 153px;
              `}
            >
              {booking.event.location}
            </div>
            <div>
              <Button type="outline" onClick={() => props.onDelete(booking._id)}>
                Отменить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
