import React from 'react';
import { styles } from './styled';
import eventSuccessImage from '../../assets/images/event-success.jpg';
import { css, cx } from '@emotion/css';
import Backdrop from '../backdrop';

interface IModalSuccess {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalSuccess = (props: IModalSuccess) => {
  return (
    <div>
      <Backdrop />
      <div
        className={cx(
          styles.container,
          css`
            width: 592px;
          `
        )}
      >
        <header className={styles.header}>
          <img className={styles.image} src={eventSuccessImage} alt="" />
        </header>
        <div className={styles.content}>
          <h2 className={styles.title}>Бронирование прошло успешно!</h2>
          <p
            className={cx(
              styles.description,
              css`
                margin-bottom: 32px;
              `
            )}
          >
            Мероприятие появится у Вас в списке забронированных.
          </p>
          <div className={styles.actions}>
            <button className={styles.buttonCancel} onClick={props.onCancel}>
              Отмена
            </button>
            <button className={styles.buttonConfirm} onClick={props.onConfirm}>
              К забронированным ⟶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
