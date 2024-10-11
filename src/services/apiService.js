import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
});

export const registerUser = (data) => api.post('/register', data);
export const loginUser = (data) => api.post('/login', data);
export const verifyOtpCode = (data) => api.post('/verify-otp', data);
export const getUsers = () => api.get('/users');


export const getGroups = async () => {
  const response = await fetch('/api/groups');
  const data = await response.json();
  return data;
};

export const createGroup = async (groupData) => {
  const response = await fetch('/api/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(groupData),
  });

  const data = await response.json();
  return data;
};

export const getGroupById = async (id) => {
  const response = await fetch(`/api/groups/${id}`);
  const data = await response.json();
  return data;
};


// Déconnexion
export const logout = () => api.post('/logout'); // Cette route doit gérer la déconnexion
