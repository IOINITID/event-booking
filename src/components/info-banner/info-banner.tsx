import React from 'react';

// Components imports
import Button from '../button';

// Styles imports
import { styles } from './styled';

// Interfaces and types
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
