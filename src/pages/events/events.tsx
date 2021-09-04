import { useState } from 'react';

// Components
import { Loader } from '../../components/loader';
import { ModalPreview } from '../../components/modal/modal-preview';
import { ModalCreateEvent } from '../../components/modal/modal-create-event';
import { ModalSuccess } from '../../components/modal/modal-success';

// Containers
import { EventListContainer } from '../../containers/event-list-container';
import { EventsBannerContainer } from '../../containers/events-banner-container';

// Services
import { useMutation } from '@apollo/client';
import { CREATE_EVENT } from '../../services/events';
import { BOOK_EVENT } from '../../services/bookings';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/userSlice';
import { tokenSelector } from '../../store/userSlice/selectors';

// Router
import { useHistory } from 'react-router';
import { Routes } from '../../routes';

// Additional
import { toast } from 'react-toastify';
import { eventsSelector, previewEventSelector } from '../../store/eventsSlice/selectors';
import { setEvents, setPreviewEvent } from '../../store/eventsSlice';
import { EventType, PreviewEventType } from '../../store/eventsSlice/types';

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
  const token = useSelector(tokenSelector);
  const events = useSelector(eventsSelector);
  const previewEvent = useSelector(previewEventSelector);

  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);

  const [createEvent, { loading: createEventLoading }] = useMutation(CREATE_EVENT, {
    onCompleted: ({ createEvent }) => {
      dispatch(setEvents([createEvent, ...events]));
      toast.success('Мероприятие успешно создано.');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const [bookEvent, { loading: bookEventLoading }] = useMutation(BOOK_EVENT, {
    onCompleted: () => {
      setIsPreviewOpen(false);
      dispatch(setPreviewEvent(null));
      setIsSuccessOpen(true);
    },
    onError: (error) => {
      if (error.message === 'Необходима авторизация.') {
        setIsPreviewOpen(false);
        dispatch(setPreviewEvent(null));
        dispatch(setLogout());
        history.push(Routes.Authorization);
      }
      toast.error(error.message);
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
      toast.error('Все поля должны быть заполнены.');
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
    dispatch(setPreviewEvent(null));
  };

  const createEventHandler = () => {
    setIsCreateOpen(true);
  };

  const handleDetailClick = (eventId: string) => {
    setIsPreviewOpen(true);
    dispatch(setPreviewEvent(events.find(({ id }: EventType) => id === eventId) as PreviewEventType));
  };

  const bookEventHandler = () => {
    if (!token) {
      setIsPreviewOpen(false);
      dispatch(setPreviewEvent(null));
      setIsCreateOpen(false);
      history.push(Routes.Authorization);
      return;
    }

    bookEvent({
      variables: { id: previewEvent?.id },
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
      <EventsBannerContainer onCreateEventClick={createEventHandler} />
      <EventListContainer onDetailClick={handleDetailClick} />
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
