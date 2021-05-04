import React from 'react';
import { styledButton, styledEvents } from './styled';

const Events = () => {
  return (
    <div className={styledEvents}>
      <p>Share your own Events!</p>
      <button className={styledButton}>Create Event</button>
    </div>
  );
};

export default Events;
