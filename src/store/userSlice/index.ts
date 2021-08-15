import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { MODULE_NAME } from './constants';

// Enums
import { LocalStorage } from './enums';

// Types
import { LoginType, LogoutType, UserState } from './types';

const initialState: UserState = {
  token: localStorage.getItem(LocalStorage.Token) || '',
  id: localStorage.getItem(LocalStorage.Id) || '',
};

export const userSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setLogin: (state: UserState, { payload }: PayloadAction<LoginType>) => {
      state.token = payload.token;
      state.id = payload.id;
      localStorage.setItem(LocalStorage.Token, payload.token);
      localStorage.setItem(LocalStorage.Id, payload.id);
    },
    setLogout: (state: LogoutType) => {
      state.token = '';
      state.id = '';
      localStorage.removeItem(LocalStorage.Token);
      localStorage.removeItem(LocalStorage.Id);
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
