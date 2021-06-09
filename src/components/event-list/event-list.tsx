import React, { Fragment, MouseEvent, useState } from 'react';
import Button from '../button';
import EventItem from '../event-item';
import { styles } from './styled';

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
  onViewDetail: (eventId: string) => void;
}

const EventList = (props: IEventList) => {
  const [eventsCount, setEventsCount] = useState<number>(6);

  const loadEventsHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setEventsCount(eventsCount + 6);
  };

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
        <Button type="outline" className={styles.button} onClick={loadEventsHandler}>
          Показать ещё
        </Button>
      ) : null}
    </Fragment>
  );
};

export default EventList;
