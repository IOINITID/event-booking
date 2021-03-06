import { MouseEvent } from 'react';

export type EventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
  creator: string;
};

export type EventListProps = {
  events: EventType[];
  isLoading: boolean;
  eventsCount: number;
  onShowMoreClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onDetailClick: (eventId: string) => void;
};
