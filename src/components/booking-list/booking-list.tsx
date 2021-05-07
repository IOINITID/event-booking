import React from 'react';
import { styledBookingActions, styledBookingData, styledBookingList, styledBookingListItem } from './styled';

const BookingList = (props: any) => {
  return (
    <ul className={styledBookingList}>
      {props.bookings.map((booking: any) => {
        return (
          <li className={styledBookingListItem} key={booking._id}>
            <div className={styledBookingData}>
              {booking.event.title} - {new Date(booking.createdAt).toLocaleDateString()}
            </div>
            <div className={styledBookingActions}>
              <button onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
