import { useState } from 'react';
import { verifyOtpCode } from '../../services/apiService'; 
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

const OtpVerificationForm = () => {
  const { setUser } = useAuth(); 
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyOtpCode(otp); 
      setUser(response.data.user); 
      navigate('/dashboard'); 
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue lors de la vérification.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md text-blue-500">
      <div className="mb-4">
        <label htmlFor="otp" className="block text-lg font-semibold mb-2">
          Entrez votre code OTP
        </label>
        <input
          type="text"
          name="otp"
          value={otp}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
      >
        Vérifier OTP
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default OtpVerificationForm;
