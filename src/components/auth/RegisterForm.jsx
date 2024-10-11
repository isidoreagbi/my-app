// import { useState } from 'react';
// import { registerUser } from '../../services/apiService'; 
// import { useAuth } from '../../context/AuthContext'; 
// import { useNavigate } from 'react-router-dom';

// const RegisterForm = () => {
//   const { login } = useAuth(); 
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError('Les mots de passe ne correspondent pas');
//       return;
//     }
//     try {
//       const response = await registerUser(formData);
//       login(response.data.user); 
//       navigate('/verify-otp'); 
//     } catch (err) {
//       if (err.response?.status === 422) {

//         const validationErrors = err.response.data.errors;
//         setError(validationErrors ? Object.values(validationErrors).flat().join(' ') : err.response.data.message);
//       } else {
//         setError(err.response?.data?.message || 'Une erreur est survenue');
//       }
//     }
//   };
  

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md text-blue-500">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-lg font-semibold mb-2">
//           Nom
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-lg font-semibold mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block text-lg font-semibold mb-2">
//           Mot de passe
//         </label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="confirmPassword" className="block text-lg font-semibold mb-2">
//           Confirmer le mot de passe
//         </label>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
//       >
//         Inscription
//       </button>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//     </form>
//   );
// };

// export default RegisterForm;


import { useState } from 'react';
import { registerUser } from '../../services/apiService'; 
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      const response = await registerUser(formData);
      const { user, token, message } = response.data;  
      localStorage.setItem('token', token);  
      login(user);  
      navigate('/verify-otp'); 
    } catch (err) {
      if (err.response?.status === 422) {
        const validationErrors = err.response.data.errors;
        setError(validationErrors ? Object.values(validationErrors).flat().join(' ') : err.response.data.message);
      } else {
        setError(err.response?.data?.message || 'Une erreur est survenue');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md text-blue-500">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-semibold mb-2">
          Nom
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
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
      <div className="mb-4">
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
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-lg font-semibold mb-2">
          Confirmer le mot de passe
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
      >
        Inscription
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default RegisterForm;
