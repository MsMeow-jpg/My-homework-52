import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from '../features/games/model/gamesSlice';
import filtersReducer from '../features/filters/model/filtersSlice';
import notificationReducer from '../features/notifications/model/notificationSlice';
import userReducer from '../features/user/model/userSlice';
import themeReducer from '../features/theme/model/themeSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filters: filtersReducer,
    notification: notificationReducer,
    user: userReducer,
    theme: themeReducer,
  },
});