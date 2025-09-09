import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function ChatWindow({ currentUser, chatUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Fetch chat messages
  const fetchMessages = async () => {
    if (!currentUser || !chatUser) return;

    try {
      const token = localStorage.getItem("access_token");
      const res = await fetch(
        `http://localhost:8000/api/messages/?chat_with=${chatUser.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        console.error("Fetch failed", res.status);
        return;
      }

      const data = await res.json();
      setMessages(data);
      scrollToBottom();
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  // ✅ Send new message
  const sendMessage = async () => {
    if (!input.trim()) return;

    try {
      const token = localStorage.getItem("access_token")?.replace(/"/g, "");
      
      const res = await fetch("http://localhost:8000/api/messages/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          receiver_id: chatUser.id,
    text: input,
        }),
      });

      if (res.ok) {
        setInput("");
        await fetchMessages();
      } else {
        console.error("Send failed:", res.status);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  // ✅ Poll messages every 2s
  useEffect(() => {
    if (chatUser) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 2000);
      return () => clearInterval(interval);
    }
  }, [chatUser]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
        <h2 className="font-semibold text-lg">{chatUser.username}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} currentUser={currentUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-3 border-t flex items-center">
        <div className="flex-1 relative">
          <input
            type="text"
            className="w-full border rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder={`Message ${chatUser.username}...`}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600 disabled:text-gray-400"
            onClick={sendMessage}
            disabled={!input.trim()}
          >
            <PaperAirplaneIcon className="w-6 h-6 rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}