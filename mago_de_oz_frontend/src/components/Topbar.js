import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";

// PUBLIC_INTERFACE
function Topbar({ theme, onToggleTheme, onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch && onSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/albums");
    }
  };

  return (
    <div className="topbar">
      <input
        className="global-search"
        type="search"
        placeholder="Search albums, songs, members..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-label="Global search"
      />
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}

export default Topbar;
