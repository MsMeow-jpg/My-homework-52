import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem('game-library-theme');

const initialState = {
  currentTheme: savedTheme || 'vampire',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      localStorage.setItem('game-library-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;