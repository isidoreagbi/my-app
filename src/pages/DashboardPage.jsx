import { useState, useEffect } from 'react';
import ChatWindow from "../components/dashboard/ChatWindow";
import Sidebar from "../components/dashboard/Sidebar";
import RightSidebar from "../components/dashboard/RightSidebar";

const DashboardPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Simulate fetching groups from the API
    const fetchGroups = async () => {
      try {
        const response = await fetch('/api/groups');
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

  const handleCreateGroup = (newGroup) => {
    setGroups([...groups, newGroup]);  // Add the new group to the list
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onSelectUser={setSelectedUser} />  
      
      <div className="flex-1 flex flex-col">
        <ChatWindow selectedUser={selectedUser} selectedGroup={selectedGroup} />
      </div>

      <RightSidebar
        onCreateGroup={handleCreateGroup}
        groups={groups}
        onSelectGroup={setSelectedGroup}
      />
    </div>
  );
};

export default DashboardPage;
