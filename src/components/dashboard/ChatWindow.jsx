import MessageInput from './MessageInput';
import { useState, useEffect } from 'react';

const ChatWindow = ({ selectedUser, selectedGroup }) => {
  const [groupContent, setGroupContent] = useState(null);

  useEffect(() => {
    if (selectedGroup) {

      const fetchGroupContent = async () => {
        try {
          const response = await fetch(`/api/groups/${selectedGroup.id}`);
          const data = await response.json();
          setGroupContent(data);
        } catch (error) {
          console.error('Error fetching group content:', error);
        }
      };

      fetchGroupContent();
    }
  }, [selectedGroup]);

  return (
    <div className="flex flex-col flex-1 h-full">
      {selectedUser ? (
        <>
          <div className="bg-white p-4 shadow">
            <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
            <p className="text-sm text-gray-500">{selectedUser.email}</p>
          </div>

          <div className="flex-1 overflow-y-scroll p-4 bg-gray-50">
            <div className="mb-4">
              <p className="text-gray-500">This is the start of your conversation with {selectedUser.name}.</p>
            </div>
          </div>
        </>
      ) : selectedGroup ? (
        <>
          <div className="bg-white p-4 shadow">
            <h3 className="text-lg font-semibold">{selectedGroup.name}</h3>
            {selectedGroup.description && (
              <p className="text-sm text-gray-500">{selectedGroup.description}</p>
            )}
          </div>

          <div className="flex-1 overflow-y-scroll p-4 bg-gray-50">
            <div className="mb-4">
              {groupContent ? (
                <div>
                  <p className="text-gray-500">This is the start of your conversation in {selectedGroup.name}.</p>
                  <ul>
                    {groupContent.messages.map((message) => (
                      <li key={message.id} className="mb-2 p-2 bg-gray-100 rounded-lg">
                        <p className="font-semibold">{message.user.name}: </p>
                        <p>{message.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-500">Loading group messages...</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Please select a user or group to start chatting</p>
        </div>
      )}

      {(selectedUser || selectedGroup) && <MessageInput />}
    </div>
  );
};

export default ChatWindow;
