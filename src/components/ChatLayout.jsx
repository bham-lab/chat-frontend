import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import UserList from './UserList';

export default function ChatLayout({ currentUser }) {
  const [users, setUsers] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const handleSelectUser = (user) => {
    setChatUser(user);
    setShowSidebar(false);
  };

  const handleBack = () => {
    setChatUser(null);
    setShowSidebar(true);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {(showSidebar || !chatUser || window.innerWidth >= 768) && (
        <div className="md:w-1/4 w-full border-b md:border-b-0 md:border-r border-gray-300">
          <UserList users={users} selectedUser={chatUser} onSelectUser={handleSelectUser} />
        </div>
      )}

      {chatUser && (
        <div className="flex-1 w-full">
          <div className="md:hidden p-2 bg-gray-100 border-b">
            <button onClick={handleBack} className="px-3 py-1 bg-blue-500 text-white rounded">
              ← Back
            </button>
          </div>
          <ChatWindow currentUser={currentUser} chatUser={chatUser} />
        </div>
      )}
    </div>
  );
}