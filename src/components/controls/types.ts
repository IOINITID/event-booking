import { EventType } from '../../store/eventsSlice/types';
import { BookingType, ControlType } from '../../store/bookingsSlice/types';

export type ControlsProps = {
  bookings: BookingType[];
  events: EventType[];
};

export type ControlsDataType = {
  title: string;
  type: ControlType;
  length?: number;
};
