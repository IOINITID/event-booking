import { gql } from '@apollo/client';

export const AUTHORIZATION = gql`
  query Authorization($email: String!, $password: String!) {
    authorization(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const USER_EVENTS = gql`
  query UserEvents {
    userEvents {
      id
      title
      description
      price
      date
      location
      image
      creator
    }
  }
`;

export const USER_BOOKINGS = gql`
  query UserBookings {
    userBookings {
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
