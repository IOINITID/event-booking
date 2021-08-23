export type ControlActiveType = 'booking' | 'my' | 'data';

type EventProps = {
  id: string;
  title: string;
  price: string;
  date: string;
  location: string;
  image: string;
  creator: string;
};

export type BookingProps = {
  id: string;
  event: EventProps;
  user: string;
};

export type BookingsControlProps = {
  bookings: BookingProps[];
  events: EventProps[];
  activeOutputType: ControlActiveType;
  onTypeChange: (type: ControlActiveType) => void;
};

export type ControlsDataType = {
  title: string;
  type: ControlActiveType;
  length?: number;
};
