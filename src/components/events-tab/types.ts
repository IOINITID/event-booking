import { EventType } from '../../store/eventsSlice/types';

export type EventsTabProps = {
  isLoading: boolean;
  events: EventType[];
  onEventDeleteClick: (eventId: string) => void;
};
