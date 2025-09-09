import React, { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    setMessage('Passwords do not match');
    return;
  }

  try {
    const res = await fetch('http://localhost:8000/api/auth/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        first_name: '',
        last_name: '',
        avatar: ''
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(JSON.stringify(data));
      return;
    }

    setMessage('Registration successful! You can now login.');
  } catch (err) {
    setMessage('Error registering user');
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {message && <p className="text-sm text-red-500 mb-2">{message}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
        >
          Register
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}