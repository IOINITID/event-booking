import React from 'react';
import EventItem from '../event-item';

const EventList = (props: any) => {
  return (
    <ul>
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
