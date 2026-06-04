import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';
import Notification from './features/notifications/components/Notification';
import { fetchGames } from './features/games/model/gamesSlice';
import {
  saveGamesToStorage,
  saveUserProfileToStorage,
} from './utils/storage';
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