import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Constants
import { MODULE_NAME, LocalStorage } from './constants';

// Types
import { LoginType, LogoutType, UserState } from './types';

const initialState: UserState = {
  token: localStorage.getItem(LocalStorage.TOKEN) || '',
  id: localStorage.getItem(LocalStorage.ID) || '',
};

export const userSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setLogin: (state: UserState, { payload }: PayloadAction<LoginType>) => {
      state.token = payload.token;
      state.id = payload.id;
      localStorage.setItem(LocalStorage.TOKEN, payload.token);
      localStorage.setItem(LocalStorage.ID, payload.id);
    },
    setLogout: (state: LogoutType) => {
      state.token = '';
      state.id = '';
      localStorage.removeItem(LocalStorage.TOKEN);
      localStorage.removeItem(LocalStorage.ID);
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
