import React from 'react';
import EventItem from '../event-item';

const EventList = (props: any) => {
  return (
    <ul>
      {props.events.map((event) => {
        return <EventItem key={event._id} eventId={event._id} title={event.title} creatorId={event.creator._id} />;
      })}
    </ul>
  );
};

export default EventList;
