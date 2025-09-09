import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"; // Django backend

export const fetchUsers = async () => {
  const res = await axios.get(`${API_URL}/users/`);
  return res.data;
};

export const fetchFriends = async () => {
  const res = await axios.get(`${API_URL}/friends/`);
  return res.data;
};

export const fetchMessages = async (userId, friendId) => {
  const res = await axios.get(`${API_URL}/messages/`);
  // Filter messages between these two users
  return res.data.filter(
    (msg) =>
      (msg.sender.id === userId && msg.receiver.id === friendId) ||
      (msg.sender.id === friendId && msg.receiver.id === userId)
  );
};

export const sendMessage = async (senderId, receiverId, text) => {
  const res = await axios.post(`${API_URL}/messages/`, {
    sender: senderId,
    receiver: receiverId,
    text,
  });
  return res.data;
};