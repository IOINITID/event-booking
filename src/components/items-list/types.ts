export type EventProps = {
  id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: string;
};

export type ItemsListProps = {
  events: EventProps[];
  onDelete: (eventId: string) => void;
};
