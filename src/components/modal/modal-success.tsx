import React from 'react';
import {
  styledButton,
  styledButtonCancel,
  styledModal,
  styledModalActions,
  styledModalContent,
  styledModalHeader,
  styledModalImage,
} from './styled';
import eventSuccessImage from '../../assets/images/event-success.jpg';
import { useHistory } from 'react-router';
import { css, cx } from '@emotion/css';

const ModalSuccess = (props: any) => {
  const history = useHistory();

  return (
    <div
      className={cx(
        styledModal,
        css`
          width: 592px;
        `
      )}
    >
      <header className={styledModalHeader}>
        <img className={styledModalImage} src={eventSuccessImage} alt="" />
      </header>

      <div className={styledModalContent}>
        <h2>Бронирование прошло успешно!</h2>
        <p>Мероприятие появится у Вас в списке забронированных.</p>
        <div className={styledModalActions}>
          <button className={styledButtonCancel} onClick={props.onCancel}>
            Отмена
          </button>
          <button
            className={styledButton}
            onClick={() => {
              props.setIsSuccess(false);
              history.push('/bookings');
            }}
          >
            К забронированным ⟶
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
