import { useState } from 'react';

// Components
import { BookingList } from '../../components/booking-list';
import { Loader } from '../../components/loader';
import { BookingsChart } from '../../components/bookings-chart';
import { ItemsList } from '../../components/items-list';

// Containers
import { ControlsContainer } from '../../containers/controls-container';

// Store
import { useSelector } from 'react-redux';
import { controlTypeSelector } from '../../store/bookingsSlice/selectors';

// Services
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_EVENT } from '../../services/events';
import { USER_EVENTS, USER_BOOKINGS } from '../../services/user';
import { CANCEL_BOOKING } from '../../services/bookings';

// Additional
import { toast } from 'react-toastify';

// Styles
import { styles } from './styles';

const Bookings = () => {
  const controlType = useSelector(controlTypeSelector);
  const [userEvents, setUserEvents] = useState([]);
  const [userBookings, setUserBookings] = useState([]);

  const { loading: userEventsLoadeing } = useQuery(USER_EVENTS, {
    onCompleted: ({ userEvents }) => {
      setUserEvents(userEvents);
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: userBookingsLoading } = useQuery(USER_BOOKINGS, {
    onCompleted: ({ userBookings }) => {
      setUserBookings(userBookings);
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEvent, { loading: deleteEventLoading }] = useMutation(DELETE_EVENT, {
    onCompleted: ({ deleteEvent }) => {
      setUserEvents(userEvents.filter((event) => event.id !== deleteEvent.id));
    },
    onError: ({ message }) => {
      toast.dark(message);
    },
    fetchPolicy: 'no-cache',
  });

  const [cancelBooking, { loading: cancelBookingLoading }] = useMutation(CANCEL_BOOKING, {
    onCompleted: ({ cancelBooking }) => {
      const updatedBookings = userBookings.filter((booking) => booking.id !== cancelBooking.id);
      setUserBookings(updatedBookings);
    },
    fetchPolicy: 'no-cache',
  });

  // Components handlers
  const deleteBookingHandler = (bookingId: string) => {
    cancelBooking({
      variables: {
        id: bookingId,
      },
    });
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
        {controlType === 'bookings' && <BookingList bookings={userBookings} onDelete={deleteBookingHandler} />}
        {controlType === 'events' && <ItemsList events={userEvents} onDelete={deleteEventHandler} />}
        {controlType === 'statistics' && <BookingsChart bookings={userBookings} />}
      </div>
    </div>
  );
};

export { Bookings };
