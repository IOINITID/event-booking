import React from 'react';
import { styles } from './styled';
import { cx } from '@emotion/css';

interface IBookingsControl {
  activeOutputType: 'booking' | 'my' | 'data';
  onOutputTypeChange: (type: 'booking' | 'my' | 'data') => void;
}

const BookingsControl = (props: IBookingsControl) => {
  return (
    <div className={styles.control}>
      <button
        className={cx(styles.button, props.activeOutputType !== 'my' && props.activeOutputType !== 'data' && 'active')}
        onClick={() => props.onOutputTypeChange('booking')}
      >
        Забронированные
      </button>
      <button
        className={cx(styles.button, props.activeOutputType === 'my' && 'active')}
        onClick={() => props.onOutputTypeChange('my')}
      >
        Созданные мной
      </button>
      <button
        className={cx(styles.button, props.activeOutputType === 'data' && 'active')}
        onClick={() => props.onOutputTypeChange('data')}
      >
        Статистика
      </button>
    </div>
  );
};

export default BookingsControl;
