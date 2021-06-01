import React from 'react';
import { styles } from './styled';

interface IEventsBanner {
  description: string;
  buttonTitle: string;
  onClick: () => void;
}

const EventsBanner = (props: IEventsBanner) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Здесь пока пусто.
        <br />
        {props.description}
      </h2>
      <button className={styles.button} onClick={props.onClick}>
        {props.buttonTitle} ⟶
      </button>
    </div>
  );
};

export default EventsBanner;
