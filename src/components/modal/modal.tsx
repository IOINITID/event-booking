import React from 'react';
import { styles } from './styled';
import modalImage from '../../assets/images/modal-image.jpg';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import Button from '../button';

interface IModal {
  title: string;
  description: string;
  date: string;
  price: number;
  location: string;
  image: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Modal = (props: IModal) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            className={styles.image}
            width="176"
            height="176"
            src={props.image || modalImage}
            alt="Изображение мероприятия."
          />
          <span className={styles.price}>{Number(props.price).toLocaleString()} ₽</span>
        </header>
        <div className={styles.content}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
          <div className={styles.infoContainer}>
            <time className={styles.time}>{dayjs(props.date).locale(ru).format('DD MMMM — HH:mm')}</time>
            <p className={styles.location}>{props.location}</p>
          </div>
          <div className={styles.actions}>
            <Button buttonType="outline" onClick={props.onCancel}>
              Отмена
            </Button>
            <Button buttonType="default" onClick={props.onConfirm}>
              Забронировать ⟶
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
