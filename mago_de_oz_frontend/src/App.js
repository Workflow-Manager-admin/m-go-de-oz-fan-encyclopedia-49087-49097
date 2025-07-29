import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AlbumCatalog from "./pages/AlbumCatalog";
import SongCatalog from "./pages/SongCatalog";
import BandHistory from "./pages/BandHistory";
import MemberProfiles from "./pages/MemberProfiles";
import MediaGallery from "./pages/MediaGallery";
import UserProfile from "./pages/UserProfile";
import WikiEditor from "./pages/WikiEditor";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Handles top search bar updates
  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="app-main">
          <Topbar
            theme={theme}
            onToggleTheme={toggleTheme}
            onSearch={handleSearch}
          />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/albums" />} />
              <Route path="/albums" element={<AlbumCatalog search={search} />} />
              <Route path="/songs" element={<SongCatalog search={search} />} />
              <Route path="/history" element={<BandHistory />} />
              <Route path="/members" element={<MemberProfiles />} />
              <Route path="/media" element={<MediaGallery />} />
              <Route path="/profile" element={
                  <PrivateRoute><UserProfile /></PrivateRoute>
                } />
              <Route path="/wiki/edit/:section" element={
                  <PrivateRoute><WikiEditor /></PrivateRoute>
                } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<h2>404 - Not Found</h2>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
