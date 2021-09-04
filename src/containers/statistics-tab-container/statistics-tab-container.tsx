// Components
import { StatisticsTab } from '../../components/statistics-tab';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setBookingsStatistics } from '../../store/bookingsSlice';
import { bookingsStatisticsSelector } from '../../store/bookingsSlice/selectors';

// Services
import { useQuery } from '@apollo/client';
import { BOOKINGS_STATISTICS } from '../../services/bookings/queries';

// Additional
import { toast } from 'react-toastify';

const StatisticsTabContainer = () => {
  const dispatch = useDispatch();
  const bookingsStatistics = useSelector(bookingsStatisticsSelector);

  useQuery(BOOKINGS_STATISTICS, {
    onCompleted: ({ bookingsStatistics }) => {
      dispatch(setBookingsStatistics(bookingsStatistics));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
    fetchPolicy: 'network-only',
  });

  return <StatisticsTab bookingsStatistics={bookingsStatistics} />;
};

export { StatisticsTabContainer };
