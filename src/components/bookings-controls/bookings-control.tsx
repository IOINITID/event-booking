// Components
import { Button } from '../button';

// Types
import { BookingsControlProps, ControlsDataType } from './types';

// Additional imports
import { cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const BookingsControl = ({ bookings, events, activeOutputType, onTypeChange }: BookingsControlProps) => {
  const ControlsData: ControlsDataType[] = [
    {
      title: 'Забронированные',
      type: 'booking',
      length: bookings.length,
    },
    {
      title: 'Созданные мной',
      type: 'my',
      length: events.length,
    },
    {
      title: 'Статистика',
      type: 'data',
    },
  ];

  return (
    <div className={styles.control}>
      {ControlsData.map(({ title, type, length }, index) => {
        const handleControlButtonClick = () => onTypeChange(type);

        return (
          <Button
            key={`${type}-${index}`}
            className={cx(styles.button, activeOutputType === type && 'active')}
            variant="contained"
            onClick={handleControlButtonClick}
          >
            {title} {type !== 'data' ? `(${length || 0})` : ''}
          </Button>
        );
      })}
    </div>
  );
};

export { BookingsControl };
