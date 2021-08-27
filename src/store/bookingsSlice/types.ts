import { EventType } from '../eventsSlice/types';

export type BookingType = {
  id: string;
  event: EventType;
  user: string;
};

export type ControlType = 'bookings' | 'events' | 'statistics';

export type UserBookingType = BookingType;

export type BookingsState = {
  controlType: ControlType;
  userBookings: UserBookingType[];
};
