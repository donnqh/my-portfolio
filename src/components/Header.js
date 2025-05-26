import React from 'react';

function Header({ darkMode, toggleTheme }) {
  return (
    <header>
      <div className="nav-container">
        <h1 className="logo">Don Ng Qian Hui</h1>
        <nav className="navbar">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button id="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
}

export default Header;
