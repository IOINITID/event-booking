import { Fragment, MouseEvent, useState } from 'react';

// Components imports
import { Button } from '../button';
import EventItem from '../event-item';
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

interface IEventList {
  events: IEvent[];
  isLoading: boolean;
  onViewDetail: (eventId: string) => void;
}

const EventList = (props: IEventList) => {
  // State values
  const [eventsCount, setEventsCount] = useState<number>(6);

  // Components handlers
  const loadEventsHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setEventsCount(eventsCount + 6);
  };

  // Loader conditions
  if (props.isLoading) {
    return <EventListLoader itemsCount={6} />;
  }

  return (
    <Fragment>
      <ul className={styles.list}>
        {props.events.map((event: IEvent, index: number) => {
          if (index < eventsCount) {
            return <EventItem key={event._id} event={event} onDetail={props.onViewDetail} />;
          }
        })}
      </ul>
      {props.events.length > eventsCount ? (
        <Button type="primary" className={styles.button} onClick={loadEventsHandler}>
          Показать ещё
        </Button>
      ) : null}
    </Fragment>
  );
};

export default EventList;
