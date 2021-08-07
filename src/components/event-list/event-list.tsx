import { MouseEvent, useState } from 'react';

// Components imports
import { Button } from '../button';
import { Event } from '../event';
import { EventListLoader } from '../event-list-loader';

// Styles imports
import { styles } from './styles';

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
  const [eventsCount, setEventsCount] = useState<number>(6);

  const handleShowMoreEventsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setEventsCount(eventsCount + 6);
  };

  if (isLoading) {
    return <EventListLoader itemsCount={6} />;
  }

  return (
    <>
      <ul className={styles.list}>
        {events.map((event: IEvent, index: number) => {
          if (index < eventsCount) {
            const handleDetailClick = () => onDetailClick(event._id);

            return (
              <li key={event._id}>
                <Event
                  title={event.title}
                  date={event.date}
                  price={event.price}
                  image={event.image}
                  onDetailClick={handleDetailClick}
                />
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
    </>
  );
};

export default EventList;
