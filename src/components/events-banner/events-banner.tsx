import React from 'react';
import { styles } from './styled';

const EventsBanner = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Здесь пока пусто.
        <br />
        Создай любое мероприятие, и оно появится в этом списке!
      </h2>
      <button className={styles.button}>Создать мероприятие ⟶</button>
    </div>
  );
};

export default EventsBanner;
