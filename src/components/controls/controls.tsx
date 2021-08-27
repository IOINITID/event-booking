// Components
import { Button } from '../button';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setControlType } from '../../store/bookingsSlice';
import { controlTypeSelector } from '../../store/bookingsSlice/selectors';

// Types
import { ControlsDataType, ControlsProps } from './types';

// Additional imports
import { cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const Controls = ({ bookings, events }: ControlsProps) => {
  const dispatch = useDispatch();
  const controlType = useSelector(controlTypeSelector);

  const controlsData: ControlsDataType[] = [
    {
      title: 'Забронированные',
      type: 'bookings',
      length: bookings.length,
    },
    {
      title: 'Созданные мной',
      type: 'events',
      length: events.length,
    },
    {
      title: 'Статистика',
      type: 'statistics',
    },
  ];

  return (
    <div className={styles.control}>
      {controlsData.map(({ title, type, length }, index) => {
        const handleControlButtonClick = () => {
          dispatch(setControlType(type));
        };

        return (
          <Button
            key={`${type}-${index}`}
            className={cx(styles.button, controlType === type && 'active')}
            variant="contained"
            onClick={handleControlButtonClick}
          >
            {title} {type !== 'statistics' ? `(${length || 0})` : ''}
          </Button>
        );
      })}
    </div>
  );
};

export { Controls };
