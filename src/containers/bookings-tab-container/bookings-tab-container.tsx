// Components
import { BookingsTab } from '../../components/bookings-tab';

// Services
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { BOOKINGS_CONTROLS_COUNTS } from '../../services/bookings/queries';
import { USER_BOOKINGS } from '../../services/user';
import { CANCEL_BOOKING } from '../../services/bookings';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setBookingsControlsCounts, setUserBookings } from '../../store/bookingsSlice';
import { userBookingsSelector } from '../../store/bookingsSlice/selectors';

// Additional
import { toast } from 'react-toastify';

const BookingsTabContainer = () => {
  const dispatch = useDispatch();
  const userBookings = useSelector(userBookingsSelector);

  const { loading } = useQuery(USER_BOOKINGS, {
    onCompleted: ({ userBookings }) => {
      dispatch(setUserBookings(userBookings));
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

  const [cancelBooking] = useMutation(CANCEL_BOOKING, {
    onCompleted: ({ cancelBooking }) => {
      dispatch(setUserBookings(userBookings.filter((booking) => booking.id !== cancelBooking.id)));
      bookingsControlsCounts();
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  const handleBookingDeleteClick = (bookingId: string) => {
    cancelBooking({ variables: { id: bookingId } });
  };

  return <BookingsTab isLoading={loading} bookings={userBookings} onBookingDeleteClick={handleBookingDeleteClick} />;
};

export { BookingsTabContainer };
