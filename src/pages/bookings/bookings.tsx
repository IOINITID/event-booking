import { useState } from 'react';

// Components
import { BookingList } from '../../components/booking-list';
import { Loader } from '../../components/loader';
import { BookingsChart } from '../../components/bookings-chart';
import { BookingsControl } from '../../components/bookings-controls';
import { ItemsList } from '../../components/items-list';

// Services
import { useMutation, useQuery } from '@apollo/client';
import { EVENTS, DELETE_EVENT } from '../../services/events';
import { USER_EVENTS } from '../../services/user';
import { GET_BOOKINGS, CANCEL_BOOKING } from '../../services/bookings';

// Types
import { ControlActiveType } from '../../components/bookings-controls/types';

// Additional
import { toast } from 'react-toastify';

// Styles
import { styles } from './styles';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const [type, setType] = useState<ControlActiveType>('booking');

  const { loading: userEventsLoadeing } = useQuery(USER_EVENTS, {
    onCompleted: ({ userEvents }) => {
      setUserEvents(userEvents);
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEvent, { loading: deleteEventLoading }] = useMutation(DELETE_EVENT, {
    onCompleted: ({ deleteEvent }) => {
      setUserEvents(userEvents.filter((event) => event.id !== deleteEvent.id));
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  // const { loading: bookingsLoading } = useQuery(GET_BOOKINGS, {
  //   onCompleted: (data) => {
  //     setBookings(data.bookings);
  //   },
  //   fetchPolicy: 'no-cache',
  // });

  const [cancelBooking, { loading: cancelBookingLoading }] = useMutation(CANCEL_BOOKING, {
    onCompleted: (data) => {
      const updatedBookings = bookings.filter((booking) => booking.event.id !== data.cancelBooking.id);
      setBookings(updatedBookings);
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

  const typeChangeHandler = (type: 'booking' | 'my' | 'data') => {
    setType(type);
  };

  if (deleteEventLoading || cancelBookingLoading || userEventsLoadeing) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <BookingsControl
        bookings={bookings}
        events={userEvents}
        onTypeChange={typeChangeHandler}
        activeOutputType={type}
      />
      <div>
        {type !== 'my' && type !== 'data' && <BookingList bookings={bookings} onDelete={deleteBookingHandler} />}
        {type === 'my' && <ItemsList events={userEvents} onDelete={deleteEventHandler} />}
        {type === 'data' && <BookingsChart bookings={bookings} />}
      </div>
    </div>
  );
};

export { Bookings };
