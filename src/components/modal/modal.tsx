import React, { Fragment } from 'react';
import { styles } from './styled';
import modalImage from '../../assets/images/modal-image.jpg';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import Backdrop from '../backdrop';

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
    <div>
      <Backdrop />
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
            <button className={styles.buttonCancel} onClick={props.onCancel}>
              Отмена
            </button>
            <button className={styles.buttonConfirm} onClick={props.onConfirm}>
              Забронировать ⟶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
