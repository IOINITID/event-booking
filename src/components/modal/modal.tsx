import { useEffect } from 'react';

// Components
import { Button } from '../button';

// Types
import { ModalProps } from './types';

// Additional
import { css, cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const Modal = ({ width, isOpen, children, cancelButton, confirmButton }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.backdrop}>
      <div
        className={cx(
          styles.container,
          css`
            width: ${width}px;
          `
        )}
      >
        <div>{children}</div>
        <div className={styles.actions}>
          <Button variant="outlined" onClick={cancelButton.onClick}>
            {cancelButton.title}
          </Button>
          <Button variant="contained" onClick={confirmButton.onClick}>
            {confirmButton.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
