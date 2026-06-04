import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';
import { logoutUser } from './features/auth/model/authSlice';
import Notification from './features/notifications/components/Notification';
import { fetchGames } from './features/games/model/gamesSlice';
import { showNotification } from './features/notifications/model/notificationSlice';
import {
  saveAuthToStorage,
  saveGamesToStorage,
  saveUserProfileToStorage,
} from './utils/storage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import LibraryPage from './pages/LibraryPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const dispatch = useDispatch();

  const { items, isLoading, isLoaded, error } = useSelector(
    (state) => state.games
  );
  const profile = useSelector((state) => state.user.profile);
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  useEffect(() => {
    document.body.dataset.theme = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    if (isLoaded) {
      saveGamesToStorage(items);
    }
  }, [items, isLoaded]);

  useEffect(() => {
    saveUserProfileToStorage(profile);
  }, [profile]);

  useEffect(() => {
    saveAuthToStorage(auth);
  }, [auth]);

  const handleLogout = () => {
    dispatch(logoutUser());
    setActivePage('dashboard');

    dispatch(
      showNotification({
        message: 'Logged out successfully',
        type: 'success',
      })
    );
  };

  if (!auth.isAuthenticated) {
    return (
      <>
        <Notification />
        <AuthPage />
      </>
    );
  }

  return (
    <>
      <Notification />

      <header className="app-header">
        <div>
          <span className="app-logo">GL</span>
          <span className="app-title">Game Library Tracker</span>
        </div>

        <nav className="app-nav">
          <button
            type="button"
            className={activePage === 'dashboard' ? 'active' : ''}
            onClick={() => setActivePage('dashboard')}
          >
            Dashboard
          </button>

          <button
            type="button"
            className={activePage === 'library' ? 'active' : ''}
            onClick={() => setActivePage('library')}
          >
            Library
          </button>

          <button
            type="button"
            className={activePage === 'profile' ? 'active' : ''}
            onClick={() => setActivePage('profile')}
          >
            Profile
          </button>

          <ThemeSwitcher />

          <button type="button" className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      {isLoading && <p className="loading">Loading games...</p>}
      {error && <p className="error">{error}</p>}

      {!isLoading && !error && activePage === 'dashboard' && (
        <DashboardPage onGoToLibrary={() => setActivePage('library')} />
      )}

      {!isLoading && !error && activePage === 'library' && <LibraryPage />}

      {!isLoading && !error && activePage === 'profile' && <ProfilePage />}
    </>
  );
}

export default App;