import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <h1>RealTymSoccer</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-nav" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-nav" : "")}
              to="/fixtures"
            >
              Fixtures
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
