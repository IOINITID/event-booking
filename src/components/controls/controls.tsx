// Components
import { Button } from '../button';

// Types
import { ControlsDataType, ControlsProps } from './types';

// Additional imports
import { cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const Controls = ({ controlType, controlsCounts, onControlClick }: ControlsProps) => {
  const controlsData: ControlsDataType[] = [
    {
      title: 'Забронированные',
      type: 'bookings',
      length: controlsCounts?.bookingsCount,
    },
    {
      title: 'Созданные мной',
      type: 'events',
      length: controlsCounts?.eventsCount,
    },
    {
      title: 'Статистика',
      type: 'statistics',
    },
  ];

  return (
    <div className={styles.control}>
      {controlsData.map(({ title, type, length }, index) => {
        const handleControlClick = () => onControlClick(type);

        return (
          <Button
            key={`${type}-${index}`}
            className={cx(styles.button, controlType === type && 'active')}
            variant="contained"
            onClick={handleControlClick}
          >
            {title} {type !== 'statistics' ? `(${length || 0})` : ''}
          </Button>
        );
      })}
    </div>
  );
};

export { Controls };
