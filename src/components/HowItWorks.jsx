import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: "🌿",
      title: t('hiw_step1_title'),
      description: t('hiw_step1_desc'),
      detail: t('hiw_step1_detail'),
      color: "#4caf50",
      lightColor: "rgba(76,175,80,0.1)",
    },
    {
      number: "02",
      icon: "🔍",
      title: t('hiw_step2_title'),
      description: t('hiw_step2_desc'),
      detail: t('hiw_step2_detail'),
      color: "#2d6a2d",
      lightColor: "rgba(45,106,45,0.1)",
    },
    {
      number: "03",
      icon: "🧑‍🌾",
      title: t('hiw_step3_title'),
      description: t('hiw_step3_desc'),
      detail: t('hiw_step3_detail'),
      color: "#f5a623",
      lightColor: "rgba(245,166,35,0.1)",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.bgCircle1} />
      <div style={styles.bgCircle2} />

      <div style={styles.header}>
        <div style={styles.badge}>⚡ {t('hiw_badge')}</div>
        <h2 style={styles.heading}>
          {t('hiw_heading')} <span style={styles.headingAccent}>{t('hiw_heading_accent')}</span>
        </h2>
        <p style={styles.subheading}>{t('hiw_subheading')}</p>
      </div>

      <div style={styles.stepsContainer}>
        <div style={styles.connectorLine} />
        <div style={styles.grid}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                borderColor: activeStep === index ? step.color : 'transparent',
                transform: activeStep === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: activeStep === index
                  ? `0 20px 60px ${step.lightColor}, 0 0 0 2px ${step.color}`
                  : '0 4px 24px rgba(0,0,0,0.08)',
              }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div style={{ ...styles.stepNumber, color: step.color }}>{step.number}</div>
              <div style={{ ...styles.iconCircle, background: step.lightColor, boxShadow: `0 8px 24px ${step.lightColor}` }}>
                <span style={styles.icon}>{step.icon}</span>
              </div>
              <h3 style={{ ...styles.cardTitle, color: step.color }}>{step.title}</h3>
              <p style={styles.cardText}>{step.description}</p>
              <div style={{
                ...styles.detail,
                opacity: activeStep === index ? 1 : 0,
                maxHeight: activeStep === index ? '60px' : '0',
                transition: 'all 0.3s ease',
              }}>
                <p style={styles.detailText}>💡 {step.detail}</p>
              </div>
              <div style={{
                ...styles.cardAccent,
                background: `linear-gradient(90deg, ${step.color}, transparent)`,
                opacity: activeStep === index ? 1 : 0,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// styles — completely unchanged
const styles = {
  section: {
    background: 'white',
    padding: '40px 40px 40px',
    textAlign: 'center',
    maxWidth: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  bgCircle1: {
    position: 'absolute', top: '-80px', left: '-80px',
    width: '300px', height: '300px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(45,106,45,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  bgCircle2: {
    position: 'absolute', bottom: '-100px', right: '-100px',
    width: '400px', height: '400px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(76,175,80,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  header: { marginBottom: '64px', position: 'relative', zIndex: 1 },
  badge: {
    display: 'inline-block',
    background: 'rgba(45,106,45,0.1)',
    color: '#2d6a2d',
    padding: '6px 16px',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: '700',
    marginBottom: '16px',
    border: '1px solid rgba(45,106,45,0.2)',
  },
  heading: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '900',
    color: '#1a3d1a',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  headingAccent: {
    color: '#2d6a2d',
    borderBottom: '4px solid #f5a623',
    paddingBottom: '2px',
  },
  subheading: {
    fontSize: '1.05rem',
    color: '#666',
    maxWidth: '400px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  stepsContainer: { position: 'relative', maxWidth: '1100px', margin: '0 auto' },
  connectorLine: {
    position: 'absolute', top: '80px', left: '20%', right: '20%',
    height: '2px',
    background: 'linear-gradient(90deg, #4caf50, #2d6a2d, #f5a623)',
    zIndex: 0, opacity: 0.3,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '28px',
    position: 'relative',
    zIndex: 1,
  },
  card: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px 28px 32px',
    textAlign: 'center',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  },
  stepNumber: {
    fontSize: '3.5rem', fontWeight: '900', opacity: 0.12,
    position: 'absolute', top: '12px', right: '20px',
    lineHeight: 1, fontFamily: 'monospace',
  },
  iconCircle: {
    width: '80px', height: '80px', borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 24px', transition: 'all 0.3s ease',
  },
  icon: { fontSize: '2rem' },
  cardTitle: { fontSize: '1.25rem', fontWeight: '800', marginBottom: '12px', transition: 'color 0.3s' },
  cardText: { fontSize: '0.95rem', color: '#666', lineHeight: '1.7', marginBottom: '8px' },
  detail: { overflow: 'hidden' },
  detailText: {
    fontSize: '0.85rem', color: '#888', lineHeight: '1.5',
    marginTop: '12px', padding: '10px 12px',
    background: '#f8fdf8', borderRadius: '8px', textAlign: 'left',
  },
  cardAccent: {
    position: 'absolute', bottom: 0, left: 0,
    height: '4px', width: '100%', transition: 'opacity 0.3s',
  },
};

export default HowItWorks;