import { gql } from '@apollo/client';

export const BOOKINGS_STATISTICS = gql`
  query BookingsStatistics {
    bookingsStatistics {
      lowPriceSum
      mediumPriceSum
      highPriceSum
      veryHighPriceSum
    }
  }
`;
