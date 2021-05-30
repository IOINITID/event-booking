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
import EventsBanner from '../events-banner';

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const token = useSelectorTyped(selectToken);
  const [outputType, setOutputType] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

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
                date
                price
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

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styledBookingsContainer}>
          <BookingsControl onOutputTypeChange={outputTypeChangeHandler} activeOutputType={outputType} />
          <div>
            {outputType !== 'my' && outputType !== 'data' && (
              <BookingList bookings={bookings} onDelete={deleteBookingHandler} />
            )}
            {outputType === 'my' && (
              <Fragment>
                <EventsBanner />
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
