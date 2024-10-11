import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-8">Connexion</h1>
      <LoginForm />
      <p className="mt-4">
        Pas encore inscrit ?{' '}
        <button onClick={() => navigate('/register')} className="text-white underline">
          Inscrivez-vous
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
