import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer style={styles.footer}>
      <div style={{
        ...styles.container,
        padding: isMobile ? '40px 24px' : '48px 40px',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: isMobile ? '28px' : '32px',
      }}>

        {/* Brand */}
        <div>
          <div style={styles.logo}>
            🌿 <span style={styles.logoText}>AgriVision</span>
          </div>
          <p style={styles.description}>
            AI-powered plant disease detection for all types of crops. Helping farmers protect their harvests.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          <div style={styles.linkGroup}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/detect" style={styles.link}>Detect Disease</Link>
            <Link to="/diseases" style={styles.link}>Plant Diseases</Link>
            <Link to="/blog" style={styles.link}>Blog</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={styles.heading}>Contact</h4>
          <div style={styles.linkGroup}>
            <div style={styles.contactItem}>📧 support@agrivision.app</div>
            <div style={styles.contactItem}>📍 Smart Farming Solutions</div>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} AgriVision. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#1a3d1a",
    color: "white",
    maxWidth: "100%",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  logoText: { fontSize: "1.2rem" },
  description: {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.75)",
    lineHeight: "1.6",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: "16px",
    fontSize: "1rem",
  },
  linkGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  link: {
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    fontSize: "0.875rem",
  },
  contactItem: {
    color: "rgba(255,255,255,0.75)",
    fontSize: "0.875rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "16px",
    textAlign: "center",
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.6)",
  },
};

export default Footer;