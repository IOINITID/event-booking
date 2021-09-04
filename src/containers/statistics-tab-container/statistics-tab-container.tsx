import { useEffect } from 'react';

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
    onCompleted: ({ bookingsStatistics: { lowPriceSum, mediumPriceSum, highPriceSum, veryHighPriceSum } }) => {
      dispatch(setBookingsStatistics({ lowPriceSum, mediumPriceSum, highPriceSum, veryHighPriceSum }));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
  });

  useEffect(() => {
    return () => {
      dispatch(setBookingsStatistics(null));
    };
  }, []);

  return <StatisticsTab bookingsStatistics={bookingsStatistics} />;
};

export { StatisticsTabContainer };
