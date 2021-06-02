import React, { Fragment, useEffect, useState } from 'react';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import BookingList from '../booking-list';
import Loader from '../loader';
import { REQUEST_URL } from '../../utils/constants';
import BookingsChart from '../bookings-chart';
import BookingsControl from '../bookings-controls';
import { css } from '@emotion/css';
import { styledBookingsContainer } from './styled';
import InfoBanner from '../info-banner';
import { styledBookingButton, styledBookingList, styledBookingListItem } from '../booking-list/styled';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import { EVENTS, GET_BOOKINGS } from '../../graphql/queries';
import { DELETE_EVENT } from '../../graphql/mutations';
import { CANCEL_BOOKING } from '../../graphql/mutations';

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [outputType, setOutputType] = useState('');
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const { loading, error } = useQuery(EVENTS, {
    onCompleted: (data) => {
      setEvents(data.events);
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const [deleteEvent, { loading: deleteEventLoading, error: deleteEventError }] = useMutation(DELETE_EVENT, {
    onCompleted: (data) => {
      setEvents(events.filter((event) => event._id !== data.deleteEvent._id));
    },
    onError: (error) => {
      toast(error.message);
    },
    fetchPolicy: 'no-cache',
  });

  const [cancelBooking, { loading: cancelBookingLoading }] = useMutation(CANCEL_BOOKING, {
    onCompleted: (data) => {
      const updatedBookings = bookings.filter((booking) => booking.event._id !== data.cancelBooking._id);
      setBookings(updatedBookings);
      setIsLoading(false);
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: bookingsLoading } = useQuery(GET_BOOKINGS, {
    onCompleted: (data) => {
      setBookings(data.bookings);
    },
    fetchPolicy: 'no-cache',
  });

  const deleteBookingHandler = (bookingId: any) => {
    setIsLoading(true);

    cancelBooking({
      variables: {
        id: bookingId,
      },
    });
  };

  const outputTypeChangeHandler = (type: any) => {
    setOutputType(type);
  };

  if (loading || deleteEventLoading || cancelBookingLoading || bookingsLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styledBookingsContainer}>
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
                  <ul className={styledBookingList}>
                    {events.map((event: any, index: number) => {
                      return (
                        <li className={styledBookingListItem} key={event._id}>
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
                            <button
                              className={styledBookingButton}
                              onClick={() => {
                                deleteEvent({
                                  variables: {
                                    id: event._id,
                                  },
                                });
                              }}
                            >
                              Отменить
                            </button>
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
      )}
    </Fragment>
  );
};

export default Bookings;
