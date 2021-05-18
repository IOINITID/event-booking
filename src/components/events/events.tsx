import React, { Fragment, useEffect, useState } from 'react';
import { selectToken, selectUserId } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import Backdrop from '../backdrop';
import EventList from '../event-list';
import Loader from '../loader';
import Modal from '../modal';
import { styledTextarea } from './styled';
import { REQUEST_URL } from '../../utils/constants';
import InfoBanner from '../info-banner';

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const token = useSelectorTyped(selectToken);
  const [events, setEvents] = useState([]);
  const userId = useSelectorTyped(selectUserId);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const createEventHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent || isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, selectedEvent]);

  const fetchEvents = () => {
    setIsLoading(true);

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

    fetch(REQUEST_URL, {
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
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
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

    const requestBody = {
      query: `
          mutation CreateEvent($title: String!, $description: String!, $price: Float!, $date: String!) {
            createEvent(eventInput: {title: $title, description: $description, price: $price, date: $date}) {
              _id
              title
              description
              price
              date
            }
          }
        `,
      variables: {
        title: title,
        description: description,
        price: Number(price),
        date: date,
      },
    };

    fetch(REQUEST_URL, {
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
        setEvents([
          ...events,
          {
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            price: resData.data.createEvent.price,
            date: resData.data.createEvent.date,
            creator: {
              _id: userId,
              email: resData.data.createEvent.email,
            },
          },
        ]);

        return events;
      })
      .catch((error) => {
        console.log(error);
      });

    setIsOpen(false);
  };

  const modalCancelHandler = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  const showDetailHandler = (eventId) => {
    setSelectedEvent(events.find((item) => item._id === eventId));
  };

  const bookEventHandler = () => {
    if (!token) {
      setSelectedEvent(null);
      return;
    }

    setIsLoading(true);

    const requestBody = {
      query: `
          mutation BookEvent($id: ID!) {
            bookEvent(eventId: $id) {
              _id
              createdAt
              updatedAt
            }
          }
        `,
      variables: {
        id: selectedEvent._id,
      },
    };

    fetch(REQUEST_URL, {
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
        setIsLoading(false);
        setSelectedEvent(null);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
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
      {selectedEvent && (
        <Fragment>
          <Backdrop />
          <Modal
            title={selectedEvent.title}
            cancel
            confirm={Boolean(token)}
            confirmText={token && 'Book'}
            onCancel={modalCancelHandler}
            onConfirm={bookEventHandler}
          >
            <h1>{selectedEvent.title}</h1>
            <h2>
              ${selectedEvent.price} - {new Date(selectedEvent.date).toLocaleString()}
            </h2>
            <p>{selectedEvent.description}</p>
          </Modal>
        </Fragment>
      )}
      <InfoBanner onCreateEvent={createEventHandler} />

      {isLoading ? <Loader /> : <EventList events={events} onViewDetail={showDetailHandler} />}
    </Fragment>
  );
};

export default Events;
