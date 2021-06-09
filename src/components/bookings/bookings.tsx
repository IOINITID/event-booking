import React, { Fragment, useState } from 'react';
import { selectUserId } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import BookingList from '../booking-list';
import Loader from '../loader';
import BookingsChart from '../bookings-chart';
import BookingsControl from '../bookings-controls';
import { css } from '@emotion/css';
import { styles } from './styled';
import InfoBanner from '../info-banner';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import { EVENTS, GET_BOOKINGS } from '../../graphql/queries';
import { DELETE_EVENT } from '../../graphql/mutations';
import { CANCEL_BOOKING } from '../../graphql/mutations';
import Button from '../button';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [outputType, setOutputType] = useState<'booking' | 'my' | 'data'>(null);
  const [events, setEvents] = useState([]);
  const history = useHistory();
  const userId = useSelectorTyped(selectUserId);

  const { loading: eventsLoading } = useQuery(EVENTS, {
    onCompleted: (data) => {
      setEvents(data.events);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEvent, { loading: deleteEventLoading }] = useMutation(DELETE_EVENT, {
    onCompleted: (data) => {
      setEvents(events.filter((event) => event._id !== data.deleteEvent._id));
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: bookingsLoading } = useQuery(GET_BOOKINGS, {
    onCompleted: (data) => {
      setBookings(data.bookings);
    },
    fetchPolicy: 'no-cache',
  });

  const [cancelBooking, { loading: cancelBookingLoading }] = useMutation(CANCEL_BOOKING, {
    onCompleted: (data) => {
      const updatedBookings = bookings.filter((booking) => booking.event._id !== data.cancelBooking._id);
      setBookings(updatedBookings);
    },
    fetchPolicy: 'no-cache',
  });

  const deleteBookingHandler = (bookingId: string) => {
    cancelBooking({
      variables: {
        id: bookingId,
      },
    });
  };

  const outputTypeChangeHandler = (type: 'booking' | 'my' | 'data') => {
    setOutputType(type);
  };

  if (eventsLoading || deleteEventLoading || cancelBookingLoading || bookingsLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <BookingsControl onOutputTypeChange={outputTypeChangeHandler} activeOutputType={outputType} />
        <div>
          {outputType !== 'my' && outputType !== 'data' && (
            <Fragment>
              {bookings.length ? (
                <BookingList bookings={bookings} onDelete={deleteBookingHandler} />
              ) : (
                <InfoBanner
                  description="Забронируй любое мероприятие, и оно появится в этом списке!"
                  buttonTitle="Забронировать мероприятие"
                  onClick={() => history.push('/events')}
                />
              )}
            </Fragment>
          )}

          {outputType === 'my' && (
            <Fragment>
              {events.length ? (
                <ul className={styles.list}>
                  {events
                    .filter((event) => event.creator._id === userId)
                    .map((event: any, index: number) => {
                      return (
                        <li className={styles.listItem} key={event._id}>
                          <span>{index}</span>
                          <img
                            className={css`
                              width: 96px;
                              height: 96px;
                              border-radius: 8px;
                              object-fit: cover;
                            `}
                            src={event.image}
                            alt="Изображение мероприятия."
                          />
                          <div
                            className={css`
                              max-width: 111px;
                            `}
                          >
                            {event.title}
                          </div>
                          <div>
                            <div>{dayjs(event.date).locale('ru').format('DD MMMM')}</div>
                            <div>{dayjs(event.date).locale('ru').format('HH:MM')}</div>
                          </div>
                          <div>{event.price} ₽</div>
                          <div
                            className={css`
                              max-width: 153px;
                            `}
                          >
                            {event.location}
                          </div>
                          <div>
                            <Button
                              type="outline"
                              onClick={() => {
                                deleteEvent({
                                  variables: {
                                    id: event._id,
                                  },
                                });
                              }}
                            >
                              Отменить
                            </Button>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              ) : (
                <InfoBanner
                  description=" Создай любое мероприятие, и оно появится в этом списке!"
                  buttonTitle="Создать мероприятие"
                  onClick={() => history.push('/events')}
                />
              )}
            </Fragment>
          )}

          {outputType === 'data' && <BookingsChart bookings={bookings} />}
        </div>
      </div>
    </Fragment>
  );
};

export default Bookings;
