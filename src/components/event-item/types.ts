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

export type EventItemProps = {
  /** Event data */
  event: EventType;
  /** Handler to show modal with details */
  onDetailClick: () => void;
};
