import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

interface UserState {
  token: string | null;
  userId: string | null;
}

const initialState: UserState = {
  token: localStorage.getItem('userToken') || null,
  userId: localStorage.getItem('userId') || null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getLogin: (state, action: PayloadAction<{ token: string; userId: string }>) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      localStorage.setItem('userToken', action.payload.token);
      localStorage.setItem('userId', action.payload.userId);
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');
    },
  },
});

export const { getLogin, logout } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;

export const selectUserId = (state: RootState) => state.user.userId;

export default userSlice.reducer;
