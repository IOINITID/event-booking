// Components
import { EventsTab } from '../../components/events-tab';

// Services
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { BOOKINGS_CONTROLS_COUNTS } from '../../services/bookings/queries';
import { DELETE_EVENT } from '../../services/events';
import { USER_EVENTS } from '../../services/user';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setBookingsControlsCounts } from '../../store/bookingsSlice';
import { setUserEvents } from '../../store/eventsSlice';
import { userEventsSelector } from '../../store/eventsSlice/selectors';

// Additional
import { toast } from 'react-toastify';

const EventsTabContainer = () => {
  const dispatch = useDispatch();
  const userEvents = useSelector(userEventsSelector);

  const { loading } = useQuery(USER_EVENTS, {
    onCompleted: ({ userEvents }) => {
      dispatch(setUserEvents(userEvents));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const [bookingsControlsCounts] = useLazyQuery(BOOKINGS_CONTROLS_COUNTS, {
    onCompleted: ({ bookingsControlsCounts: { eventsCount, bookingsCount } }) => {
      dispatch(setBookingsControlsCounts({ eventsCount, bookingsCount }));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const [deleteEvent] = useMutation(DELETE_EVENT, {
    onCompleted: ({ deleteEvent }) => {
      dispatch(setUserEvents(userEvents.filter((event) => event.id !== deleteEvent.id)));
      bookingsControlsCounts();
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const handleEventDeleteClick = (eventId: string) => {
    deleteEvent({ variables: { id: eventId } });
  };

  return <EventsTab isLoading={loading} events={userEvents} onEventDeleteClick={handleEventDeleteClick} />;
};

export { EventsTabContainer };
