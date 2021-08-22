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
      title: $title
      description: $description
      price: $price
      date: $date
      location: $location
      image: $image
    ) {
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

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(eventId: $id) {
      _id
    }
  }
`;
