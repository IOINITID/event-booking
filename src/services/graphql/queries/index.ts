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

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
      message
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
