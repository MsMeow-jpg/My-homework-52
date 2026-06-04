import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: 'success',
  isVisible: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'success';
      state.isVisible = true;
    },
    hideNotification: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;