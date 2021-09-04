import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { MODULE_NAME } from './constants';

// Types
import { BookingsState, BookingsStatisticsType, ControlType, UserBookingType } from './types';

const initialState: BookingsState = {
  controlType: 'bookings',
  userBookings: [],
  bookingsStatistics: null,
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
    setBookingsStatistics: (state: BookingsState, { payload }: PayloadAction<BookingsStatisticsType>) => {
      state.bookingsStatistics = payload;
    },
  },
});

export const { setControlType, setUserBookings, setBookingsStatistics } = bookingsSlice.actions;

export default bookingsSlice.reducer;
