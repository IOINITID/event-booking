import { BookingType } from '../../store/bookingsSlice/types';

export type BookingsTabProps = {
  isLoading: boolean;
  bookings: BookingType[];
  onBookingDeleteClick: (bookingId: string) => void;
};
