import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

import Login from "./Login";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h1>Watch Next</h1>

      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <button className={styles.toggleButton} onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {/* Navbar Links (Slide-in Menu) */}
      <ul className={`${styles.navList} ${menuOpen ? styles.show : ""}`}>
        {/* Close Button (Only Visible When Menu is Open) */}
        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>✖</button>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/category" onClick={() => setMenuOpen(false)}>Category</Link></li>
        <li><Link to="/language" onClick={() => setMenuOpen(false)}>Language</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/admin" onClick={()=>setMenuOpen(false)}>Admin</Link></li>
      </ul>

      {/* Search & Sign In (Always Visible) */}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <Link to="/login">
          <button className={styles.signInButton} onClick={() => setShowLogin(true)}>Login</button>
        </Link>
      </div>
      {/* Login Modal (Only Visible When showLogin is true) */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </nav>
  );
};

export default Header;
