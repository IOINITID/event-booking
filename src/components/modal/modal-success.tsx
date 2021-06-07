import React from 'react';
import { styles } from './styled';
import eventSuccessImage from '../../assets/images/event-success.jpg';
import { css, cx } from '@emotion/css';
import Button from '../button';

interface IModalSuccess {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalSuccess = (props: IModalSuccess) => {
  return (
    <div className={styles.backdrop}>
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
            <Button type="outline" onClick={props.onCancel}>
              Отмена
            </Button>
            <Button type="primary" onClick={props.onConfirm}>
              К забронированным ⟶
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
