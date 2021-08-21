import { gql } from '@apollo/client';

export const EVENTS = gql`
  query Events {
    events {
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

export const AUTHORIZATION = gql`
  query Authorization($email: String!, $password: String!) {
    authorization(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const GET_BOOKINGS = gql`
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
        creator {
          _id
        }
      }
    }
  }
`;
