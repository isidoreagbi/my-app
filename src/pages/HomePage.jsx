import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Rejoignez la conversation,</h1>
      <h1 className="text-5xl font-bold mb-8">restez connecté(e).</h1>
      <p className="mb-8 text-lg text-center">
        Discutez en toute simplicité avec vos amis et collègues. Inscrivez-vous pour découvrir un monde de connexions.
      </p>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100"
          onClick={handleRegisterClick}
        >
          Inscription
        </button>
        <button
          className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-500"
          onClick={handleLoginClick}
        >
          Connexion
        </button>
      </div>
    </div>
  );
};

export default HomePage;
