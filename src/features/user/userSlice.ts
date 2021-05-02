import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface UserState {
  token: string;
  userId: string;
}

const initialState: UserState = {
  token: null,
  userId: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; userId: string }>) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;

export const selectUserId = (state: RootState) => state.user.userId;

export default userSlice.reducer;
