import { useSelector } from 'react-redux';

function GameStats() {
  const games = useSelector((state) => state.games.items);

  const totalGames = games.length;
  const completedGames = games.filter(
    (game) => game.status === 'completed'
  ).length;
  const playingGames = games.filter((game) => game.status === 'playing').length;
  const wishlistGames = games.filter(
    (game) => game.status === 'wishlist'
  ).length;
  const favoriteGames = games.filter((game) => game.isFavorite).length;
  const totalHours = games.reduce((sum, game) => sum + game.hours, 0);

  return (
    <section className="stats">
      <div>
        <strong>{totalGames}</strong>
        <span>Total games</span>
      </div>

      <div>
        <strong>{completedGames}</strong>
        <span>Completed</span>
      </div>

      <div>
        <strong>{playingGames}</strong>
        <span>Playing</span>
      </div>

      <div>
        <strong>{wishlistGames}</strong>
        <span>Want to play</span>
      </div>

      <div>
        <strong>{favoriteGames}</strong>
        <span>Favorites</span>
      </div>

      <div>
        <strong>{totalHours}</strong>
        <span>Total hours</span>
      </div>
    </section>
  );
}

export default GameStats;