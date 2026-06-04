import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../notifications/model/notificationSlice';
import { addGame, editGame } from '../model/gamesSlice';

const getInitialFormState = (game) => {
  if (game) {
    return {
      title: game.title,
      genre: game.genre,
      platform: game.platform,
      status: game.status,
      rating: String(game.rating),
      hours: String(game.hours),
      progress: String(game.progress),
      image: game.image || '',
      description: game.description,
      isFavorite: game.isFavorite || false,
      createdAt: game.createdAt,
    };
  }

  return {
    title: '',
    genre: '',
    platform: '',
    status: 'wishlist',
    rating: '',
    hours: '',
    progress: '',
    image: '',
    description: '',
    isFavorite: false,
    createdAt: '',
  };
};

function GameForm({ gameToEdit = null, onClose }) {
  const [formData, setFormData] = useState(getInitialFormState(gameToEdit));
  const dispatch = useDispatch();

  const isEditing = Boolean(gameToEdit);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      dispatch(
        showNotification({
          message: 'Game title is required',
          type: 'error',
        })
      );
      return;
    }

    const preparedGame = {
      id: gameToEdit ? gameToEdit.id : crypto.randomUUID(),
      title: formData.title.trim(),
      genre: formData.genre.trim() || 'Unknown',
      platform: formData.platform.trim() || 'Unknown',
      status: formData.status,
      rating: Number(formData.rating) || 0,
      hours: Number(formData.hours) || 0,
      progress: Number(formData.progress) || 0,
      image: formData.image.trim(),
      description: formData.description.trim() || 'No description added.',
      isFavorite: formData.isFavorite,
      createdAt: gameToEdit
        ? gameToEdit.createdAt || new Date().toISOString()
        : new Date().toISOString(),
    };

    if (isEditing) {
      dispatch(editGame(preparedGame));
      dispatch(
        showNotification({
          message: 'Game updated successfully',
          type: 'success',
        })
      );
    } else {
      dispatch(addGame(preparedGame));
      dispatch(
        showNotification({
          message: 'Game added successfully',
          type: 'success',
        })
      );
    }

    onClose();
  };

  return (
    <form className="game-form modal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Game title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />

      <input
        type="text"
        name="platform"
        placeholder="Platform"
        value={formData.platform}
        onChange={handleChange}
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="wishlist">Want to play</option>
        <option value="playing">Playing</option>
        <option value="completed">Completed</option>
        <option value="dropped">Dropped</option>
      </select>

      <input
        type="number"
        name="rating"
        placeholder="Rating 0-10"
        min="0"
        max="10"
        value={formData.rating}
        onChange={handleChange}
      />

      <input
        type="number"
        name="hours"
        placeholder="Hours played"
        min="0"
        value={formData.hours}
        onChange={handleChange}
      />

      <input
        type="number"
        name="progress"
        placeholder="Progress %"
        min="0"
        max="100"
        value={formData.progress}
        onChange={handleChange}
      />

      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <label className="checkbox-row">
        <input
          type="checkbox"
          name="isFavorite"
          checked={formData.isFavorite}
          onChange={handleChange}
        />
        Add to favorites
      </label>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">{isEditing ? 'Save changes' : 'Add game'}</button>
    </form>
  );
}

export default GameForm;