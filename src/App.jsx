import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import GroupList from './components/dashboard/GroupList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/verify-otp" element={<OtpVerificationPage />} />

        <Route path="/groups" element={<GroupList />} />

      </Routes>
    </Router>
  );
};

export default App;
