import { EventType } from '../../components/event-list/types';

export type PreviewEventType = EventType | null;

export type EventsState = {
  events: EventType[];
  previewEvent: PreviewEventType;
};
