import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://chat-backend-6f9b.onrender.com/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Invalid credentials");
        return;
      }

      const data = await res.json();
      // Save JWT token if your backend returns it
      localStorage.setItem("access_token", data.access);

      localStorage.setItem("refresh_token", data.refresh);

      // Save user info locally
      const user = { id: data.user.id, username: data.user.username };// or fetch user info from backend
      setCurrentUser(user);

      navigate("/chat"); // redirect to chat layout
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="p-6 bg-white rounded-lg shadow-md w-80"
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>

        {error && <p className="mb-2 text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-3 border rounded focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 border rounded focus:outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
          <p className="mt-3 text-sm text-center">
          Are you a new user?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}