// Components
import { Loader } from '../../components/loader';
import { BookingsTab } from '../../components/bookings-tab';
import { EventsTab } from '../../components/events-tab';
import { StatisticsTab } from '../../components/statistics-tab';

// Containers
import { ControlsContainer } from '../../containers/controls-container';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { controlTypeSelector, userBookingsSelector } from '../../store/bookingsSlice/selectors';

// Services
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_EVENT } from '../../services/events';
import { USER_EVENTS, USER_BOOKINGS } from '../../services/user';
import { CANCEL_BOOKING } from '../../services/bookings';

// Additional
import { toast } from 'react-toastify';

// Styles
import { styles } from './styles';
import { setUserEvents } from '../../store/eventsSlice';
import { setUserBookings } from '../../store/bookingsSlice';
import { userEventsSelector } from '../../store/eventsSlice/selectors';

const Bookings = () => {
  const dispatch = useDispatch();
  const controlType = useSelector(controlTypeSelector);
  const userEvents = useSelector(userEventsSelector);
  const userBookings = useSelector(userBookingsSelector);

  const { loading: userEventsLoadeing } = useQuery(USER_EVENTS, {
    onCompleted: ({ userEvents }) => {
      dispatch(setUserEvents(userEvents));
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: userBookingsLoading } = useQuery(USER_BOOKINGS, {
    onCompleted: ({ userBookings }) => {
      dispatch(setUserBookings(userBookings));
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEvent, { loading: deleteEventLoading }] = useMutation(DELETE_EVENT, {
    onCompleted: ({ deleteEvent }) => {
      dispatch(setUserEvents(userEvents.filter((event) => event.id !== deleteEvent.id)));
    },
    onError: ({ message }) => {
      toast.dark(message);
    },
    fetchPolicy: 'no-cache',
  });

  const [cancelBooking, { loading: cancelBookingLoading }] = useMutation(CANCEL_BOOKING, {
    onCompleted: ({ cancelBooking }) => {
      dispatch(setUserBookings(userBookings.filter((booking) => booking.id !== cancelBooking.id)));
    },
    fetchPolicy: 'no-cache',
  });

  const deleteBookingHandler = (bookingId: string) => {
    cancelBooking({ variables: { id: bookingId } });
  };

  const deleteEventHandler = (eventId: string) => {
    deleteEvent({ variables: { id: eventId } });
  };

  if (cancelBookingLoading || deleteEventLoading || userBookingsLoading || userEventsLoadeing) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <ControlsContainer />
      <div>
        {controlType === 'bookings' && (
          <BookingsTab bookings={userBookings} onBookingDeleteClick={deleteBookingHandler} />
        )}
        {controlType === 'events' && <EventsTab events={userEvents} onEventDeleteClick={deleteEventHandler} />}
        {controlType === 'statistics' && <StatisticsTab bookings={userBookings} />}
      </div>
    </div>
  );
};

export { Bookings };
