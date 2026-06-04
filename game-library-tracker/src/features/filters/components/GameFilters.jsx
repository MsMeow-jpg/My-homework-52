import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilters,
  setFavoritesOnly,
  setGenreFilter,
  setPlatformFilter,
  setSearch,
  setSortBy,
  setStatusFilter,
} from '../model/filtersSlice';

function GameFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <section className="filters">
      <input
        type="text"
        placeholder="Search game..."
        value={filters.search}
        onChange={(event) => dispatch(setSearch(event.target.value))}
      />

      <select
        value={filters.status}
        onChange={(event) => dispatch(setStatusFilter(event.target.value))}
      >
        <option value="all">All statuses</option>
        <option value="wishlist">Want to play</option>
        <option value="playing">Playing</option>
        <option value="completed">Completed</option>
        <option value="dropped">Dropped</option>
      </select>

      <select
        value={filters.genre}
        onChange={(event) => dispatch(setGenreFilter(event.target.value))}
      >
        <option value="all">All genres</option>
        <option value="RPG">RPG</option>
        <option value="Roguelike">Roguelike</option>
        <option value="Simulation">Simulation</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Horror">Horror</option>
        <option value="Strategy">Strategy</option>
      </select>

      <select
        value={filters.platform}
        onChange={(event) => dispatch(setPlatformFilter(event.target.value))}
      >
        <option value="all">All platforms</option>
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
      </select>

      <select
        value={filters.sortBy}
        onChange={(event) => dispatch(setSortBy(event.target.value))}
      >
        <option value="default">Default order</option>
        <option value="title">Sort by title</option>
        <option value="rating">Sort by rating</option>
        <option value="hours">Sort by hours</option>
        <option value="progress">Sort by progress</option>
      </select>

      <label className="favorite-filter">
        <input
          type="checkbox"
          checked={filters.favoritesOnly}
          onChange={(event) =>
            dispatch(setFavoritesOnly(event.target.checked))
          }
        />
        Favorites only
      </label>

      <button type="button" onClick={() => dispatch(resetFilters())}>
        Reset filters
      </button>
    </section>
  );
}

export default GameFilters;