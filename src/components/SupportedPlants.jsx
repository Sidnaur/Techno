import { useState } from 'react';
import vegetablesImg from '../assets/Vegetables.jpg';
import ornamentalsImg from '../assets/Ornamentals.jpg';
import fruitsImg from '../assets/Fruits.jpg';

const SupportedPlants = () => {
  const [activeCard, setActiveCard] = useState(null);

  const plants = [
    {
      image: vegetablesImg,
      name: "Vegetables",
      scientific: "e.g. Tomato, Eggplant, Cabbage, Carrot",
      diseases: ["Leaf Spot", "Early Blight", "Late Blight", "Powdery Mildew", "Bacterial Spot"],
      count: 5,
      fact: "Vegetable crops are highly vulnerable to fungal and bacterial diseases, especially in humid environments.",
    },
    {
      image: ornamentalsImg,
      name: "Ornamentals",
      scientific: "e.g. Rose, Orchid, Hibiscus, Bougainvillea",
      diseases: ["Powdery Mildew", "Leaf Spot", "Rust", "Blight", "Bacterial Leaf Spot"],
      count: 5,
      fact: "Ornamental plants often suffer from leaf diseases due to frequent watering and close planting conditions.",
    },
    {
      image: fruitsImg,
      name: "Fruit-Bearing Plants",
      scientific: "e.g. Mango, Banana, Papaya, Citrus",
      diseases: ["Anthracnose", "Leaf Curl", "Citrus Canker", "Scab", "Powdery Mildew"],
      count: 5,
      fact: "Fruit-bearing plants are prone to diseases that affect leaves, impacting yield, which can reduce photosynthesis."
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <div style={styles.titleRow}>
          <div style={styles.titleBar} />
          <h2 style={styles.heading}>Supported Crops (Expanding)</h2>
          <div style={styles.titleBar} />
        </div>

        <p style={styles.subheading}>
          The AgriVision AI system detects plant diseases across selected crop categories using leaf images.
          You may upload any plant leaf, but detection is most accurate for the crops listed below.
        </p>

        <p style={{ ...styles.subheading, marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
          *General detection is supported, but results may vary for unsupported crops.
        </p>
      </div>

      <div style={styles.grid}>
        {plants.map((plant, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              boxShadow: activeCard === index
                ? '0 12px 40px rgba(0,0,0,0.14)'
                : '0 2px 12px rgba(0,0,0,0.08)',
              transform: activeCard === index ? 'translateY(-4px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div style={styles.imageWrapper}>
              <img src={plant.image} alt={plant.name} style={styles.image} />
              <div style={styles.imageOverlay} />

              <div style={styles.imageLabel}>
                <h3 style={styles.plantName}>{plant.name}</h3>
                <p style={styles.scientific}>{plant.scientific}</p>
              </div>

              <div style={styles.countBadge}>
                {plant.count} Common Conditions
              </div>
            </div>

            <div style={styles.cardBody}>
              <div style={styles.factBox}>
                <p style={styles.factText}>{plant.fact}</p>
              </div>

              <p style={styles.diseasesLabel}>Common Detectable Conditions</p>

              <ul style={styles.diseaseList}>
                {plant.diseases.map((disease, i) => (
                  <li key={i} style={styles.diseaseItem}>
                    <span style={styles.bullet}>•</span>
                    {disease}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: 'linear-gradient(180deg, #e8f5e9 0%, #f0f7f0 100%)',
    padding: '0px 60px 80px',
    textAlign: 'left',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  header: {
    maxWidth: '1100px',
    margin: '0 auto 48px',
    paddingTop: '20px',
    textAlign: 'center',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    marginBottom: '16px',
  },
  titleBar: {
    width: '40px',
    height: '4px',
    background: '#2d6a2d',
    borderRadius: '4px',
    flexShrink: 0,
  },
  heading: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
    fontWeight: '800',
    color: '#1a3d1a',
    margin: 0,
    letterSpacing: '-0.3px',
  },
  subheading: {
    fontSize: '1rem',
    color: '#555',
    maxWidth: '680px',
    lineHeight: '1.7',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    maxWidth: '1100px',
    margin: '0 auto 48px',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.25s ease',
    cursor: 'default',
    border: '1px solid #deeede',
  },
  imageWrapper: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(10,30,10,0.75) 0%, rgba(0,0,0,0.1) 60%)',
  },
  imageLabel: {
    position: 'absolute',
    bottom: '14px',
    left: '16px',
    zIndex: 2,
  },
  plantName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 2px',
    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
  },
  scientific: {
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.75)',
    fontStyle: 'italic',
    margin: 0,
  },
  countBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    zIndex: 2,
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.3px',
  },
  cardBody: { padding: '20px' },
  factBox: {
    background: '#f4faf4',
    border: '1px solid #c8e6c9',
    borderRadius: '6px',
    padding: '10px 14px',
    marginBottom: '16px',
  },
  factText: {
    fontSize: '0.85rem',
    color: '#444',
    lineHeight: '1.6',
    margin: 0,
  },
  diseasesLabel: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#2d6a2d',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '10px',
  },
  diseaseList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  diseaseItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.88rem',
    color: '#333',
    fontWeight: '500',
  },
  bullet: {
    color: '#2d6a2d',
    fontWeight: '900',
    fontSize: '1rem',
  },
};

export default SupportedPlants;