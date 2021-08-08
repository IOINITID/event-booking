import { ReactNode, useEffect } from 'react';

// Components imports
import { Button } from '../button';

// Styles imports
import { styles } from './styled';

// Additional imports
import { css, cx } from '@emotion/css';

// Interfaces and types
export interface IModal {
  isOpen: boolean;
  cancelButton: {
    title: string;
    onClick: () => void;
  };
  confirmButton: {
    title: string;
    onClick: () => void;
  };
  children: ReactNode;
  width: number;
}

const Modal = (props: IModal) => {
  // Body overflow updating
  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.isOpen]);

  return (
    props.isOpen && (
      <div className={styles.backdrop}>
        <div
          className={cx(
            styles.container,
            css`
              width: ${props.width}px;
            `
          )}
        >
          <div>{props.children}</div>
          <div className={styles.actions}>
            <Button variant="outlined" onClick={props.cancelButton.onClick}>
              {props.cancelButton.title}
            </Button>
            <Button variant="contained" onClick={props.confirmButton.onClick}>
              {props.confirmButton.title}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export { Modal };
