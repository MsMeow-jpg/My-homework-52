import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  status: 'all',
  genre: 'all',
  platform: 'all',
  favoritesOnly: false,
  sortBy: 'default',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setGenreFilter: (state, action) => {
      state.genre = action.payload;
    },
    setPlatformFilter: (state, action) => {
      state.platform = action.payload;
    },
    setFavoritesOnly: (state, action) => {
      state.favoritesOnly = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setSearch,
  setStatusFilter,
  setGenreFilter,
  setPlatformFilter,
  setFavoritesOnly,
  setSortBy,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;