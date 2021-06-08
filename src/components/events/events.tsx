import React, { Fragment, useEffect, useState } from 'react';
import { logout, selectToken, selectUserId } from '../../features/user/userSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import EventList from '../event-list';
import Modal from '../modal';
import EventsBanner from '../events-banner';
import ModalCreateEvent from '../modal/modal-create-event';
import ModalSuccess from '../modal/modal-success';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Loader from '../loader';
import { EVENTS } from '../../graphql/queries';
import { CREATE_EVENT, BOOK_EVENT } from '../../graphql/mutations';
import { useHistory } from 'react-router';
import EventListLoader from '../loader/event-list-loader';

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const token = useSelectorTyped(selectToken);
  const [events, setEvents] = useState([]);
  const userId = useSelectorTyped(selectUserId);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();
  const dispatch = useDispatchTyped();

  const [createEvent, { loading: createEventLoading }] = useMutation(CREATE_EVENT, {
    onCompleted: (data) => {
      setEvents([
        {
          _id: data.createEvent._id,
          title: data.createEvent.title,
          description: data.createEvent.description,
          price: data.createEvent.price,
          date: data.createEvent.date,
          location: data.createEvent.location,
          image: data.createEvent.image,
          creator: {
            _id: userId,
            email: data.createEvent.email,
          },
        },
        ...events,
      ]);
      toast('Мероприятие успешно создано.');
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const { loading } = useQuery(EVENTS, {
    onCompleted: (data) => {
      setEvents(data.events);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const [bookEvent, { loading: bookEventLoading }] = useMutation(BOOK_EVENT, {
    onCompleted: () => {
      setSelectedEvent(null);
      setIsSuccess(true);
    },
    onError: (error) => {
      if (error.message === 'Необходима авторизация.') {
        setSelectedEvent(null);
        dispatch(logout());
      }
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const createEventHandler = () => {
    setIsOpen(true);
  };

  const clearValues = () => {
    setIsOpen(false);
    setTitle('');
    setDescription('');
    setPrice('');
    setDate('');
    setLocation('');
    setImage('');
  };

  useEffect(() => {
    if (selectedEvent || isOpen || isSuccess) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, selectedEvent, isSuccess]);

  const modalConfirmHandler = () => {
    if (
      title.trim().length === 0 ||
      description.trim().length === 0 ||
      price.trim().length === 0 ||
      date.trim().length === 0 ||
      location.trim().length === 0 ||
      !image
    ) {
      toast('Все поля должны быть заполнены.');
      return;
    }

    createEvent({
      variables: {
        title: title,
        description: description,
        price: Number(price),
        date: date,
        location: location,
        image: image,
      },
    });

    clearValues();
  };

  const modalCancelHandler = () => {
    setIsOpen(false);
    setSelectedEvent(null);
    setIsSuccess(false);
  };

  const showDetailHandler = (eventId: string) => {
    setSelectedEvent(events.find((item) => item._id === eventId));
  };

  const bookEventHandler = () => {
    if (!token) {
      setSelectedEvent(null);
      setIsOpen(false);
      history.push('/authorization');
      return;
    }

    bookEvent({
      variables: {
        id: selectedEvent._id,
      },
    });
  };

  if (createEventLoading || bookEventLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <EventsBanner onCreateEvent={createEventHandler} />

      {loading ? <EventListLoader itemsCount={6} /> : <EventList events={events} onViewDetail={showDetailHandler} />}

      {isOpen && (
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
          image={image}
          setImage={setImage}
          onCancel={modalCancelHandler}
          onConfirm={modalConfirmHandler}
        />
      )}

      {selectedEvent && (
        <Modal
          title={selectedEvent.title}
          description={selectedEvent.description}
          date={selectedEvent.date}
          price={selectedEvent.price}
          location={selectedEvent.location}
          image={selectedEvent.image}
          onCancel={modalCancelHandler}
          onConfirm={bookEventHandler}
        />
      )}

      {isSuccess && (
        <ModalSuccess
          onCancel={modalCancelHandler}
          onConfirm={() => {
            setIsSuccess(false);
            history.push('/bookings');
          }}
        />
      )}
    </Fragment>
  );
};

export default Events;
