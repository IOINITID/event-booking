import { Fragment, MouseEvent, useState } from 'react';

// Components imports
import { Button } from '../button';
import { EventItem } from '../event-item';
import { EventListLoader } from '../event-list-loader';

// Styles imports
import { styles } from './styled';

// Interfaces and types
interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: {
    _id: string;
    email: string;
  };
}

type EventListProps = {
  events: IEvent[];
  isLoading: boolean;
  onDetailClick: (eventId: string) => void;
};

const EventList = ({ events, isLoading, onDetailClick }: EventListProps) => {
  // State values
  const [eventsCount, setEventsCount] = useState<number>(6);

  // Components handlers
  const handleShowMoreEventsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setEventsCount(eventsCount + 6);
  };

  // Loader conditions
  if (isLoading) {
    return <EventListLoader itemsCount={6} />;
  }

  return (
    <Fragment>
      <ul className={styles.list}>
        {events.map((event: IEvent, index: number) => {
          if (index < eventsCount) {
            return (
              <li key={event._id}>
                <EventItem event={event} onDetailClick={onDetailClick} />;
              </li>
            );
          }
        })}
      </ul>
      {events.length > eventsCount && (
        <Button className={styles.button} variant="outlined" onClick={handleShowMoreEventsClick}>
          Показать ещё
        </Button>
      )}
    </Fragment>
  );
};

export default EventList;
