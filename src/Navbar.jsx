import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/leadership-styles", label: "Leadership Styles" },
    { path: "/leadership-training", label: "Leadership Training" },
    { path: "/motivation", label: "Motivation" },
    { path: "/motivation-swot", label: "Motivation SWOT" },
    
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-title">E-Portfolio</div>

      {/* Mobile Toggle Button */}
      <button
        className="hamburger-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src="/e6.svg" alt="Menu" className="hamburger-icon" />
      </button>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
