type EventProps = {
  title: string;
  price: string;
  date: string;
  location: string;
  image: string;
};

export type BookingProps = {
  _id: string;
  event: EventProps;
};

export type BookingListProps = {
  bookings: BookingProps[];
  onDelete: (bookingId: string) => void;
};
