import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: window.localStorage.getItem('theme') || 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeSwitch: (state) => {
      state.value === 'dark' ? (state.value = 'light') : (state.value = 'dark');
    },
  },
});

export const { themeSwitch } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
