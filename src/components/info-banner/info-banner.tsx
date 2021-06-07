import React from 'react';
import Button from '../button';
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
      <Button type="primary" onClick={props.onClick}>
        {props.buttonTitle} ⟶
      </Button>
    </div>
  );
};

export default EventsBanner;
