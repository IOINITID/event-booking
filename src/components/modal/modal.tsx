import React from 'react';
import { styledButton, styledModal, styledModalActions, styledModalContent, styledModalHeader } from './styled';

interface IModal {
  title: string;
  children: any;
  cancel: boolean;
  confirm: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
}

const Modal = (props: IModal) => {
  return (
    <div className={styledModal}>
      <header className={styledModalHeader}>{props.title}</header>
      <section className={styledModalContent}>{props.children}</section>
      <section className={styledModalActions}>
        {props.cancel && (
          <button className={styledButton} onClick={props.onCancel}>
            Cancel
          </button>
        )}
        {props.confirm && (
          <button className={styledButton} onClick={props.onConfirm}>
            {props.confirmText || 'Confirm'}
          </button>
        )}
      </section>
    </div>
  );
};

export default Modal;
