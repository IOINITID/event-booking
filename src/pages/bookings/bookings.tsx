// Components
import { StatisticsTab } from '../../components/statistics-tab';

// Containers
import { ControlsContainer } from '../../containers/controls-container';
import { EventsTabContainer } from '../../containers/events-tab-container';

// Store
import { useSelector } from 'react-redux';
import { controlTypeSelector, userBookingsSelector } from '../../store/bookingsSlice/selectors';

// Styles
import { styles } from './styles';
import { BookingsTabContainer } from '../../containers/bookings-tab-container';

const Bookings = () => {
  const controlType = useSelector(controlTypeSelector);
  const userBookings = useSelector(userBookingsSelector);

  return (
    <div className={styles.container}>
      <ControlsContainer />
      <div>
        {controlType === 'bookings' && <BookingsTabContainer />}
        {controlType === 'events' && <EventsTabContainer />}
        {controlType === 'statistics' && <StatisticsTab bookings={userBookings} />}
      </div>
    </div>
  );
};

export { Bookings };
