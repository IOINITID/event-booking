import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import eventsReucer from './eventsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    events: eventsReucer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
