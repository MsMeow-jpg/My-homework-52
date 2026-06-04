import { useState } from 'react';
import EmptyState from '../components/EmptyState';
import Modal from '../components/Modal';
import GameFilters from '../features/filters/components/GameFilters';
import GameForm from '../features/games/components/GameForm';
import GameList from '../features/games/components/GameList';
import GameStats from '../features/games/components/GameStats';

function LibraryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGame, setEditingGame] = useState(null);

  const handleOpenAddModal = () => {
    setEditingGame(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (game) => {
    setEditingGame(game);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingGame(null);
    setIsModalOpen(false);
  };

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">Personal gaming dashboard</p>
          <h1>Game Library Tracker</h1>
          <p>
            Build your personal game library, track your backlog, manage
            progress and keep your gaming chaos under control.
          </p>
        </div>

        <button type="button" className="hero-button" onClick={handleOpenAddModal}>
          + Add Game
        </button>
      </section>

      <GameStats />
      <GameFilters />
      <GameList onEdit={handleOpenEditModal} />

      {isModalOpen && (
        <Modal
          title={editingGame ? 'Edit game' : 'Add new game'}
          onClose={handleCloseModal}
        >
          <GameForm gameToEdit={editingGame} onClose={handleCloseModal} />
        </Modal>
      )}
    </main>
  );
}

export default LibraryPage;