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
import { css, cx } from '@emotion/css';

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
        <img
          className={styledModalImage}
          width="176"
          height="176"
          src={props.image ? props.image : modalImage}
          alt="Изображение мероприятия."
        />
        <span className={styledModalPrice}>{Number(props.price).toLocaleString()} ₽</span>
      </header>
      <div className={styledModalContent}>
        <h3
          className={css`
            margin: 0;
            margin-bottom: 16px;
            font-weight: 700;
            font-size: 30px;
            line-height: 36px;
            font-family: 'Grandis Extended', 'Arial', sans-serif;
            color: #282828;
          `}
        >
          {props.title}
        </h3>
        <p
          className={css`
            margin: 0;
            margin-bottom: 20px;
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            font-family: 'Grandis Extended', 'Arial', sans-serif;
            color: #282828;
          `}
        >
          {props.description}
        </p>
        <div
          className={css`
            display: grid;
            align-items: center;
            grid-template-columns: repeat(2, max-content);
            margin-bottom: 54px;
            column-gap: 64px;
          `}
        >
          <time
            className={css`
              font-weight: 500;
              font-size: 16px;
              line-height: 16px;
              font-family: 'Grandis Extended', 'Arial', sans-serif;
              color: #282828;
            `}
          >
            {dayjs(props.date).locale(ru).format('DD MMMM — HH:mm')}
          </time>
          <p
            className={css`
              margin: 0;
              font-weight: 500;
              font-size: 16px;
              line-height: 16px;
              font-family: 'Grandis Extended', 'Arial', sans-serif;
              color: #282828;
            `}
          >
            {props.location}
          </p>
        </div>
        <div
          className={cx(
            styledModalActions,
            css`
              padding: 0;
            `
          )}
        >
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
