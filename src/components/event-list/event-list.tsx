import React, { Fragment, MouseEvent, useState } from 'react';
import EventItem from '../event-item';
import { styles } from './styled';

interface IEventItem {
  _id: string;
  eventId: string;
  image: string;
  price: string;
  title: string;
  date: string;
  onDetail: (eventId: string) => void;
}

interface IEventList {
  events: IEventItem[];
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
        {props.events.map((event: IEventItem, index: number) => {
          if (index < eventsCount) {
            return (
              <EventItem
                key={event._id}
                eventId={event._id}
                title={event.title}
                price={event.price}
                date={event.date}
                image={event.image}
                onDetail={props.onViewDetail}
              />
            );
          }
        })}
      </ul>
      {props.events.length > eventsCount ? (
        <button className={styles.button} type="button" onClick={loadEventsHandler}>
          Показать ещё
        </button>
      ) : null}
    </Fragment>
  );
};

export default EventList;
