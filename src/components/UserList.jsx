import React from 'react';

export default function UserList({ users, selectedUser, onSelectUser }) {
  return (
    <div className="p-4 bg-white h-full overflow-y-auto">
      <h2 className="font-bold text-lg mb-4">Users</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={`flex items-center p-2 rounded mb-2 cursor-pointer ${
              selectedUser?.id === user.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`}
            onClick={() => onSelectUser(user)}
          >
            <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full mr-2" />
            <span className="truncate">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}