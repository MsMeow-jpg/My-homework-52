import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../../notifications/model/notificationSlice';
import { resetUserProfile, updateUserProfile } from '../model/userSlice';

function ProfileForm({ onClose }) {
  const profile = useSelector((state) => state.user.profile);
  const [formData, setFormData] = useState(profile);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.username.trim()) {
      dispatch(
        showNotification({
          message: 'Username is required',
          type: 'error',
        })
      );
      return;
    }

    const updatedProfile = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      nickname: formData.nickname.trim() || 'Player',
      favoritePlatform: formData.favoritePlatform,
      avatar: formData.avatar.trim(),
      bio: formData.bio.trim() || 'No bio added yet.',
    };

    dispatch(updateUserProfile(updatedProfile));

    dispatch(
      showNotification({
        message: 'Profile updated successfully',
        type: 'success',
      })
    );

    onClose();
  };

  const handleReset = () => {
    dispatch(resetUserProfile());

    dispatch(
      showNotification({
        message: 'Profile reset',
        type: 'success',
      })
    );

    onClose();
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="nickname"
        placeholder="Gaming nickname"
        value={formData.nickname}
        onChange={handleChange}
      />

      <select
        name="favoritePlatform"
        value={formData.favoritePlatform}
        onChange={handleChange}
      >
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="Mobile">Mobile</option>
      </select>

      <input
        type="url"
        name="avatar"
        placeholder="Avatar URL"
        value={formData.avatar}
        onChange={handleChange}
      />

      <textarea
        name="bio"
        placeholder="Short bio"
        value={formData.bio}
        onChange={handleChange}
      />

      <div className="profile-form-actions">
        <button type="submit">Save profile</button>

        <button type="button" className="delete-button" onClick={handleReset}>
          Reset profile
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;