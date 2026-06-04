import { useState } from 'react';
import Modal from '../components/Modal';
import ProfileForm from '../features/user/components/ProfileForm';
import UserProfileCard from '../features/user/components/UserProfileCard';

function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="page">
      <UserProfileCard onEdit={handleOpenModal} />

      {isModalOpen && (
        <Modal title="Edit profile" onClose={handleCloseModal}>
          <ProfileForm onClose={handleCloseModal} />
        </Modal>
      )}
    </main>
  );
}

export default ProfilePage;