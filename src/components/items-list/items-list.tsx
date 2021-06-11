import dayjs from 'dayjs';
import React from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from '../../utils/constants';
import Button from '../button';
import InfoBanner from '../info-banner';
import { styles } from './styles';

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

interface ItemsList {
  events: IEvent[];
  onDelete: (eventId: string) => void;
}

const ItemsList = (props: ItemsList) => {
  const history = useHistory();

  if (!props.events.length) {
    return (
      <InfoBanner
        description=" Создай любое мероприятие, и оно появится в этом списке!"
        buttonTitle="Создать мероприятие"
        onClick={() => history.push(ROUTES.EVENTS)}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {props.events.map((event: IEvent, index: number) => {
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
              <Button type="outline" className={styles.button} onClick={() => props.onDelete(_id)}>
                Отменить
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
