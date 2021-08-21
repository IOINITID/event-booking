import { gql } from '@apollo/client';

export const REGISTRATION = gql`
  mutation Registration($email: String!, $password: String!) {
    registration(email: $email, password: $password) {
      id
      token
    }
  }
`;
