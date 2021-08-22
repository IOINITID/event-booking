import { gql } from '@apollo/client';

export const EVENTS = gql`
  query Events {
    events {
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
