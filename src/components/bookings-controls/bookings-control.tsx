// Components imports
import { Button } from '../button';

// Styles imports
import { styles } from './styled';

// Additional imports
import { cx } from '@emotion/css';

// Interfaces and types
interface IBookingsControl {
  bookings: any;
  events: any;
  activeOutputType: 'booking' | 'my' | 'data';
  onTypeChange: (type: 'booking' | 'my' | 'data') => void;
}

const BookingsControl = (props: IBookingsControl) => {
  return (
    <div className={styles.control}>
      <Button
        className={cx(styles.button, props.activeOutputType !== 'my' && props.activeOutputType !== 'data' && 'active')}
        variant="contained"
        onClick={() => props.onTypeChange('booking')}
      >
        Забронированные ({props.bookings.length || 0})
      </Button>
      <Button
        className={cx(styles.button, props.activeOutputType === 'my' && 'active')}
        variant="contained"
        onClick={() => props.onTypeChange('my')}
      >
        Созданные мной ({props.events.length || 0})
      </Button>
      <Button
        className={cx(styles.button, props.activeOutputType === 'data' && 'active')}
        variant="contained"
        onClick={() => props.onTypeChange('data')}
      >
        Статистика
      </Button>
    </div>
  );
};

export { BookingsControl };
