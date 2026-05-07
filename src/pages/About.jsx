import { useEffect, useState } from 'react';
import aboutImg from '../assets/about.jpg';
import { useLanguage } from '../context/LanguageContext';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

const About = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div>
      {/* Header */}
      <div style={{ ...styles.header, padding: isMobile ? '40px 24px 32px' : '60px 60px 50px' }}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>{t('about_title')}</h1>
          </div>
          <p style={styles.subtitle}>{t('about_subtitle')}</p>
        </div>
      </div>

      {/* AI Section */}
      <div style={{
        ...styles.aiSection,
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '40px 24px' : '72px 60px',
        gap: isMobile ? '32px' : '60px',
      }}>
        <div style={styles.aiText}>
          <p style={styles.sectionLabel}>{t('about_tech_label')}</p>
          <h2 style={styles.aiTitle}>{t('about_tech_title')}</h2>
          <div style={styles.divider} />
          <p style={styles.aiPara}>{t('about_tech_para1')}</p>
          <p style={styles.aiPara}>{t('about_tech_para2')}</p>
        </div>
        <div style={styles.aiImageBox}>
          <img src={aboutImg} alt="AI Detection" style={styles.aiImage} />
          <div style={styles.imageCaption}>{t('about_img_caption')}</div>
        </div>
      </div>

      {/* Cards Section */}
      <div style={{ ...styles.cardsSection, padding: isMobile ? '40px 24px' : '72px 60px' }}>
        <div style={styles.cardsSectionHeader}>
          <p style={styles.sectionLabel}>{t('about_purpose_label')}</p>
          <h2 style={styles.cardsSectionTitle}>{t('about_purpose_title')}</h2>
        </div>
        <div style={{
          ...styles.cardsGrid,
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
        }}>
          {[
            { num: '01', title: t('about_mission_title'), text: t('about_mission_text'), accent: '#2d6a2d' },
            { num: '02', title: t('about_vision_title'), text: t('about_vision_text'), accent: '#f5a623' },
            { num: '03', title: t('about_serve_title'), text: t('about_serve_text'), accent: '#1a3d1a' },
          ].map((card, index) => (
            <div key={index} style={{ ...styles.card, borderTop: `4px solid ${card.accent}` }}>
              <div style={styles.cardNumRow}>
                <span style={{ ...styles.cardNum, color: card.accent }}>{card.num}</span>
              </div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <div style={{ ...styles.cardDivider, background: card.accent }} />
              <p style={styles.cardText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div style={{ ...styles.noteSection, padding: isMobile ? '28px 24px' : '32px 60px' }}>
        <div style={{
          ...styles.noteInner,
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '12px' : '20px',
          textAlign: 'center',
        }}>
          {!isMobile && <div style={styles.noteLine} />}
          <p style={styles.noteText}>{t('about_note')}</p>
          {!isMobile && <div style={styles.noteLine} />}
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(135deg, #1a3d1a 0%, #2d6a2d 100%)',
  },
  headerInner: { maxWidth: '1100px', margin: '0 auto' },
  titleRow: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' },
  titleBar: { width: '5px', height: '42px', background: '#f5a623', borderRadius: '4px', flexShrink: 0 },
  title: { fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', fontWeight: '800', color: 'white', margin: 0 },
  subtitle: { fontSize: '1rem', color: 'rgba(255,255,255,0.8)', maxWidth: '560px', lineHeight: '1.7', margin: 0 },
  aiSection: {
    display: 'flex',
    alignItems: 'center',
    background: 'white',
    flexWrap: 'wrap',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  aiText: { flex: 1, minWidth: '280px' },
  sectionLabel: {
    fontSize: '0.72rem', fontWeight: '700', color: '#2d6a2d',
    textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 10px',
  },
  aiTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: '800',
    color: '#1a3d1a', marginBottom: '16px',
  },
  divider: { width: '48px', height: '4px', background: '#f5a623', borderRadius: '4px', marginBottom: '24px' },
  aiPara: { fontSize: '0.97rem', color: '#555', lineHeight: '1.8', marginBottom: '16px' },
  aiImageBox: { flex: 1, minWidth: '280px' },
  aiImage: {
    width: '100%', borderRadius: '12px', objectFit: 'cover',
    maxHeight: '380px', border: '1px solid #e0ece0', display: 'block',
  },
  imageCaption: { fontSize: '0.78rem', color: '#999', fontStyle: 'italic', marginTop: '8px', textAlign: 'center' },
  cardsSection: { background: '#f4f9f4', boxSizing: 'border-box' },
  cardsSectionHeader: { maxWidth: '1100px', margin: '0 auto 40px' },
  cardsSectionTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: '800',
    color: '#1a3d1a', margin: 0,
  },
  cardsGrid: { display: 'grid', gap: '24px', maxWidth: '1100px', margin: '0 auto' },
  card: {
    background: 'white', borderRadius: '10px', padding: '28px',
    border: '1px solid #deeede', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  cardNumRow: { marginBottom: '12px' },
  cardNum: { fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' },
  cardTitle: { fontSize: '1.1rem', fontWeight: '800', color: '#1a3d1a', marginBottom: '12px' },
  cardDivider: { width: '32px', height: '3px', borderRadius: '4px', marginBottom: '14px' },
  cardText: { fontSize: '0.9rem', color: '#555', lineHeight: '1.8', margin: 0 },
  noteSection: { background: 'white', borderTop: '1px solid #e8f5e9' },
  noteInner: { maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center' },
  noteLine: { flex: 1, height: '1px', background: '#d0e8d0', flexShrink: 0 },
  noteText: { fontSize: '0.82rem', color: '#888', lineHeight: '1.6', textAlign: 'center', margin: 0, fontStyle: 'italic' },
};

export default About;