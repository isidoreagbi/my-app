const MessageInput = () => {
    return (
      <div className="bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg mr-2 focus:outline-none"
        />
        <button className="bg-blue-500 text-white p-2 rounded-full">
          <i className="fas fa-paper-plane">Envoyer</i>
        </button>
      </div>
    );
  };
  
  export default MessageInput;
  