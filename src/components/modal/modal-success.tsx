import React from 'react';
import { styles } from './styled';
import eventSuccessImage from '../../assets/images/event-success.jpg';
import { css, cx } from '@emotion/css';
import Modal from './modal';

interface IModalSuccess {
  isOpen: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const ModalSuccess = (props: IModalSuccess) => {
  return (
    <Modal
      isOpen={props.isOpen}
      cancelButton={{ title: 'Отмена', onClick: props.onCancel }}
      confirmButton={{ title: 'К забронированным ⟶', onClick: props.onConfirm }}
      width={808}
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
      </div>
    </Modal>
  );
};

export default ModalSuccess;
