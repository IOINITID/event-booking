// Components
import { Controls } from '../../components/controls';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setControlType, setUserBookings } from '../../store/bookingsSlice';
import { setUserEvents } from '../../store/eventsSlice';
import { controlTypeSelector, userBookingsSelector } from '../../store/bookingsSlice/selectors';
import { userEventsSelector } from '../../store/eventsSlice/selectors';
import { ControlType } from '../../store/bookingsSlice/types';

// Services
import { useQuery } from '@apollo/client';
import { USER_BOOKINGS, USER_EVENTS } from '../../services/user';

// Additional
import { toast } from 'react-toastify';

const ControlsContainer = () => {
  const dispatch = useDispatch();
  const controlType = useSelector(controlTypeSelector);
  const userBookings = useSelector(userBookingsSelector);
  const userEvents = useSelector(userEventsSelector);

  useQuery(USER_EVENTS, {
    onCompleted: ({ userEvents }) => {
      dispatch(setUserEvents(userEvents));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
    fetchPolicy: 'no-cache',
  });

  useQuery(USER_BOOKINGS, {
    onCompleted: ({ userBookings }) => {
      dispatch(setUserBookings(userBookings));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
    fetchPolicy: 'no-cache',
  });

  const handleControlClick = (type: ControlType) => {
    dispatch(setControlType(type));
  };

  return (
    <Controls
      controlType={controlType}
      eventsCount={userEvents.length}
      bookingsCount={userBookings.length}
      onControlClick={handleControlClick}
    />
  );
};

export { ControlsContainer };
