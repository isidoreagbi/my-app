import { useEffect, useState } from 'react';
import { getUsers } from '../../services/apiService';
import GroupList from './GroupList';

const Sidebar = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [activeSection, setActiveSection] = useState('chats');  // New state for active section

  // Function to switch between sections
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Load the users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error loading users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-64 bg-white p-4 shadow-md">
      {/* Section menu */}
      <div className="mb-6">
        <h2
          className={`text-xl font-semibold mb-4 cursor-pointer ${activeSection === 'chats' ? 'text-blue-500' : ''}`}
          onClick={() => handleSectionChange('chats')}
        >
          Chats
        </h2>
        <h2
          className={`text-xl font-semibold mb-4 cursor-pointer ${activeSection === 'groups' ? 'text-blue-500' : ''}`}
          onClick={() => handleSectionChange('groups')}
        >
          Groups
        </h2>
      </div>

      {/* Display the correct section */}
      {activeSection === 'chats' && (
        <div>
          <ul>
            {users.map(user => (
              <li
                key={user.id}
                className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                onClick={() => onSelectUser(user)}  // When a user is clicked
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}`}  // Uses a service like ui-avatars
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeSection === 'groups' && (
        <div>
          {/* Render GroupList component */}
          <GroupList />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
