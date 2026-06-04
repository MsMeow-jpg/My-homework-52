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
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&auto=format&fit=crop&q=80',
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
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=900&auto=format&fit=crop&q=80',
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