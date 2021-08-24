// Components
import { Button } from '../button';
import { Event } from '../event';
import { EventListLoader } from '../event-list-loader';

// Types
import { EventListProps, EventType } from './types';

// Styles
import { styles } from './styles';

const EventList = ({ events, isLoading, eventsCount, onShowMoreClick, onDetailClick }: EventListProps) => {
  if (isLoading) {
    return <EventListLoader />;
  }

  return (
    <>
      <ul className={styles.list}>
        {events.map((event: EventType, index: number) => {
          if (index < eventsCount) {
            const handleDetailClick = () => onDetailClick(event.id);

            return (
              <li key={event.id}>
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
        <Button className={styles.button} variant="outlined" onClick={onShowMoreClick}>
          Показать ещё
        </Button>
      )}
    </>
  );
};

export { EventList };
