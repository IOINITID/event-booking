// Components
import { Modal } from './index';

// Styles
import { styles } from './styles';

// Additional
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { cx } from '@emotion/css';
import { EventType } from '../../store/eventsSlice/types';

type ModalPreviewProps = {
  isOpen: boolean;
  event: EventType | null;
  onCancel: () => void;
  onConfirm: () => void;
};

const ModalPreview = ({ isOpen, event, onCancel, onConfirm }: ModalPreviewProps) => {
  return (
    <Modal
      isOpen={isOpen}
      cancelButton={{ title: 'Отмена', onClick: onCancel }}
      confirmButton={{ title: 'Забронировать ⟶', onClick: onConfirm }}
      width={808}
    >
      <header className={cx(styles.header, styles.preview)}>
        <img className={styles.image} width="176" height="176" src={event?.image} alt="Изображение мероприятия." />
        <span className={styles.price}>
          {event?.price ? `${Number(event?.price).toLocaleString()} ₽` : 'Бесплатно'}
        </span>
      </header>
      <div className={styles.content}>
        <h3 className={styles.title}>{event?.title}</h3>
        <p className={styles.description}>{event?.description}</p>
        <div className={styles.infoContainer}>
          <time className={styles.time}>{dayjs(event?.date).locale('ru').format('DD MMMM — HH:mm')}</time>
          <p className={styles.location}>{event?.location}</p>
        </div>
      </div>
    </Modal>
  );
};

export { ModalPreview };
