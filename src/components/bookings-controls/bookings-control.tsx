import React from 'react';
import { styledBookingsControl, styledBookingsControlButton } from './styled';
import { cx } from '@emotion/css';

const BookingsControl = (props: any) => {
  return (
    <div className={styledBookingsControl}>
      <button
        className={cx(
          styledBookingsControlButton,
          props.activeOutputType !== 'my' && props.activeOutputType !== 'data' && 'active'
        )}
        onClick={() => props.onOutputTypeChange('booking')}
      >
        Забронированные
      </button>
      <button
        className={cx(styledBookingsControlButton, props.activeOutputType === 'my' && 'active')}
        onClick={() => props.onOutputTypeChange('my')}
      >
        Созданные мной
      </button>
      <button
        className={cx(styledBookingsControlButton, props.activeOutputType === 'data' && 'active')}
        onClick={() => props.onOutputTypeChange('data')}
      >
        Статистика
      </button>
    </div>
  );
};

export default BookingsControl;
