import { cx } from '@emotion/css';
import React, { MouseEvent, ReactNode } from 'react';
import { styles } from './styled';

interface IButton {
  type: 'primary' | 'outline';
  onClick: (() => void) | ((event: MouseEvent<HTMLButtonElement>) => void);
  className?: string;
  children: ReactNode;
}

const Button = (props: IButton) => {
  return (
    <button
      className={cx(styles.default, props.type === 'primary' ? styles.primary : styles.outline, props.className)}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
