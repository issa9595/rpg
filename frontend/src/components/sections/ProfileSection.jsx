import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import Button from '../Button'
import Modal from 'react-modal'
import CreatePlayerForm from '../forms/CreatePlayerForm'

function ProfileSection () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
    <section className='flex flex-col w-full h-full mx-auto justify-center items-center gap-4 bg-white shadow-md rounded-lg p-4 max-w-md'>
      <h2 className='text-2xl font-semibold'>Mon Profil</h2>
      <Button
        variant='info'
        onClick={() => setIsModalOpen(true)}
      >
        Créer un personnage
      </Button>
      <Button
        variant='danger'
        onClick={handleLogout}
      >
          Se déconnecter
        </Button>
      </section>
      <Modal
        isOpen={isModalOpen}
        contentLabel='Informations du personnage'
        style={customStyles}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <h2 className='text-2xl font-semibold'>Créer un personnage</h2>
        <CreatePlayerForm />
      </Modal>
    </>
  )
}

export default ProfileSection
