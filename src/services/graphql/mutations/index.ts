import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $title: String!
    $description: String!
    $price: Float!
    $date: String!
    $location: String!
    $image: String!
  ) {
    createEvent(
      eventInput: {
        title: $title
        description: $description
        price: $price
        date: $date
        location: $location
        image: $image
      }
    ) {
      _id
      title
      description
      price
      date
      location
      image
      creator {
        _id
        email
      }
    }
  }
`;

export const BOOK_EVENT = gql`
  mutation BookEvent($id: ID!) {
    bookEvent(eventId: $id) {
      _id
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(eventId: $id) {
      _id
    }
  }
`;

export const REGISTRATION = gql`
  mutation Registration($email: String!, $password: String!) {
    registration(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const CANCEL_BOOKING = gql`
  mutation CancelBooking($id: ID!) {
    cancelBooking(bookingId: $id) {
      _id
      title
    }
  }
`;
