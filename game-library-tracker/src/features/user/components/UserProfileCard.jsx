import { useSelector } from 'react-redux';

function UserProfileCard({ onEdit }) {
  const profile = useSelector((state) => state.user.profile);
  const games = useSelector((state) => state.games.items);

  const totalGames = games.length;
  const completedGames = games.filter(
    (game) => game.status === 'completed'
  ).length;
  const favoriteGames = games.filter((game) => game.isFavorite).length;
  const totalHours = games.reduce((sum, game) => sum + game.hours, 0);

  return (
    <section className="profile-card">
      <div className="profile-main">
        <div className="profile-avatar">
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.username} />
          ) : (
            <span>{profile.username.charAt(0).toUpperCase()}</span>
          )}
        </div>

        <div>
          <p className="eyebrow">Personal cabinet</p>
          <h1>{profile.username}</h1>
          <p className="profile-nickname">@{profile.nickname}</p>
          <p className="profile-bio">{profile.bio}</p>
        </div>
      </div>

      <div className="profile-details">
        <p>
          <strong>Email:</strong> {profile.email}
        </p>

        <p>
          <strong>Favorite platform:</strong> {profile.favoritePlatform}
        </p>
      </div>

      <div className="profile-stats">
        <div>
          <strong>{totalGames}</strong>
          <span>Total games</span>
        </div>

        <div>
          <strong>{completedGames}</strong>
          <span>Completed</span>
        </div>

        <div>
          <strong>{favoriteGames}</strong>
          <span>Favorites</span>
        </div>

        <div>
          <strong>{totalHours}</strong>
          <span>Total hours</span>
        </div>
      </div>

      <button type="button" className="profile-edit-button" onClick={onEdit}>
        Edit profile
      </button>
    </section>
  );
}

export default UserProfileCard;