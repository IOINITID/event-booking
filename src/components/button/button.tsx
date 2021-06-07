import { cx } from '@emotion/css';
import React, { ReactElement } from 'react';
import { styles } from './styled';

interface IButton {
  type: 'default' | 'outline';
  onClick: () => void;
  className?: string;
  children: ReactElement | string;
}

const Button = (props: IButton) => {
  return (
    <button
      className={cx(props.type === 'default' ? styles.default : styles.outline, props.className)}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
