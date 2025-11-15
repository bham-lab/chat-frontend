import React, { useState } from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import ChatLayout from './components/ChatLayout';
import Home from './components/Home';
import Login from './Login';
import Register from './Register';

function Header({ currentUser, setCurrentUser }) {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-3 max-w-4xl">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <img
            src="asset/IMG_10.jpg"
            alt="Birthday Logo"
            className="h-16 w-16 rounded-full object-cover shadow-lg mr-4 border-4 border-pink-400"
          />
          ጽብቅተይ 🎉🎂
        </Link>
        <nav className="flex items-center gap-3">
          {currentUser ? (
            <>
              <span className="text-white font-semibold">{currentUser.username}</span>
              <button
                className="px-4 py-1 rounded bg-white/80 hover:bg-white text-blue-700 font-bold transition"
                onClick={() => setCurrentUser(null)}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {location.pathname !== "/" && (
                <Link
                  to="/"
                  className="px-2 py-1 text-white hover:underline"
                >Home</Link>
              )}
              <Link
                to="/login"
                className="px-2 py-1 text-white hover:underline"
              >Login</Link>
              <Link
                to="/register"
                className="px-2 py-1 text-white hover:underline"
              >Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

function MainContainer({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-cyan-100 pt-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-4">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainContainer><Home /></MainContainer>} />
        <Route path="/login" element={<MainContainer><Login setCurrentUser={setCurrentUser} /></MainContainer>} />
        <Route path="/register" element={<MainContainer><Register setCurrentUser={setCurrentUser} /></MainContainer>} />
        {/* Protected chat */}
        <Route
          path="/chat"
          element={
            currentUser ? (
              <MainContainer>
                <ChatLayout currentUser={currentUser} />
              </MainContainer>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Default route */}
        <Route path="*" element={<Navigate to={currentUser ? "/chat" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}
