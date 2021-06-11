import React, { useState } from 'react';

// Components imports
import BookingList from '../booking-list';
import Loader from '../loader';
import BookingsChart from '../bookings-chart';
import BookingsControl from '../bookings-controls';
import ItemsList from '../items-list';

// GraphQL imports
import { useMutation, useQuery } from '@apollo/client';
import { EVENTS, GET_BOOKINGS } from '../../graphql/queries';
import { DELETE_EVENT } from '../../graphql/mutations';
import { CANCEL_BOOKING } from '../../graphql/mutations';

// Styles imports
import { styles } from './styled';

// Additional imports
import { toast } from 'react-toastify';

const Bookings = () => {
  // State values
  const [bookings, setBookings] = useState([]);
  const [events, setEvents] = useState([]);
  const [type, setType] = useState<'booking' | 'my' | 'data'>('booking');

  // GraphQL query hooks
  const { loading: eventsLoading } = useQuery(EVENTS, {
    onCompleted: (data) => {
      setEvents(data.events);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: bookingsLoading } = useQuery(GET_BOOKINGS, {
    onCompleted: (data) => {
      setBookings(data.bookings);
    },
    fetchPolicy: 'no-cache',
  });

  // GraphQL mutation hooks
  const [deleteEvent, { loading: deleteEventLoading }] = useMutation(DELETE_EVENT, {
    onCompleted: (data) => {
      setEvents(events.filter((event) => event._id !== data.deleteEvent._id));
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const [cancelBooking, { loading: cancelBookingLoading }] = useMutation(CANCEL_BOOKING, {
    onCompleted: (data) => {
      const updatedBookings = bookings.filter((booking) => booking.event._id !== data.cancelBooking._id);
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
    deleteEvent({
      variables: {
        id: eventId,
      },
    });
  };

  const typeChangeHandler = (type: 'booking' | 'my' | 'data') => {
    setType(type);
  };

  // Loader conditions
  if (eventsLoading || deleteEventLoading || cancelBookingLoading || bookingsLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <BookingsControl bookings={bookings} events={events} onTypeChange={typeChangeHandler} activeOutputType={type} />
      <div>
        {type !== 'my' && type !== 'data' && <BookingList bookings={bookings} onDelete={deleteBookingHandler} />}
        {type === 'my' && <ItemsList events={events} onDelete={deleteEventHandler} />}
        {type === 'data' && <BookingsChart bookings={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
