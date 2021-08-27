import { useDispatch, useSelector } from 'react-redux';
import { Controls } from '../../components/controls';
import { setControlType } from '../../store/bookingsSlice';
import { controlTypeSelector, userBookingsSelector } from '../../store/bookingsSlice/selectors';
import { ControlType } from '../../store/bookingsSlice/types';
import { userEventsSelector } from '../../store/eventsSlice/selectors';

const ControlsContainer = () => {
  const dispatch = useDispatch();
  const controlType = useSelector(controlTypeSelector);
  const userBookings = useSelector(userBookingsSelector);
  const userEvents = useSelector(userEventsSelector);

  const handleControlClick = (type: ControlType) => {
    dispatch(setControlType(type));
  };

  return (
    <Controls
      controlType={controlType}
      events={userEvents}
      bookings={userBookings}
      onControlClick={handleControlClick}
    />
  );
};

export { ControlsContainer };
