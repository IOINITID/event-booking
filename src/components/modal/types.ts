import { ReactNode } from 'react';

export type ModalProps = {
  /** Width of modal */
  width: number;
  /** Is modal open */
  isOpen: boolean;
  /** Children for modal */
  children: ReactNode;
  /** Cancel button params */
  cancelButton: {
    title: string;
    onClick: () => void;
  };
  /** Confirm button params */
  confirmButton: {
    title: string;
    onClick: () => void;
  };
};
