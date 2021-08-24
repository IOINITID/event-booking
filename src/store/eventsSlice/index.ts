import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EventType } from '../../components/event-list/types';

// Constants
import { MODULE_NAME } from './constants';

// Types
import { EventsState, PreviewEventType } from './types';

const initialState: EventsState = {
  events: [],
  previewEvent: null,
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
  },
});

export const { setEvents, setPreviewEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
