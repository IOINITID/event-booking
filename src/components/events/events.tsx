import React, { Fragment, useEffect, useState } from 'react';
import { selectToken, selectUserId } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import Backdrop from '../backdrop';
import EventList from '../event-list';
import Modal from '../modal';
import { styledEventsLoader } from './styled';
import { REQUEST_URL } from '../../utils/constants';
import InfoBanner from '../info-banner';
import ContentLoader from 'react-content-loader';
import ModalCreateEvent from '../modal/modal-create-event';
import ModalSuccess from '../modal/modal-success';

const EventListLoader = (props) => (
  <ContentLoader
    width={384}
    height={176}
    viewBox="0 0 384 176"
    backgroundColor="#f26b4e"
    foregroundColor="#ef4723"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="384" height="176" />
  </ContentLoader>
);

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const token = useSelectorTyped(selectToken);
  const [events, setEvents] = useState([]);
  const userId = useSelectorTyped(selectUserId);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const createEventHandler = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  /** Added scroll to body */

  // useEffect(() => {
  //   if (selectedEvent || isOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [isOpen, selectedEvent]);

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
              location
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
      date.trim().length === 0 ||
      location.trim().length === 0
    ) {
      return;
    }

    const requestBody = {
      query: `
          mutation CreateEvent($title: String!, $description: String!, $price: Float!, $date: String!, $location: String!) {
            createEvent(eventInput: {title: $title, description: $description, price: $price, date: $date, location: $location}) {
              _id
              title
              description
              price
              date
              location
            }
          }
        `,
      variables: {
        title: title,
        description: description,
        price: Number(price),
        date: date,
        location: location,
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
            location: resData.data.createEvent.location,
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
    setIsSuccess(false);
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
      .then(() => {
        setIsLoading(false);
        setSelectedEvent(null);
        setIsSuccess(true);
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
          <ModalCreateEvent
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            date={date}
            setDate={setDate}
            description={description}
            setDescription={setDescription}
            location={location}
            setLocation={setLocation}
            cancel
            confirm
            onCancel={modalCancelHandler}
            onConfirm={modalConfirmHandler}
          />
        </Fragment>
      )}
      {selectedEvent && (
        <Fragment>
          <Backdrop />
          <Modal
            title={selectedEvent.title}
            description={selectedEvent.description}
            date={selectedEvent.date}
            price={selectedEvent.price}
            location={selectedEvent.location}
            cancel
            confirm={Boolean(token)}
            confirmText={token && 'Book'}
            onCancel={modalCancelHandler}
            onConfirm={bookEventHandler}
          />
        </Fragment>
      )}
      {isSuccess && (
        <Fragment>
          <Backdrop />
          <ModalSuccess onCancel={modalCancelHandler} setIsSuccess={setIsSuccess} />
        </Fragment>
      )}
      <InfoBanner onCreateEvent={createEventHandler} />

      {isLoading ? (
        <div className={styledEventsLoader}>
          {Array.from(Array(9).keys()).map((item) => {
            return <EventListLoader key={item} />;
          })}
        </div>
      ) : (
        <EventList events={events} onViewDetail={showDetailHandler} isLoading={isLoading} />
      )}
    </Fragment>
  );
};

export default Events;
