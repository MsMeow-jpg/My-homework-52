const GAMES_STORAGE_KEY = 'game-library-tracker-games';
const USER_STORAGE_KEY = 'game-library-tracker-user';

export const loadGamesFromStorage = () => {
  try {
    const savedGames = localStorage.getItem(GAMES_STORAGE_KEY);

    if (!savedGames) {
      return null;
    }

    return JSON.parse(savedGames);
  } catch (error) {
    console.error('Failed to load games from localStorage:', error);
    return null;
  }
};

export const saveGamesToStorage = (games) => {
  try {
    localStorage.setItem(GAMES_STORAGE_KEY, JSON.stringify(games));
  } catch (error) {
    console.error('Failed to save games to localStorage:', error);
  }
};

export const loadUserProfileFromStorage = () => {
  try {
    const savedProfile = localStorage.getItem(USER_STORAGE_KEY);

    if (!savedProfile) {
      return null;
    }

    return JSON.parse(savedProfile);
  } catch (error) {
    console.error('Failed to load user profile from localStorage:', error);
    return null;
  }
};

export const saveUserProfileToStorage = (profile) => {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to save user profile to localStorage:', error);
  }
};