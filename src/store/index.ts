import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
