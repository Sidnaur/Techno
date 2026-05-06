import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/AgriLogo.png";
import QuickTips from "./QuickTips";
import { useLanguage } from "../context/LanguageContext";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

const Navbar = () => {
  const [showQuickTips, setShowQuickTips] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const navLinks = [
    { to: "/", label: t('nav_home') },
    { to: "/about", label: t('nav_about') },
    { to: "/detect", label: t('nav_detect') },
    { to: "/diseases", label: t('nav_plants') },
    { to: "/blog", label: t('nav_blog') },
  ];

  return (
    <>
      <nav style={styles.nav}>
        {/* Logo */}
        <div style={styles.logo}>
          <img src={logoImg} alt="AgriVision" style={styles.logoImg} />
          AgriVision
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <ul style={styles.links}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  style={({ isActive }) => ({
                    ...styles.link,
                    background: isActive ? "#2d6a2d" : "transparent",
                    color: isActive ? "white" : "#333",
                    padding: "8px 16px",
                    borderRadius: "6px",
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop quick tips button */}
        {!isMobile && (
          <button style={styles.btn} onClick={() => setShowQuickTips(true)}>
            {t('nav_tips')}
          </button>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={styles.dropdown}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                ...styles.dropdownLink,
                background: isActive ? '#f0faf0' : 'transparent',
                color: isActive ? '#2d6a2d' : '#333',
                fontWeight: isActive ? '700' : '500',
              })}
            >
              {label}
            </NavLink>
          ))}
          <button
            style={styles.dropdownBtn}
            onClick={() => { setMenuOpen(false); setShowQuickTips(true); }}
          >
            {t('nav_tips')}
          </button>
        </div>
      )}

      {showQuickTips && (
        <QuickTips onClose={() => setShowQuickTips(false)} />
      )}
    </>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 40px",
    background: "white",
    width: "100%",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
    fontWeight: "800",
    fontSize: "1.4rem",
    color: "#2d6a2d",
    letterSpacing: "0.3px",
  },
  logoImg: {
    height: "42px",
    width: "auto",
  },
  links: {
    display: "flex",
    gap: "8px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    fontSize: "1rem",
    transition: "all 0.2s",
  },
  btn: {
    background: "#2d6a2d",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
  },
  hamburger: {
    background: "transparent",
    border: "none",
    fontSize: "1.6rem",
    cursor: "pointer",
    color: "#2d6a2d",
    padding: "4px 8px",
    lineHeight: 1,
  },
  dropdown: {
    position: "sticky",
    top: "74px",
    zIndex: 999,
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "8px 0",
    borderTop: "1px solid #eee",
  },
  dropdownLink: {
    display: "block",
    padding: "14px 28px",
    textDecoration: "none",
    fontSize: "1rem",
    borderBottom: "1px solid #f5f5f5",
    transition: "background 0.15s",
  },
  dropdownBtn: {
    margin: "12px 28px",
    background: "#2d6a2d",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    textAlign: "center",
  },
};

export default Navbar;