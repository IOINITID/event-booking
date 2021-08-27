import { BookingType } from '../../store/bookingsSlice/types';

export type BookingsTabProps = {
  bookings: BookingType[];
  onBookingDeleteClick: (bookingId: string) => void;
};
