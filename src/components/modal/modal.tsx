import React, { ReactNode } from 'react';
import Button from '../button';
import { styles } from './styled';

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
}

const Modal = (props: IModal) => {
  return (
    props.isOpen && (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <div>{props.children}</div>
          <div className={styles.actions}>
            <Button type="outline" onClick={props.cancelButton.onClick}>
              {props.cancelButton.title}
            </Button>
            <Button type="primary" onClick={props.confirmButton.onClick}>
              {props.confirmButton.title}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
