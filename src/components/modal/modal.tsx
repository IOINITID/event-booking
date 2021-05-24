import React from 'react';
import {
  styledButton,
  styledButtonCancel,
  styledModal,
  styledModalActions,
  styledModalContent,
  styledModalHeader,
  styledModalImage,
  styledModalPrice,
} from './styled';
import modalImage from '../../assets/images/modal-image.jpg';
import { useSelectorTyped } from '../../hooks';
import { selectToken } from '../../features/user/userSlice';
import { useHistory } from 'react-router';
import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

interface IModal {
  title?: string;
  description?: string;
  date?: string;
  price?: number;
  children?: any;
  cancel?: boolean;
  confirm?: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  confirmText?: string;
}

const Modal = (props: any) => {
  const token = useSelectorTyped(selectToken);
  const history = useHistory();

  return (
    <div className={styledModal}>
      <header className={styledModalHeader}>
        <img className={styledModalImage} src={props.image ? props.image : modalImage} alt="Изображение мероприятия." />
        <span className={styledModalPrice}>{Number(props.price).toLocaleString()} ₽</span>
      </header>
      <div className={styledModalContent}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <time>{dayjs(props.date).locale(ru).format('DD MMMM — HH:mm')}</time>
        <p>{props.location}</p>
        <div className={styledModalActions}>
          <button className={styledButtonCancel} onClick={props.onCancel}>
            Отмена
          </button>
          <button className={styledButton} onClick={() => (token ? props.onConfirm() : history.push('/authorization'))}>
            Забронировать ⟶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
