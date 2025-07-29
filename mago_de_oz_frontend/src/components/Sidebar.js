import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <span>Mägo de Oz</span>
        <span className="wiki-badge">Wiki</span>
      </div>
      <ul className="sidebar-links">
        <li>
          <NavLink to="/albums" activeclassname="active">
            Albums
          </NavLink>
        </li>
        <li>
          <NavLink to="/songs" activeclassname="active">
            Songs
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeclassname="active">
            Band History
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" activeclassname="active">
            Members
          </NavLink>
        </li>
        <li>
          <NavLink to="/media" activeclassname="active">
            Media Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeclassname="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/wiki/edit/main" activeclassname="active">
            Wiki Editor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
