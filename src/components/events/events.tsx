import React, { Fragment, useState } from 'react';
import Backdrop from '../backdrop';
import Modal from '../modal';
import { styledButton, styledEvents } from './styled';

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);

  const createEventHandler = () => {
    setIsOpen(true);
  };

  const modalConfirmHandler = () => null;

  const modalCancelHandler = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      {isOpen && (
        <Fragment>
          <Backdrop />
          <Modal title="Add Event" cancel confirm onCancel={modalCancelHandler} onConfirm={modalConfirmHandler}>
            <p>Modal Content</p>
          </Modal>
        </Fragment>
      )}
      <div className={styledEvents}>
        <p>Share your own Events!</p>
        <button className={styledButton} onClick={createEventHandler}>
          Create Event
        </button>
      </div>
    </Fragment>
  );
};

export default Events;
