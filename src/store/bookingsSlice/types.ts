import { EventType } from '../eventsSlice/types';

export type BookingType = {
  id: string;
  event: EventType;
  user: string;
};

export type ControlType = 'bookings' | 'events' | 'statistics';

export type UserBookingType = BookingType;

export type BookingsStatisticsType = {
  lowPriceSum: number;
  mediumPriceSum: number;
  highPriceSum: number;
  veryHighPriceSum: number;
} | null;

export type BookingsControlsCountsType = {
  eventsCount: number;
  bookingsCount: number;
} | null;

export type BookingsState = {
  controlType: ControlType;
  userBookings: UserBookingType[];
  bookingsStatistics: BookingsStatisticsType;
  bookingsControlsCounts: BookingsControlsCountsType;
};
