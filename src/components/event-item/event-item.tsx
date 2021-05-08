import React from 'react';
import { selectUserId } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import { styledEventItemButton } from './styled';

const EventItem = (props: any) => {
  const userId = useSelectorTyped(selectUserId);

  return (
    <li key={props.eventId}>
      <div>
        <h1>{props.title}</h1>
        <h2>
          ${props.price} - {new Date(props.date).toLocaleString()}
        </h2>
      </div>
      <div>
        {props.creatorId === userId ? (
          <p>Your the owner of this event.</p>
        ) : (
          <button className={styledEventItemButton} onClick={props.onDetail.bind(this, props.eventId)}>
            View Details
          </button>
        )}
      </div>
    </li>
  );
};

export default EventItem;
