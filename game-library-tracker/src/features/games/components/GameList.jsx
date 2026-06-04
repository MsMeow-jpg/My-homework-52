import { useSelector } from 'react-redux';
import EmptyState from '../../../components/EmptyState';
import GameCard from './GameCard';

function GameList({ onEdit }) {
  const games = useSelector((state) => state.games.items);
  const filters = useSelector((state) => state.filters);

  const filteredGames = games
    .filter((game) => {
      const matchesSearch = game.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());

      const matchesStatus =
        filters.status === 'all' || game.status === filters.status;

      const matchesGenre =
        filters.genre === 'all' || game.genre === filters.genre;

      const matchesPlatform =
        filters.platform === 'all' || game.platform === filters.platform;

      const matchesFavorite =
        !filters.favoritesOnly || game.isFavorite;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesGenre &&
        matchesPlatform &&
        matchesFavorite
      );
    })
    .sort((firstGame, secondGame) => {
      switch (filters.sortBy) {
        case 'title':
          return firstGame.title.localeCompare(secondGame.title);
        case 'rating':
          return secondGame.rating - firstGame.rating;
        case 'hours':
          return secondGame.hours - firstGame.hours;
        case 'progress':
          return secondGame.progress - firstGame.progress;
        default:
          return 0;
      }
    });

  if (filteredGames.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="game-list">
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default GameList;