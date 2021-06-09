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

interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: {
    _id: string;
    email: string;
  };
}

const Events = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<IEvent | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatchTyped();

  const token = useSelectorTyped(selectToken);
  const userId = useSelectorTyped(selectUserId);

  const history = useHistory();

  const [events, setEvents] = useState<IEvent[] | []>([]);

  const { loading: eventsLoading } = useQuery(EVENTS, {
    onCompleted: (data) => {
      setEvents(data.events);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

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

  const [bookEvent, { loading: bookEventLoading }] = useMutation(BOOK_EVENT, {
    onCompleted: () => {
      setIsPreviewOpen(null);
      setIsSuccessOpen(true);
    },
    onError: (error) => {
      if (error.message === 'Необходима авторизация.') {
        setIsPreviewOpen(null);
        dispatch(logout());
        history.push('/authorization');
      }
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (isPreviewOpen || isCreateOpen || isSuccessOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCreateOpen, isPreviewOpen, isSuccessOpen]);

  const clearValues = () => {
    setIsCreateOpen(false);
    setTitle('');
    setDescription('');
    setPrice('');
    setDate('');
    setLocation('');
    setImage('');
  };

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
    setIsCreateOpen(false);
    setIsPreviewOpen(null);
    setIsSuccessOpen(false);
    clearValues();
  };

  const createEventHandler = () => {
    setIsCreateOpen(true);
  };

  const showDetailHandler = (eventId: string) => {
    setIsPreviewOpen(events.find((event: IEvent) => event._id === eventId));
  };

  const bookEventHandler = () => {
    if (!token) {
      setIsPreviewOpen(null);
      setIsCreateOpen(false);
      history.push('/authorization');
      return;
    }

    bookEvent({
      variables: {
        id: isPreviewOpen._id,
      },
    });
  };

  if (createEventLoading || bookEventLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {/* Events banner */}
      <EventsBanner onCreateEvent={createEventHandler} />

      {/* Events list */}
      {eventsLoading ? (
        <EventListLoader itemsCount={6} />
      ) : (
        <EventList events={events} onViewDetail={showDetailHandler} />
      )}

      {/* Modal create event */}
      {isCreateOpen && (
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

      {/* Modal preview event */}
      {isPreviewOpen && (
        <Modal
          title={isPreviewOpen.title}
          description={isPreviewOpen.description}
          date={isPreviewOpen.date}
          price={isPreviewOpen.price}
          location={isPreviewOpen.location}
          image={isPreviewOpen.image}
          onCancel={modalCancelHandler}
          onConfirm={bookEventHandler}
        />
      )}

      {/* Modal success event */}
      {isSuccessOpen && (
        <ModalSuccess
          onCancel={modalCancelHandler}
          onConfirm={() => {
            setIsSuccessOpen(false);
            history.push('/bookings');
          }}
        />
      )}
    </Fragment>
  );
};

export default Events;
