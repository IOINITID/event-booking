import { RootState } from '../index';

export const eventsSelector = (state: RootState) => state.events.events;
export const previewEventSelector = (state: RootState) => state.events.previewEvent;
export const userEventsSelector = (state: RootState) => state.events.userEvents;
