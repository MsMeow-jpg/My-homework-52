import { createSlice } from '@reduxjs/toolkit';
import { loadAuthFromStorage } from '../../../utils/storage';

const savedAuth = loadAuthFromStorage();

const initialState = savedAuth || {
  isAuthenticated: false,
  currentUser: null,
  registeredUser: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { username, email, nickname } = action.payload;

      const newUser = {
        id: crypto.randomUUID(),
        username,
        email,
        nickname,
      };

      state.registeredUser = newUser;
      state.currentUser = newUser;
      state.isAuthenticated = true;
      state.error = null;
    },

    loginUser: (state, action) => {
      const { email, password } = action.payload;

      if (!state.registeredUser) {
        state.error = 'No registered user found. Please register first.';
        state.isAuthenticated = false;
        return;
      }

      if (!email.trim() || !password.trim()) {
        state.error = 'Email and password are required.';
        state.isAuthenticated = false;
        return;
      }

      if (email.trim().toLowerCase() !== state.registeredUser.email.toLowerCase()) {
        state.error = 'User with this email was not found.';
        state.isAuthenticated = false;
        return;
      }

      state.currentUser = state.registeredUser;
      state.isAuthenticated = true;
      state.error = null;
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
    },

    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser, clearAuthError } =
  authSlice.actions;

export default authSlice.reducer;