import { EventType } from '../../store/eventsSlice/types';

export type EventsTabProps = {
  events: EventType[];
  onEventDeleteClick: (eventId: string) => void;
};
