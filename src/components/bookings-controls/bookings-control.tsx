import React from 'react';
import { styles } from './styled';
import { cx } from '@emotion/css';
import Button from '../button';

interface IBookingsControl {
  activeOutputType: 'booking' | 'my' | 'data';
  onOutputTypeChange: (type: 'booking' | 'my' | 'data') => void;
}

const BookingsControl = (props: IBookingsControl) => {
  return (
    <div className={styles.control}>
      <Button
        type="primary"
        className={cx(styles.button, props.activeOutputType !== 'my' && props.activeOutputType !== 'data' && 'active')}
        onClick={() => props.onOutputTypeChange('booking')}
      >
        Забронированные
      </Button>
      <Button
        type="primary"
        className={cx(styles.button, props.activeOutputType === 'my' && 'active')}
        onClick={() => props.onOutputTypeChange('my')}
      >
        Созданные мной
      </Button>
      <Button
        type="primary"
        className={cx(styles.button, props.activeOutputType === 'data' && 'active')}
        onClick={() => props.onOutputTypeChange('data')}
      >
        Статистика
      </Button>
    </div>
  );
};

export default BookingsControl;
