export type EventType = {
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

export type EventListProps = {
  events: EventType[];
  isLoading: boolean;
  onDetailClick: (eventId: string) => void;
};
