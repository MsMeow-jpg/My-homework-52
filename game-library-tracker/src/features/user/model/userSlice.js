import { createSlice } from '@reduxjs/toolkit';
import { loadUserProfileFromStorage } from '../../../utils/storage';

const defaultProfile = {
  username: 'Snezhana',
  email: 'snezhana@example.com',
  nickname: 'MsMeow',
  favoritePlatform: 'PC',
  avatar: '',
  bio: 'I track my games, backlog, favorite titles and gaming progress here.',
};

const savedProfile = loadUserProfileFromStorage();

const initialState = {
  profile: savedProfile || defaultProfile,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    resetUserProfile: (state) => {
      state.profile = defaultProfile;
    },
  },
});

export const { updateUserProfile, resetUserProfile } = userSlice.actions;

export default userSlice.reducer;