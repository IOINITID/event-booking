import { useState } from 'react';

// Components
import { Loader } from '../../components/loader';
import { EventsBanner } from '../../components/events-banner';
import { EventList } from '../../components/event-list';
import { ModalPreview } from '../../components/modal/modal-preview';
import { ModalCreateEvent } from '../../components/modal/modal-create-event';
import { ModalSuccess } from '../../components/modal/modal-success';

// Services
import { useMutation, useQuery } from '@apollo/client';
import { EVENTS, CREATE_EVENT } from '../../services/events';
import { BOOK_EVENT } from '../../services/bookings';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/userSlice';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Router
import { useHistory } from 'react-router';
import { Routes } from '../../routes';

// Additional
import { toast } from 'react-toastify';

// Interfaces and types
type EventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: string;
};

type EventDataType = {
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
};

const Events = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(userTokenSelector);

  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);
  const [previewEvent, setPreviewEvent] = useState<EventType | null>(null);
  const [events, setEvents] = useState<EventType[] | []>([]);

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
          id: data.createEvent.id,
          title: data.createEvent.title,
          description: data.createEvent.description,
          price: data.createEvent.price,
          date: data.createEvent.date,
          location: data.createEvent.location,
          image: data.createEvent.image,
          creator: data.createEvent.creator,
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
      setIsPreviewOpen(false);
      setPreviewEvent(null);
      setIsSuccessOpen(true);
    },
    onError: (error) => {
      if (error.message === 'Необходима авторизация.') {
        setIsPreviewOpen(false);
        setPreviewEvent(null);
        dispatch(setLogout());
        history.push(Routes.Authorization);
      }
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const modalConfirmHandler = ({ title, description, price, date, location, image }: EventDataType) => {
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
        title,
        description,
        price: Number(price),
        date,
        location,
        image,
      },
    });

    setIsCreateOpen(false);
  };

  const modalCancelHandler = () => {
    setIsCreateOpen(false);
    setIsPreviewOpen(false);
    setIsSuccessOpen(false);
    setPreviewEvent(null);
  };

  const createEventHandler = () => {
    setIsCreateOpen(true);
  };

  const handleDetailClick = (eventId: string) => {
    setIsPreviewOpen(true);
    setPreviewEvent(events.find(({ id }: EventType) => id === eventId));
  };

  const bookEventHandler = () => {
    if (!token) {
      setIsPreviewOpen(false);
      setPreviewEvent(null);
      setIsCreateOpen(false);
      history.push(Routes.Authorization);
      return;
    }

    bookEvent({
      variables: { id: previewEvent.id },
    });
  };

  const successClickHandler = () => {
    setIsSuccessOpen(false);
    history.push(Routes.Bookings);
  };

  if (createEventLoading || bookEventLoading) {
    return <Loader />;
  }

  return (
    <>
      <EventsBanner onCreateEvent={createEventHandler} />
      <EventList events={events} isLoading={eventsLoading} onDetailClick={handleDetailClick} />
      <ModalCreateEvent isOpen={isCreateOpen} onCancel={modalCancelHandler} onConfirm={modalConfirmHandler} />
      <ModalPreview
        isOpen={isPreviewOpen}
        event={previewEvent}
        onCancel={modalCancelHandler}
        onConfirm={bookEventHandler}
      />
      <ModalSuccess isOpen={isSuccessOpen} onCancel={modalCancelHandler} onConfirm={successClickHandler} />
    </>
  );
};

export { Events };
