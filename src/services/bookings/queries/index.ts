import { gql } from '@apollo/client';

export const BOOKINGS_CONTROLS_COUNTS = gql`
  query BookingsControlsCounts {
    bookingsControlsCounts {
      eventsCount
      bookingsCount
    }
  }
`;

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
