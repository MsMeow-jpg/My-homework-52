import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ConfirmModal from '../../../components/ConfirmModal';
import { showNotification } from '../../notifications/model/notificationSlice';
import {
  deleteGame,
  toggleFavorite,
  updateGameProgress,
  updateGameStatus,
} from '../model/gamesSlice';

const statusLabels = {
  wishlist: 'Want to play',
  playing: 'Playing',
  completed: 'Completed',
  dropped: 'Dropped',
};

const formatDate = (dateString) => {
  if (!dateString) {
    return 'Unknown';
  }

  return new Intl.DateTimeFormat('uk-UA').format(new Date(dateString));
};

function GameCard({ game, onEdit }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    dispatch(
      updateGameStatus({
        id: game.id,
        status: event.target.value,
      })
    );

    dispatch(
      showNotification({
        message: 'Status updated',
        type: 'success',
      })
    );
  };

  const handleProgressChange = (event) => {
    dispatch(
      updateGameProgress({
        id: game.id,
        progress: Number(event.target.value),
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteGame(game.id));

    dispatch(
      showNotification({
        message: 'Game deleted',
        type: 'success',
      })
    );

    setIsConfirmOpen(false);
  };

  const handleFavorite = () => {
    dispatch(toggleFavorite(game.id));

    dispatch(
      showNotification({
        message: game.isFavorite
          ? 'Removed from favorites'
          : 'Added to favorites',
        type: 'success',
      })
    );
  };

  return (
    <>
      <article className="game-card">
        <div className="game-cover">
          {game.image ? (
            <img src={game.image} alt={game.title} />
          ) : (
            <div className="game-cover-placeholder">No cover</div>
          )}

          <button
            type="button"
            className={`favorite-button ${game.isFavorite ? 'active' : ''}`}
            onClick={handleFavorite}
          >
            ★
          </button>
        </div>

        <div className="game-card-content">
          <h3>{game.title}</h3>

          <p>
            <strong>Genre:</strong> {game.genre}
          </p>

          <p>
            <strong>Platform:</strong> {game.platform}
          </p>

          <p>
            <strong>Status:</strong> {statusLabels[game.status]}
          </p>

          <p>
            <strong>Rating:</strong> {game.rating}/10
          </p>

          <p>
            <strong>Hours played:</strong> {game.hours}
          </p>

          <p>
            <strong>Added:</strong> {formatDate(game.createdAt)}
          </p>

          <p>{game.description}</p>

          <div className="progress-wrapper">
            <div className="progress-info">
              <span>Progress</span>
              <strong>{game.progress}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${game.progress}%` }}
              />
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={game.progress}
              onChange={handleProgressChange}
            />
          </div>

          <select value={game.status} onChange={handleStatusChange}>
            <option value="wishlist">Want to play</option>
            <option value="playing">Playing</option>
            <option value="completed">Completed</option>
            <option value="dropped">Dropped</option>
          </select>

          <div className="card-actions">
            <button type="button" onClick={() => onEdit(game)}>
              Edit game
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => setIsConfirmOpen(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </article>

      {isConfirmOpen && (
        <ConfirmModal
          title="Delete game?"
          message={`Are you sure you want to delete "${game.title}"? This action cannot be undone.`}
          confirmText="Delete"
          cancelText="Cancel"
          onConfirm={handleDelete}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}
    </>
  );
}

export default GameCard;