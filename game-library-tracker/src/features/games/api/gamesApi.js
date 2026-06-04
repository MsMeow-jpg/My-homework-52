import { loadGamesFromStorage } from '../../../utils/storage';

const mockGames = [
  {
    id: '1',
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    platform: 'PC',
    status: 'playing',
    rating: 9,
    hours: 120,
    progress: 65,
    isFavorite: true,
    createdAt: '2026-06-01T12:00:00.000Z',
    image:
      'https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg',
    description: 'Open-world RPG in a cyberpunk city.',
  },
  {
    id: '2',
    title: 'Hades',
    genre: 'Roguelike',
    platform: 'PC',
    status: 'completed',
    rating: 10,
    hours: 80,
    progress: 100,
    isFavorite: true,
    createdAt: '2026-06-02T12:00:00.000Z',
    image:
      'https://upload.wikimedia.org/wikipedia/ru/c/cc/Hades_cover_art.jpg',
    description: 'Action roguelike game about escaping the underworld.',
  },
  {
    id: '3',
    title: 'Stardew Valley',
    genre: 'Simulation',
    platform: 'Nintendo Switch',
    status: 'wishlist',
    rating: 8,
    hours: 15,
    progress: 20,
    isFavorite: false,
    createdAt: '2026-06-03T12:00:00.000Z',
    image:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1754692865',
    description: 'Cozy farming and life simulator.',
  },
];

export const fetchGamesApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const savedGames = loadGamesFromStorage();

      if (savedGames) {
        const normalizedGames = savedGames.map((game) => ({
          ...game,
          createdAt: game.createdAt || new Date().toISOString(),
        }));

        resolve(normalizedGames);
        return;
      }

      resolve(mockGames);
    }, 700);
  });
};