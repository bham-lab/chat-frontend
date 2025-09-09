import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatLayout from './components/ChatLayout';
import Home from './components/Home';
import Login from './Login';
import Register from './Register';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />

        {/* Protected chat */}
        <Route
          path="/chat"
          element={
            currentUser ? (
              <ChatLayout currentUser={currentUser} />
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