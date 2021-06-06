import React, { ReactElement } from 'react';
import { styles } from './styled';

interface IButton {
  type: 'default' | 'outline';
  onClick: () => void;
  children: ReactElement | string;
}

const Button = (props: IButton) => {
  return (
    <button className={props.type === 'default' ? styles.default : styles.outline} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
