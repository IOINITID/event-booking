import React, { Fragment, useEffect, useState } from 'react';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import Loader from '../loader';

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const token = useSelectorTyped(selectToken);

  useEffect(() => {
    fetchBookings();
  }, []);

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
              }
            }
          }
        `,
    };

    fetch('http://localhost:8080/graphql', {
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

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {bookings.map((booking) => {
            return (
              <li key={booking._id}>
                {booking.event.title} - {new Date(booking.createdAt).toLocaleDateString()}
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default Bookings;
