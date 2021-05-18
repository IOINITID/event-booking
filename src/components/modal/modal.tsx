import React from 'react';
import { styledHeader } from '../navigation/styled';
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

interface IModal {
  title: string;
  children: any;
  cancel: boolean;
  confirm: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
}

const Modal = (props: IModal) => {
  return (
    <div className={styledModal}>
      <header className={styledModalHeader}>
        <img className={styledModalImage} src={modalImage} alt="Изображение мероприятия." />
        <span className={styledModalPrice}>1 360 ₽</span>
      </header>

      <div className={styledModalContent}>
        <h3>{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.{' '}
        </p>
        <time>20 мая - 16:30</time>
        <p>Van Gogh Museum, Amsterdam</p>
        <div className={styledModalActions}>
          <button className={styledButtonCancel} onClick={props.onCancel}>
            Отмена
          </button>
          <button className={styledButton} onClick={props.onConfirm}>
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
