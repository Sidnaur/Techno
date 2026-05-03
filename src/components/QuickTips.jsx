import { useLanguage } from '../context/LanguageContext'; 

const QuickTips = ({ onClose }) => {
  const { t } = useLanguage();
  const tips = [
    {
      icon: "📷",
      title: t('quicktips_tip1_title'),
      desc: t('quicktips_tip1_desc'),
    },
    {
      icon: "🔍",
      title: t('quicktips_tip2_title'),
      desc: t('quicktips_tip2_desc'),
    },
    {
      icon: "📚",
      title: t('quicktips_tip3_title'),
      desc: t('quicktips_tip3_desc'),
    },
    {
      icon: "📝",
      title: t('quicktips_tip4_title'),
      desc: t('quicktips_tip4_desc'),
    },
  ];

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>{t('quicktips_title')}</h2>
          <p style={styles.subtitle}>
            {t('quicktips_subtitle')}
          </p>
        </div>

        <div style={styles.grid}>
          {tips.map((tip, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{tip.icon}</div>
              <h4 style={styles.cardTitle}>{tip.title}</h4>
              <p style={styles.cardDesc}>{tip.desc}</p>
            </div>
          ))}
        </div>

        <button style={styles.closeBtn} onClick={onClose}>
          {t('quicktips_close')}
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  },

  modal: {
    background: "white",
    padding: "30px",
    borderRadius: "14px",
    width: "520px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  header: {
    marginBottom: "20px",
  },

  title: {
    color: "#2d6a2d",
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "0.9rem",
    color: "#666",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    marginTop: "20px",
  },

  card: {
    background: "#f7faf7",
    padding: "16px",
    borderRadius: "10px",
    textAlign: "center",
    transition: "all 0.25s",
    cursor: "default",
  },

  icon: {
    fontSize: "1.8rem",
    marginBottom: "6px",
  },

  cardTitle: {
    margin: "4px 0",
    color: "#2d6a2d",
  },

  cardDesc: {
    fontSize: "0.85rem",
    color: "#555",
  },

  closeBtn: {
    marginTop: "22px",
    background: "linear-gradient(135deg,#2d6a2d,#4caf50)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default QuickTips;