import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { MODULE_NAME } from './constants';

// Types
import { BookingsState, ControlType } from './types';

const initialState: BookingsState = {
  controlType: 'bookings',
};

export const bookingsSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setControlType: (state: BookingsState, { payload }: PayloadAction<ControlType>) => {
      state.controlType = payload;
    },
  },
});

export const { setControlType } = bookingsSlice.actions;

export default bookingsSlice.reducer;
