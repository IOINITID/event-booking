import { MouseEvent, useState } from 'react';

// Components
import { EventList } from '../../components/event-list';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setEvents } from '../../store/eventsSlice';
import { eventsSelector } from '../../store/eventsSlice/selectors';

// Services
import { useQuery } from '@apollo/client';
import { EVENTS } from '../../services/events';

// Constants
import { EVENTS_COUNT } from '../../components/event-list/constants';

// Types
import { EventListContainerProps } from './types';

// Additional
import { toast } from 'react-toastify';

const EventListContainer = ({ onDetailClick }: EventListContainerProps) => {
  const dispatch = useDispatch();
  const events = useSelector(eventsSelector);

  const [eventsCount, setEventsCount] = useState<number>(EVENTS_COUNT);

  const handleShowMoreEventsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setEventsCount(eventsCount + EVENTS_COUNT);
  };

  const handleEventsError = (message: string) => toast.error(message);

  const { loading } = useQuery(EVENTS, {
    onCompleted: ({ events }) => {
      dispatch(setEvents(events));
    },
    onError: ({ message }) => handleEventsError(message),
    fetchPolicy: 'no-cache',
  });

  return (
    <EventList
      events={events}
      isLoading={loading}
      eventsCount={eventsCount}
      onShowMoreClick={handleShowMoreEventsClick}
      onDetailClick={onDetailClick}
    />
  );
};

export { EventListContainer };
