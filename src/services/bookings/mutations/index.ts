import { gql } from '@apollo/client';

export const BOOK_EVENT = gql`
  mutation BookEvent($id: ID!) {
    bookEvent(eventId: $id) {
      id
      event {
        id
        title
        description
        price
        date
        location
        image
        creator
      }
      user
    }
  }
`;

export const CANCEL_BOOKING = gql`
  mutation CancelBooking($id: ID!) {
    cancelBooking(bookingId: $id) {
      id
    }
  }
`;
