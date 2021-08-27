import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { MODULE_NAME } from './constants';

// Types
import { EventsState, EventType, PreviewEventType, UserEventType } from './types';

const initialState: EventsState = {
  events: [],
  previewEvent: null,
  userEvents: [],
};

export const eventsSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setEvents: (state: EventsState, { payload }: PayloadAction<EventType[]>) => {
      state.events = payload;
    },
    setPreviewEvent: (state: EventsState, { payload }: PayloadAction<PreviewEventType>) => {
      state.previewEvent = payload;
    },
    setUserEvents: (state: EventsState, { payload }: PayloadAction<UserEventType[]>) => {
      state.userEvents = payload;
    },
  },
});

export const { setEvents, setPreviewEvent, setUserEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
