import React from 'react';
import { styledBookingsControl, styledBookingsControlButton } from './styled';
import { cx } from '@emotion/css';

const BookingsControl = (props: any) => {
  return (
    <div className={styledBookingsControl}>
      <button
        className={cx(styledBookingsControlButton, props.activeOutputType !== 'chart' ? 'active' : '')}
        onClick={() => props.onOutputTypeChange('list')}
      >
        List
      </button>
      <button
        className={cx(styledBookingsControlButton, props.activeOutputType === 'chart' ? 'active' : '')}
        onClick={() => props.onOutputTypeChange('chart')}
      >
        Chart
      </button>
    </div>
  );
};

export default BookingsControl;
