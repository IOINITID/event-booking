import { MouseEvent, useState } from 'react';

// Components imports
import { Button } from '../button';
import { Event } from '../event';
import { EventListLoader } from '../event-list-loader';

// Constants
import { SHOW_MORE_EVENTS_COUNT } from './constants';

// Types
import { EventListProps, EventType } from './types';

// Styles imports
import { styles } from './styles';

const EventList = ({ events, isLoading, onDetailClick }: EventListProps) => {
  const [eventsCount, setEventsCount] = useState<number>(SHOW_MORE_EVENTS_COUNT);

  const handleShowMoreEventsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setEventsCount(eventsCount + SHOW_MORE_EVENTS_COUNT);
  };

  if (isLoading) {
    return <EventListLoader itemsCount={SHOW_MORE_EVENTS_COUNT} />;
  }

  return (
    <>
      <ul className={styles.list}>
        {events.map((event: EventType, index: number) => {
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

export { EventList };
