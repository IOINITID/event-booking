import { EventType } from '../eventsSlice/types';

export type ControlType = 'bookings' | 'events' | 'statistics';

export type BookingType = {
  id: string;
  event: EventType;
  user: string;
};

export type BookingsState = {
  controlType: ControlType;
};
