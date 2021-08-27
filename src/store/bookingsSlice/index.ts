import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { MODULE_NAME } from './constants';

// Types
import { BookingsState, ControlType, UserBookingType } from './types';

const initialState: BookingsState = {
  controlType: 'bookings',
  userBookings: [],
};

export const bookingsSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setControlType: (state: BookingsState, { payload }: PayloadAction<ControlType>) => {
      state.controlType = payload;
    },
    setUserBookings: (state: BookingsState, { payload }: PayloadAction<UserBookingType[]>) => {
      state.userBookings = payload;
    },
  },
});

export const { setControlType, setUserBookings } = bookingsSlice.actions;

export default bookingsSlice.reducer;
