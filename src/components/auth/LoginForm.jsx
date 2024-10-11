import { useState } from 'react';
import { loginUser } from '../../services/apiService'; 
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';  // Import React Toastify
import 'react-toastify/dist/ReactToastify.css';          // Import the CSS for Toastify

const LoginForm = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      login(response.data.user); 
      toast.success('Connexion réussie');  
      navigate('/dashboard'); 
    } catch (err) {
      let errorMessage = 'Une erreur est survenue';
      if (err.response) {
        switch (err.response.status) {
          case 401: 
            errorMessage = 'Mot de passe incorrect';
            break;
          case 404: 
            errorMessage = 'Utilisateur non trouvé';
            break;
          default:
            errorMessage = err.response.data.message || errorMessage;
        }
      }
      toast.error(errorMessage);  
      setError(errorMessage);
    }
  };
  

  return (
    <div>
      <ToastContainer /> 
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md text-blue-500">
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-semibold mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
        >
          Connexion
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
