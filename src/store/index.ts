import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import eventsReucer from './eventsSlice';
import bookingsReducer from './bookingsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    events: eventsReucer,
    bookings: bookingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
