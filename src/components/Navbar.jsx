import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img src={logoImg} alt="AgriVision" style={styles.logoImg} />
        AgriVision
      </div>
      <ul style={styles.links}>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/detect", label: "Detect Disease" },
          { to: "/diseases", label: "Plant Diseases" },
          { to: "/blog", label: "Blog" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              style={({ isActive }) => ({
                ...styles.link,
                background: isActive ? '#2d6a2d' : 'transparent',
                color: isActive ? 'white' : '#333',
                padding: '8px 16px',
                borderRadius: '6px',
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button style={styles.btn}>Get Started</button>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 40px',
    background: 'white',
    width: '100%',
    boxSizing: 'border-box',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  logo: { display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.3rem', color: '#2d6a2d' },
  logoImg: { height: '40px', width: 'auto' },
  links: { display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0 },
  link: { textDecoration: 'none', fontSize: '1rem', transition: 'all 0.2s' },
  btn: { background: '#2d6a2d', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' },
};

export default Navbar;