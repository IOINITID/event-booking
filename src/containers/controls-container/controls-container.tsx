// Components
import { Controls } from '../../components/controls';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setBookingsControlsCounts, setControlType } from '../../store/bookingsSlice';
import { bookingsControlsCountsSelector, controlTypeSelector } from '../../store/bookingsSlice/selectors';

// Services
import { useQuery } from '@apollo/client';
import { BOOKINGS_CONTROLS_COUNTS } from '../../services/bookings/queries';

// Types
import { ControlType } from '../../store/bookingsSlice/types';

// Additional
import { toast } from 'react-toastify';

const ControlsContainer = () => {
  const dispatch = useDispatch();
  const controlType = useSelector(controlTypeSelector);
  const controlsCounts = useSelector(bookingsControlsCountsSelector);

  useQuery(BOOKINGS_CONTROLS_COUNTS, {
    onCompleted: ({ bookingsControlsCounts: { eventsCount, bookingsCount } }) => {
      dispatch(setBookingsControlsCounts({ eventsCount, bookingsCount }));
    },
    onError: ({ message }) => {
      toast.error(message);
    },
    fetchPolicy: 'network-only',
  });

  const handleControlClick = (type: ControlType) => {
    dispatch(setControlType(type));
  };

  return <Controls controlType={controlType} controlsCounts={controlsCounts} onControlClick={handleControlClick} />;
};

export { ControlsContainer };
