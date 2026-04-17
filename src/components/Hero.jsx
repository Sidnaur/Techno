import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../assets/Early Stages Of Plant Growth Background.jpg';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={styles.hero}>
      <div style={{ ...styles.bgImage, backgroundImage: `url(${heroBg})` }} />
      <div style={styles.overlay} />

      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          ...styles.particle,
          width: `${10 + i * 8}px`,
          height: `${10 + i * 8}px`,
          top: `${15 + i * 12}%`,
          left: `${5 + i * 14}%`,
          animationDelay: `${i * 0.8}s`,
          opacity: 0.15 + i * 0.05,
        }} />
      ))}

      <div style={{
        ...styles.content,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease',
      }}>
        <div style={styles.badge}>
          <span style={styles.badgeDot} />
          AI-Powered Plant Health System
        </div>

        <h1 style={styles.title}>
          Detect Plant
          <span style={styles.titleAccent}> Diseases</span>
          <br />Instantly
        </h1>

        <p style={styles.subtitle}>
          Upload a photo of any plant leaf and receive instant AI-powered disease detection with recommended treatments.
        </p>

        <div style={styles.buttons}>
          <button
            style={styles.primaryBtn}
            onClick={() => navigate('/detect')}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            🔬 Start Detection
          </button>
          <button
            style={styles.secondaryBtn}
            onClick={() => navigate('/about')}
            onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >
            Learn More →
          </button>
        </div>
      </div>

      <div style={styles.scrollIndicator}>
        <div style={styles.scrollDot} />
        <span style={styles.scrollText}>Scroll to explore</span>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 6vw',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(110deg, rgba(10,30,10,0.88) 0%, rgba(20,60,20,0.75) 60%, rgba(0,0,0,0.4) 100%)',
    zIndex: 1,
  },
  particle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(100,200,100,0.6)',
    zIndex: 2,
    animation: 'float 4s ease-in-out infinite alternate',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '580px',
    color: 'white',
    paddingTop: '20px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    padding: '8px 18px',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '24px',
    color: '#a5d6a7',
    letterSpacing: '0.5px',
  },
  badgeDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#69f0ae',
    boxShadow: '0 0 8px #69f0ae',
    display: 'inline-block',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '900',
    margin: '0 0 20px',
    lineHeight: '1.1',
    letterSpacing: '-1px',
  },
  titleAccent: { color: '#f5a623' },
  subtitle: {
    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
    maxWidth: '500px',
    marginBottom: '36px',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.8)',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '14px',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #f5a623, #e6951a)',
    color: '#1a1a1a',
    padding: '14px 28px',
    border: 'none',
    borderRadius: '12px',
    fontWeight: '800',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 4px 24px rgba(245,166,35,0.45)',
    transition: 'transform 0.2s',
    letterSpacing: '0.3px',
  },
  secondaryBtn: {
    background: 'transparent',
    color: 'white',
    padding: '14px 28px',
    border: '2px solid rgba(255,255,255,0.4)',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background 0.2s',
    backdropFilter: 'blur(4px)',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    zIndex: 10,
    color: 'rgba(255,255,255,0.5)',
  },
  scrollDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.5)',
    animation: 'bounce 1.5s infinite',
  },
  scrollText: {
    fontSize: '0.75rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
};

export default Hero;