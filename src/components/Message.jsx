import React from 'react';

export default function Message({ message, currentUser }) {
  const isOwn = message.sender.id === currentUser.id;

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      {!isOwn && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-2">
          {message.sender.username.charAt(0).toUpperCase()}
        </div>
      )}

      <div
        className={`p-3 rounded-xl max-w-[70%] break-words shadow ${
          isOwn ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-900'
        }`}
      >
        {!isOwn && <div className="font-semibold mb-1">{message.sender.username}</div>}
        <div>{message.text}</div>
      </div>

      {isOwn && <div className="w-8 h-8" />} {/* spacing for alignment */}
    </div>
  );
}