import { EventType } from '../../store/eventsSlice/types';
import { BookingType, ControlType } from '../../store/bookingsSlice/types';

export type ControlsProps = {
  controlType: ControlType;
  bookings: BookingType[];
  events: EventType[];
  onControlClick: (type: ControlType) => void;
};

export type ControlsDataType = {
  title: string;
  type: ControlType;
  length?: number;
};
