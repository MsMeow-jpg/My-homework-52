import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAuthError,
  loginUser,
  registerUser,
} from '../features/auth/model/authSlice';
import { showNotification } from '../features/notifications/model/notificationSlice';
import { updateUserProfile } from '../features/user/model/userSlice';

function AuthPage() {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    nickname: '',
    password: '',
  });

  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const registeredUser = useSelector((state) => state.auth.registeredUser);

  const isRegisterMode = mode === 'register';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (authError) {
      dispatch(clearAuthError());
    }
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    dispatch(clearAuthError());
    setFormData({
      username: '',
      email: '',
      nickname: '',
      password: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isRegisterMode) {
      if (!formData.username.trim() || !formData.email.trim() || !formData.password.trim()) {
        dispatch(
          showNotification({
            message: 'Username, email and password are required',
            type: 'error',
          })
        );
        return;
      }

      const newUser = {
        username: formData.username.trim(),
        email: formData.email.trim(),
        nickname: formData.nickname.trim() || 'Player',
      };

      dispatch(registerUser(newUser));

      dispatch(
        updateUserProfile({
          username: newUser.username,
          email: newUser.email,
          nickname: newUser.nickname,
          favoritePlatform: 'PC',
          avatar: '',
          bio: 'I track my games, backlog, favorite titles and gaming progress here.',
        })
      );

      dispatch(
        showNotification({
          message: 'Registration completed',
          type: 'success',
        })
      );

      return;
    }

    dispatch(
      loginUser({
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-info">
          <p className="eyebrow">Game Library Tracker</p>
          <h1>{isRegisterMode ? 'Create your account' : 'Welcome back'}</h1>
          <p>
            This is a frontend mock-auth screen. Password is used only for form
            imitation and is not saved in localStorage.
          </p>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={!isRegisterMode ? 'active' : ''}
            onClick={() => handleModeChange('login')}
          >
            Login
          </button>

          <button
            type="button"
            className={isRegisterMode ? 'active' : ''}
            onClick={() => handleModeChange('register')}
          >
            Register
          </button>
        </div>

        {registeredUser && !isRegisterMode && (
          <div className="auth-hint">
            Registered email: <strong>{registeredUser.email}</strong>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegisterMode && (
            <>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />

              <input
                type="text"
                name="nickname"
                placeholder="Gaming nickname"
                value={formData.nickname}
                onChange={handleChange}
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder={
              isRegisterMode
                ? 'Password imitation, not saved'
                : 'Password imitation'
            }
            value={formData.password}
            onChange={handleChange}
          />

          {authError && <p className="auth-error">{authError}</p>}

          <button type="submit">
            {isRegisterMode ? 'Create account' : 'Login'}
          </button>
        </form>

        <p className="auth-note">
          This authorization is prepared for future backend integration.
        </p>
      </section>
    </main>
  );
}

export default AuthPage;