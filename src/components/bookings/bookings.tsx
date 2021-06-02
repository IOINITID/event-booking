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
import { EVENTS } from '../../graphql/queries';
import { DELETE_EVENT } from '../../graphql/mutations';

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const token = useSelectorTyped(selectToken);
  const [outputType, setOutputType] = useState('');
  const [events, setEvents] = useState([]);
  const history = useHistory();

  const { data, loading, error } = useQuery(EVENTS, {
    fetchPolicy: 'no-cache',
  });

  const [deleteEvent, { loading: deleteEventLoading, error: deleteEventError }] = useMutation(DELETE_EVENT, {
    onCompleted: (data) => {
      setEvents(events.filter((event) => event._id !== data.deleteEvent._id));
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    if (data) {
      setEvents(data.events);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast(error.message);
    }

    if (deleteEventError) {
      toast(deleteEventError.message);
    }
  }, [error, deleteEventError]);

  const deleteBookingHandler = (bookingId: any) => {
    setIsLoading(true);

    const requestBody = {
      query: `
          mutation CancelBooking($id: ID!) {
            cancelBooking(bookingId: $id) {
              _id
              title
            }
          }
        `,
      variables: {
        id: bookingId,
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
        const updatedBookings = bookings.filter((booking) => booking._id !== bookingId);
        setBookings(updatedBookings);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const fetchBookings = () => {
    setIsLoading(true);

    const requestBody = {
      query: `
          query {
            bookings {
              _id
              createdAt
              event {
                _id
                title
                description
                price
                date
                location
                image
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
        setBookings(resData.data.bookings);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const outputTypeChangeHandler = (type: any) => {
    setOutputType(type);
  };

  if (loading || deleteEventLoading) {
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
