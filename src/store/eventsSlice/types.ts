export type EventType = {
  id: string;
  title: string;
  description: string;
  price: string;
  date: string;
  location: string;
  image: string;
  creator: string;
};

export type PreviewEventType = EventType | null;

export type UserEventType = EventType;

export type EventsState = {
  events: EventType[];
  previewEvent: PreviewEventType;
  userEvents: UserEventType[];
};
