import React, { useState, useEffect } from 'react';
import ChatWindow from './ChatWindow';
import UserList from './UserList';

export default function ChatLayout({ currentUser }) {
  const [users, setUsers] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
     fetch(`${import.meta.env.VITE_API_URL}/api/users/`)
      .then(res => res.json())
      .then(data => {
         const filtered = data.filter((u) => u.id !== currentUser.id);
        setUsers(filtered);
      })
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
    <div className="flex flex-col h-screen md:flex-row">
      {(showSidebar || !chatUser || window.innerWidth >= 768) && (
        <div className="w-full border-b border-gray-300 md:w-1/4 md:border-b-0 md:border-r">
          <UserList users={users} selectedUser={chatUser} onSelectUser={handleSelectUser} />
        </div>
      )}

      {chatUser && (
        <div className="flex-1 w-full">
          <div className="p-2 bg-gray-100 border-b md:hidden">
            <button onClick={handleBack} className="px-3 py-1 text-white bg-blue-500 rounded">
              ← Back
            </button>
          </div>
          <ChatWindow currentUser={currentUser} chatUser={chatUser} />
        </div>
      )}
    </div>
  );
}