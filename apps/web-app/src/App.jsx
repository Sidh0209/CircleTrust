import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Discover from "./pages/Discover";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function AppContent() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      const websiteUrl = import.meta.env.VITE_WEBSITE_URL || 'http://localhost:5173/login';
      window.location.href = websiteUrl;
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div className="flex items-center justify-center h-screen bg-black text-white">Loading...</div>;
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
