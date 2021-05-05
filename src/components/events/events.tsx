import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import Backdrop from '../backdrop';
import Modal from '../modal';
import { styledButton, styledEvents, styledTextarea } from './styled';

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const token = useSelectorTyped(selectToken);
  const [events, setEvents] = useState([]);

  const createEventHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              price
              date
              creator {
                _id
                email
              }
            }
          }
        `,
    };

    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }

        return res.json();
      })
      .then((resData) => {
        setEvents(resData.data.events);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalConfirmHandler = () => {
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      price.trim().length === 0 ||
      date.trim().length === 0
    ) {
      return;
    }

    const event = { title, description, price: Number(price), date };

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              price
              date
              creator {
                _id
                email
              }
            }
          }
        `,
    };

    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }

        return res.json();
      })
      .then((resData) => {
        fetchEvents();
      })
      .catch((error) => {
        console.log(error);
      });

    setIsOpen(false);
  };

  const modalCancelHandler = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      {isOpen && (
        <Fragment>
          <Backdrop />
          <Modal title="Add Event" cancel confirm onCancel={modalCancelHandler} onConfirm={modalConfirmHandler}>
            <form action="#">
              <div>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="datetime-local"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  className={styledTextarea}
                  id="description"
                  name="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows={4}
                />
              </div>
            </form>
          </Modal>
        </Fragment>
      )}
      {token && (
        <div className={styledEvents}>
          <p>Share your own Events!</p>
          <button className={styledButton} onClick={createEventHandler}>
            Create Event
          </button>
        </div>
      )}
      <ul>
        {events.map((event) => {
          return <li key={event._id}>{event.title}</li>;
        })}
      </ul>
    </Fragment>
  );
};

export default Events;
