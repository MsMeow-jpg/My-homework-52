import { useSelector } from 'react-redux';

const formatDate = (dateString) => {
  if (!dateString) {
    return 'Unknown';
  }

  return new Intl.DateTimeFormat('uk-UA').format(new Date(dateString));
};

function DashboardPage({ onGoToLibrary }) {
  const games = useSelector((state) => state.games.items);
  const profile = useSelector((state) => state.user.profile);

  const totalGames = games.length;
  const completedGames = games.filter(
    (game) => game.status === 'completed'
  ).length;
  const favoriteGames = games.filter((game) => game.isFavorite).length;
  const totalHours = games.reduce((sum, game) => sum + game.hours, 0);

  const latestGame = [...games].sort(
    (firstGame, secondGame) =>
      new Date(secondGame.createdAt) - new Date(firstGame.createdAt)
  )[0];

  const topRatedGame = [...games].sort(
    (firstGame, secondGame) => secondGame.rating - firstGame.rating
  )[0];

  const mostPlayedGame = [...games].sort(
    (firstGame, secondGame) => secondGame.hours - firstGame.hours
  )[0];

  const averageProgress =
    totalGames > 0
      ? Math.round(
          games.reduce((sum, game) => sum + game.progress, 0) / totalGames
        )
      : 0;

  return (
    <main className="page">
      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Welcome back, {profile.username}</h1>
          <p>
            Here is a quick overview of your gaming library, backlog progress
            and favorite titles.
          </p>
        </div>

        <button type="button" className="hero-button" onClick={onGoToLibrary}>
          Open Library
        </button>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <span>Total games</span>
          <strong>{totalGames}</strong>
        </article>

        <article className="dashboard-card">
          <span>Completed</span>
          <strong>{completedGames}</strong>
        </article>

        <article className="dashboard-card">
          <span>Favorites</span>
          <strong>{favoriteGames}</strong>
        </article>

        <article className="dashboard-card">
          <span>Total hours</span>
          <strong>{totalHours}</strong>
        </article>
      </section>

      <section className="dashboard-details">
        <article className="dashboard-panel">
          <h2>Latest added game</h2>
          {latestGame ? (
            <>
              <h3>{latestGame.title}</h3>
              <p>Added: {formatDate(latestGame.createdAt)}</p>
              <p>Status: {latestGame.status}</p>
            </>
          ) : (
            <p>No games added yet.</p>
          )}
        </article>

        <article className="dashboard-panel">
          <h2>Top rated game</h2>
          {topRatedGame ? (
            <>
              <h3>{topRatedGame.title}</h3>
              <p>Rating: {topRatedGame.rating}/10</p>
              <p>Platform: {topRatedGame.platform}</p>
            </>
          ) : (
            <p>No games added yet.</p>
          )}
        </article>

        <article className="dashboard-panel">
          <h2>Most played game</h2>
          {mostPlayedGame ? (
            <>
              <h3>{mostPlayedGame.title}</h3>
              <p>Hours: {mostPlayedGame.hours}</p>
              <p>Progress: {mostPlayedGame.progress}%</p>
            </>
          ) : (
            <p>No games added yet.</p>
          )}
        </article>

        <article className="dashboard-panel">
          <h2>Average progress</h2>
          <strong className="big-progress">{averageProgress}%</strong>

          <div className="progress-bar dashboard-progress">
            <div
              className="progress-fill"
              style={{ width: `${averageProgress}%` }}
            />
          </div>
        </article>
      </section>
    </main>
  );
}

export default DashboardPage;