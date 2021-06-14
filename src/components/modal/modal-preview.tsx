import React from 'react';

// Components imports
import Modal from './index';

// Styles imports
import { styles } from './styled';

// Additional imports
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import { cx } from '@emotion/css';

// Interfaces and types
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

interface IModalPreview {
  isOpen: boolean;
  event: IEvent;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalPreview = (props: IModalPreview) => {
  return (
    <Modal
      isOpen={props.isOpen}
      cancelButton={{ title: 'Отмена', onClick: props.onCancel }}
      confirmButton={{ title: 'Забронировать ⟶', onClick: props.onConfirm }}
      width={808}
    >
      <header className={cx(styles.header, styles.preview)}>
        <img
          className={styles.image}
          width="176"
          height="176"
          src={props.event?.image}
          alt="Изображение мероприятия."
        />
        <span className={styles.price}>
          {props.event?.price ? `${Number(props.event?.price).toLocaleString()} ₽` : 'Бесплатно'}
        </span>
      </header>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.event?.title}</h3>
        <p className={styles.description}>{props.event?.description}</p>
        <div className={styles.infoContainer}>
          <time className={styles.time}>{dayjs(props.event?.date).locale(ru).format('DD MMMM — HH:mm')}</time>
          <p className={styles.location}>{props.event?.location}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPreview;
