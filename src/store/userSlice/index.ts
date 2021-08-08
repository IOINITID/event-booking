import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  token: string;
  userId: string;
}

const initialState: UserState = {
  token: localStorage.getItem('userToken'),
  userId: localStorage.getItem('userId'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getLogin: (state: UserState, action: PayloadAction<UserState>) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      localStorage.setItem('userToken', action.payload.token);
      localStorage.setItem('userId', action.payload.userId);
    },
    logout: (state: UserState) => {
      state.token = null;
      state.userId = null;
      localStorage.removeItem('userToken');
      localStorage.removeItem('userId');
    },
  },
});

export const { getLogin, logout } = userSlice.actions;

export default userSlice.reducer;
