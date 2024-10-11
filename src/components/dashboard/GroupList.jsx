import { useState, useEffect } from 'react';
import { getGroups, createGroup } from '../../services/apiService';

const GroupList = ({ onSelectGroup }) => {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getGroups();
        setGroups(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des groupes', err);
      }
    };
    fetchGroups();
  }, []);

  const handleCreateGroup = async () => {
    try {
      await createGroup({ name: newGroupName });
      setNewGroupName('');
      const response = await getGroups();
      setGroups(response.data);
    } catch (err) {
      console.error('Erreur lors de la création du groupe', err);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Groupes</h2>
      <ul>
        {groups.map((group) => (
          <li
            key={group.id}
            className="flex items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
            onClick={() => onSelectGroup(group.id)}
          >
            {group.name}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <input
          type="text"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          placeholder="Nom du groupe"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleCreateGroup}
          className="w-full mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow"
        >
          Créer un groupe
        </button>
      </div>
    </div>
  );
};

export default GroupList;
