import { gql } from '@apollo/client';

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
