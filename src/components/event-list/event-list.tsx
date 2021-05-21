import React, { Fragment, MouseEvent, useState } from 'react';
import EventItem from '../event-item';
import { styledEventList, styledEventListButton } from './styled';

const EventList = (props: any) => {
  const [eventsCount, setEventsCount] = useState(9);

  return (
    <Fragment>
      <ul className={styledEventList}>
        {props.events.map((event, index) => {
          if (index < eventsCount) {
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
          }
        })}
      </ul>
      {props.events.length > eventsCount ? (
        <button
          className={styledEventListButton}
          type="button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.currentTarget.blur();
            setEventsCount(eventsCount + 9);
          }}
        >
          Показать ещё
        </button>
      ) : null}
    </Fragment>
  );
};

export default EventList;
