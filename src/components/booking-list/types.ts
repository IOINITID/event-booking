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

export type BookingListProps = {
  bookings: BookingProps[];
  onDelete: (bookingId: string) => void;
};
