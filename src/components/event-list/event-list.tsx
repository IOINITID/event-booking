import React from 'react';
import EventItem from '../event-item';
import { styledEventList } from './styled';

const EventList = (props: any) => {
  return (
    <ul className={styledEventList}>
      {props.events.map((event) => {
        return (
          <EventItem
            key={event._id}
            eventId={event._id}
            title={event.title}
            price={event.price}
            date={event.date}
            creatorId={event.creator._id}
            onDetail={props.onViewDetail}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
