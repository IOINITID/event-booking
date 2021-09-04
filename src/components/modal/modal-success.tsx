// Components imports
import { Modal } from './modal';

// Styles imports
import { styles } from './styles';

// Additional imports
import { css, cx } from '@emotion/css';

// Interfaces and types
interface IModalSuccess {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ModalSuccess = (props: IModalSuccess) => {
  return (
    <Modal
      isOpen={props.isOpen}
      cancelButton={{ title: 'Отмена', onClick: props.onCancel }}
      confirmButton={{ title: 'К забронированным ⟶', onClick: props.onConfirm }}
      width={592}
    >
      <header className={styles.header} />
      <div className={styles.content}>
        <h2 className={cx(styles.title, styles.titleSuccess)}>Бронирование прошло успешно!</h2>
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

export { ModalSuccess };
