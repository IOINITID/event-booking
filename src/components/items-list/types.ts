export type EventProps = {
  _id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: {
    _id: string;
    email: string;
  };
};

export type ItemsListProps = {
  events: EventProps[];
  onDelete: (eventId: string) => void;
};
