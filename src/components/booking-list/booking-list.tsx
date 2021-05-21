import React from 'react';
import { styledBookingButton, styledBookingList, styledBookingListItem } from './styled';

const BookingList = (props: any) => {
  return (
    <ul className={styledBookingList}>
      {props.bookings.map((booking: any) => {
        return (
          <li className={styledBookingListItem} key={booking._id}>
            <div>
              {booking.event.title} - {new Date(booking.createdAt).toLocaleDateString()}
            </div>
            <div>
              <button className={styledBookingButton} onClick={props.onDelete.bind(this, booking._id)}>
                Отменить
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
