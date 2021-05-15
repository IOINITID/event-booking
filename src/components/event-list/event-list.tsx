import React, { Fragment } from 'react';
import EventItem from '../event-item';
import { styledEventList, styledEventListButton } from './styled';

const EventList = (props: any) => {
  return (
    <Fragment>
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
      <button className={styledEventListButton} type="button" onClick={() => null}>
        Показать ещё
      </button>
    </Fragment>
  );
};

export default EventList;
