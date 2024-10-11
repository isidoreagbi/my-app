import { useState, useEffect } from 'react';

const RightSidebar = ({ onCreateGroup, groups, onSelectGroup }) => {
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');

  const handleCreateGroup = async () => {
    if (!newGroupName) {
      alert('Group name is required');
      return;
    }

    // Simulate an API request to create the group
    const groupData = {
      name: newGroupName,
      description: newGroupDescription
    };

    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
      });

      if (!response.ok) {
        throw new Error('Failed to create group');
      }

      const createdGroup = await response.json();
      onCreateGroup(createdGroup.group);  // Pass the created group back to the parent
      setNewGroupName('');
      setNewGroupDescription('');
    } catch (error) {
      console.error('Error creating group:', error);
      alert('Error creating group');
    }
  };

  return (
    <div className="flex flex-col bg-white p-4 shadow-lg w-80">
      <h3 className="text-lg font-semibold mb-4">Create Group</h3>
      <input
        type="text"
        className="p-2 mb-4 border border-gray-300 rounded"
        placeholder="Group Name"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
      />
      <textarea
        className="p-2 mb-4 border border-gray-300 rounded"
        placeholder="Group Description"
        value={newGroupDescription}
        onChange={(e) => setNewGroupDescription(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={handleCreateGroup}
      >
        Create Group
      </button>

      <h3 className="text-lg font-semibold mb-4">Groups</h3>
      <ul className="list-none">
        {groups.map((group) => (
          <li
            key={group.id}
            className="p-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelectGroup(group)}
          >
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
