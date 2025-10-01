import React from 'react';

export default function Message({ message, currentUser }) {
  const isOwn = message.sender.id === currentUser.id;

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} items-end`}>
      {/* Avatar for other users */}
      {!isOwn && (
        <div className="flex items-center justify-center w-8 h-8 mr-2 font-bold text-gray-600 bg-gray-300 rounded-full">
          {message.sender.username.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Message bubble */}
      <div
        className={`relative p-3 rounded-xl max-w-[70%] break-words shadow ${
          isOwn ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-900'
        }`}
      >
        {!isOwn && <div className="mb-1 font-semibold">{message.sender.username}</div>}
        <div>{message.text}</div>

        {/* ✅ Seen indicator */}
        {isOwn && (
          <div className="mt-1 text-xs text-right">
            {message.is_seen ? (
              <span className="text-green-400">Seen</span>
            ) : (
              <span className="text-gray-400">Sent</span>
            )}
          </div>
        )}
      </div>

      {/* Spacing for own messages */}
      {isOwn && <div className="w-8 h-8" />}
    </div>
  );
}
