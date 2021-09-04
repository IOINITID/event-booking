// Containers
import { ControlsContainer } from '../../containers/controls-container';
import { EventsTabContainer } from '../../containers/events-tab-container';
import { BookingsTabContainer } from '../../containers/bookings-tab-container';
import { StatisticsTabContainer } from '../../containers/statistics-tab-container';

// Store
import { useSelector } from 'react-redux';
import { controlTypeSelector } from '../../store/bookingsSlice/selectors';

// Styles
import { styles } from './styles';

const Bookings = () => {
  const controlType = useSelector(controlTypeSelector);

  return (
    <div className={styles.container}>
      <ControlsContainer />
      <div>
        {controlType === 'bookings' && <BookingsTabContainer />}
        {controlType === 'events' && <EventsTabContainer />}
        {controlType === 'statistics' && <StatisticsTabContainer />}
      </div>
    </div>
  );
};

export { Bookings };
