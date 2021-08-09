import { useState } from 'react';

// Components imports
import { Loader } from '../../components/loader';
import { EventsBanner } from '../../components/events-banner';
import { EventList } from '../../components/event-list';
import { ModalPreview } from '../../components/modal/modal-preview';
import { ModalCreateEvent } from '../../components/modal/modal-create-event';
import { ModalSuccess } from '../../components/modal/modal-success';

// GraphQL imports
import { useMutation, useQuery } from '@apollo/client';
import { EVENTS } from '../../graphql/queries';
import { CREATE_EVENT, BOOK_EVENT } from '../../graphql/mutations';

// Store imports
import { logout } from '../../store/userSlice';
import { userTokenSelector } from '../../store/userSlice/selectors';

// Router imports
import { useHistory } from 'react-router';
import { Routes } from '../../routes';

// Additional imports
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

// Interfaces and types
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

interface IEventData {
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
}

const Events = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(userTokenSelector);

  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);
  const [previewEvent, setPreviewEvent] = useState<IEvent | null>(null);
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
            _id: data.createEvent.creator._id,
            email: data.createEvent.creator.email,
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
      setIsPreviewOpen(false);
      setPreviewEvent(null);
      setIsSuccessOpen(true);
    },
    onError: (error) => {
      if (error.message === 'Необходима авторизация.') {
        setIsPreviewOpen(false);
        setPreviewEvent(null);
        dispatch(logout());
        history.push(Routes.Authorization);
      }
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const modalConfirmHandler = (eventData: IEventData) => {
    if (
      eventData.title.trim().length === 0 ||
      eventData.description.trim().length === 0 ||
      eventData.price.trim().length === 0 ||
      eventData.date.trim().length === 0 ||
      eventData.location.trim().length === 0 ||
      !eventData.image
    ) {
      toast('Все поля должны быть заполнены.');
      return;
    }

    createEvent({
      variables: {
        title: eventData.title,
        description: eventData.description,
        price: Number(eventData.price),
        date: eventData.date,
        location: eventData.location,
        image: eventData.image,
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
    setPreviewEvent(events.find((event: IEvent) => event._id === eventId));
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
      variables: {
        id: previewEvent._id,
      },
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
