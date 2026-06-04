import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGamesApi } from '../api/gamesApi';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const games = await fetchGamesApi();
  return games;
});

const initialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGame: (state, action) => {
      state.items.push(action.payload);
    },
    deleteGame: (state, action) => {
      state.items = state.items.filter((game) => game.id !== action.payload);
    },
    updateGameStatus: (state, action) => {
      const { id, status } = action.payload;
      const game = state.items.find((item) => item.id === id);

      if (game) {
        game.status = status;

        if (status === 'completed') {
          game.progress = 100;
        }
      }
    },
    updateGameProgress: (state, action) => {
      const { id, progress } = action.payload;
      const game = state.items.find((item) => item.id === id);

      if (game) {
        game.progress = progress;

        if (progress === 100) {
          game.status = 'completed';
        }
      }
    },
    editGame: (state, action) => {
      const updatedGame = action.payload;
      const index = state.items.findIndex((game) => game.id === updatedGame.id);

      if (index !== -1) {
        state.items[index] = updatedGame;
      }
    },
    toggleFavorite: (state, action) => {
      const game = state.items.find((item) => item.id === action.payload);

      if (game) {
        game.isFavorite = !game.isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.items = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.isLoading = false;
        state.isLoaded = true;
        state.error = 'Failed to load games';
      });
  },
});

export const {
  addGame,
  deleteGame,
  updateGameStatus,
  updateGameProgress,
  editGame,
  toggleFavorite,
} = gamesSlice.actions;

export default gamesSlice.reducer;