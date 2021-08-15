type ControlActiveType = 'booking' | 'my' | 'data';

export type BookingsControlProps = {
  bookings: any;
  events: any;
  activeOutputType: ControlActiveType;
  onTypeChange: (type: ControlActiveType) => void;
};

export type ControlsDataType = {
  title: string;
  type: ControlActiveType;
  length?: number;
};
