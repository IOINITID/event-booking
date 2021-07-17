import { Fragment, useState } from 'react';

// Store imports
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { logout, selectToken } from '../../features/user/userSlice';

// Components imports
import { Loader } from '../loader';
import EventsBanner from '../events-banner';
import EventList from '../event-list';
import ModalPreview from '../modal/modal-preview';
import ModalCreateEvent from '../modal/modal-create-event';
import ModalSuccess from '../modal/modal-success';

// GraphQL imports
import { useMutation, useQuery } from '@apollo/client';
import { EVENTS } from '../../graphql/queries';
import { CREATE_EVENT, BOOK_EVENT } from '../../graphql/mutations';

// Router imports
import { useHistory } from 'react-router';
import { ROUTES } from '../../utils/constants';

// Additional imports
import { toast } from 'react-toastify';

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
  // State values
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);
  const [previewEvent, setPreviewEvent] = useState<IEvent | null>(null);
  const [events, setEvents] = useState<IEvent[] | []>([]);

  // Store values
  const dispatch = useDispatchTyped();
  const token = useSelectorTyped(selectToken);

  // Router values
  const history = useHistory();

  // GraphQL query hooks
  const { loading: eventsLoading } = useQuery(EVENTS, {
    onCompleted: (data) => {
      setEvents(data.events);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  // GraphQL mutation hooks
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
        history.push(ROUTES.AUTHORIZATION);
      }
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  // Components handlers
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

  const showDetailHandler = (eventId: string) => {
    setIsPreviewOpen(true);
    setPreviewEvent(events.find((event: IEvent) => event._id === eventId));
  };

  const bookEventHandler = () => {
    if (!token) {
      setIsPreviewOpen(false);
      setPreviewEvent(null);
      setIsCreateOpen(false);
      history.push(ROUTES.AUTHORIZATION);
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
    history.push(ROUTES.BOOKINGS);
  };

  // Loader conditions
  if (createEventLoading || bookEventLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {/* Events banner */}
      <EventsBanner onCreateEvent={createEventHandler} />

      {/* Events list */}
      <EventList events={events} isLoading={eventsLoading} onViewDetail={showDetailHandler} />

      {/* Modal create event */}
      <ModalCreateEvent isOpen={isCreateOpen} onCancel={modalCancelHandler} onConfirm={modalConfirmHandler} />

      {/* Modal preview event */}
      <ModalPreview
        isOpen={isPreviewOpen}
        event={previewEvent}
        onCancel={modalCancelHandler}
        onConfirm={bookEventHandler}
      />

      {/* Modal success event */}
      <ModalSuccess isOpen={isSuccessOpen} onCancel={modalCancelHandler} onConfirm={successClickHandler} />
    </Fragment>
  );
};

export default Events;
