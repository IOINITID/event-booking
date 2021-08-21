import { gql } from '@apollo/client';

export const AUTHORIZATION = gql`
  query Authorization($email: String!, $password: String!) {
    authorization(email: $email, password: $password) {
      id
      token
    }
  }
`;
