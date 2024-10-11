import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-8">Inscription</h1>
      <RegisterForm />
      <p className="mt-4">
        Déjà inscrit ?{' '}
        <button onClick={() => navigate('/login')} className="text-white underline">
          Connectez-vous
        </button>
      </p>
    </div>
  );
};

export default RegisterPage;
