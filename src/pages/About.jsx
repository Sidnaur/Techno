import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>About AgriVision</h1>
          </div>
          <p style={styles.subtitle}>
            Smart farming solutions powered by artificial intelligence — built for farmers, by problem solvers.
          </p>
        </div>
      </div>

      {/* AI Section */}
      <div style={styles.aiSection}>
        <div style={styles.aiText}>
          <p style={styles.sectionLabel}>Our Technology</p>
          <h2 style={styles.aiTitle}>AI for Healthier Crops</h2>
          <div style={styles.divider} />
          <p style={styles.aiPara}>
            AgriVision is a plant disease detection system that uses deep learning to identify diseases
            in tomato, chili, and eggplant leaves. Simply upload a photograph of an affected leaf,
            and our AI will analyze it within seconds.
          </p>
          <p style={styles.aiPara}>
            Our system is designed with simplicity in mind — no technical expertise required.
            Whether you're a farmer in the field or a gardener at home, AgriVision helps you
            diagnose problems early and take action before crop damage escalates.
          </p>
          <div style={styles.highlights}>
            {[
              { value: '98%', label: 'Detection Accuracy' },
              { value: '11', label: 'Disease Targets' },
              { value: '3', label: 'Crop Varieties' },
            ].map((h, i) => (
              <div key={i} style={styles.highlight}>
                <span style={styles.highlightValue}>{h.value}</span>
                <span style={styles.highlightLabel}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.aiImageBox}>
          <img src={aboutImg} alt="AI Detection" style={styles.aiImage} />
          <div style={styles.imageCaption}>
            AgriVision AI analyzing leaf conditions in real-time
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div style={styles.cardsSection}>
        <div style={styles.cardsSectionHeader}>
          <p style={styles.sectionLabel}>Our Purpose</p>
          <h2 style={styles.cardsSectionTitle}>What Drives Us</h2>
        </div>
        <div style={styles.cardsGrid}>
          {[
            {
              num: '01',
              title: "Our Mission",
              text: "To empower small-scale farmers and home gardeners with accessible AI technology for early plant disease detection, reducing crop losses and promoting sustainable agriculture.",
              accent: '#2d6a2d',
            },
            {
              num: '02',
              title: "Our Vision",
              text: "A world where every farmer, regardless of scale, has access to advanced diagnostic tools that help protect their crops and improve food security for communities.",
              accent: '#f5a623',
            },
            {
              num: '03',
              title: "Who We Serve",
              text: "Small-scale farmers, home gardeners, agricultural students, and extension workers who need a simple, reliable tool to identify plant diseases quickly and accurately.",
              accent: '#1a3d1a',
            },
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
      <div style={styles.noteSection}>
        <div style={styles.noteInner}>
          <div style={styles.noteLine} />
          <p style={styles.noteText}>
            AgriVision is developed as an academic and practical tool to support agricultural communities.
            For critical crop decisions, always consult a licensed agricultural extension officer or agronomist.
          </p>
          <div style={styles.noteLine} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    background: 'linear-gradient(135deg, #1a3d1a 0%, #2d6a2d 100%)',
    padding: '60px 60px 50px',
  },
  headerInner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '16px',
  },
  titleBar: {
    width: '5px',
    height: '42px',
    background: '#f5a623',
    borderRadius: '4px',
    flexShrink: 0,
  },
  title: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    fontWeight: '800',
    color: 'white',
    margin: 0,
    letterSpacing: '-0.3px',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '560px',
    lineHeight: '1.7',
    margin: 0,
  },
  aiSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    padding: '72px 60px',
    background: 'white',
    flexWrap: 'wrap',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  aiText: { flex: 1, minWidth: '280px' },
  sectionLabel: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#2d6a2d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 10px',
  },
  aiTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '800',
    color: '#1a3d1a',
    marginBottom: '16px',
    letterSpacing: '-0.3px',
  },
  divider: {
    width: '48px',
    height: '4px',
    background: '#f5a623',
    borderRadius: '4px',
    marginBottom: '24px',
  },
  aiPara: {
    fontSize: '0.97rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '16px',
  },
  highlights: {
    display: 'flex',
    gap: '32px',
    marginTop: '32px',
    paddingTop: '24px',
    borderTop: '1px solid #e8f5e9',
  },
  highlight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  highlightValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#1a3d1a',
    lineHeight: 1,
  },
  highlightLabel: {
    fontSize: '0.75rem',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },
  aiImageBox: { flex: 1, minWidth: '280px' },
  aiImage: {
    width: '100%',
    borderRadius: '12px',
    objectFit: 'cover',
    maxHeight: '380px',
    border: '1px solid #e0ece0',
    display: 'block',
  },
  imageCaption: {
    fontSize: '0.78rem',
    color: '#999',
    fontStyle: 'italic',
    marginTop: '8px',
    textAlign: 'center',
  },
  cardsSection: {
    background: '#f4f9f4',
    padding: '72px 60px',
    boxSizing: 'border-box',
  },
  cardsSectionHeader: {
    maxWidth: '1100px',
    margin: '0 auto 40px',
  },
  cardsSectionTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '800',
    color: '#1a3d1a',
    margin: 0,
    letterSpacing: '-0.3px',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    borderRadius: '10px',
    padding: '32px',
    border: '1px solid #deeede',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  cardNumRow: { marginBottom: '12px' },
  cardNum: {
    fontSize: '0.75rem',
    fontWeight: '800',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#1a3d1a',
    marginBottom: '12px',
  },
  cardDivider: {
    width: '32px',
    height: '3px',
    borderRadius: '4px',
    marginBottom: '14px',
  },
  cardText: {
    fontSize: '0.9rem',
    color: '#555',
    lineHeight: '1.8',
    margin: 0,
  },
  noteSection: {
    background: 'white',
    padding: '32px 60px',
    borderTop: '1px solid #e8f5e9',
  },
  noteInner: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  noteLine: {
    flex: 1,
    height: '1px',
    background: '#d0e8d0',
    flexShrink: 0,
  },
  noteText: {
    fontSize: '0.82rem',
    color: '#888',
    lineHeight: '1.6',
    textAlign: 'center',
    margin: 0,
    fontStyle: 'italic',
  },
};

export default About;