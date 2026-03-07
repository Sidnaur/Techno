import { useState } from 'react';
import tomatoImg from '../assets/TOMATO LEAF Fragrance Oil Choose Your Size - Etsy.jpg';
import chiliImg from '../assets/chilly.jpg';
import eggplantImg from '../assets/African Eggplant, Nya Nya Chungu (Solanum aethiopicum) - Medium Coconut Coir Pot.jpg';

const SupportedPlants = () => {
  const [activeCard, setActiveCard] = useState(null);

  const plants = [
    {
      image: tomatoImg,
      name: "Tomato",
      scientific: "Solanum lycopersicum",
      diseases: ["Early Blight", "Late Blight", "Leaf Mold", "Septoria Leaf Spot"],
      count: 4,
      fact: "Tomato is the most common crop affected by fungal diseases worldwide.",
    },
    {
      image: chiliImg,
      name: "Chili Pepper",
      scientific: "Capsicum annuum",
      diseases: ["Leaf Curl Virus", "Anthracnose", "Bacterial Wilt", "Cercospora Leaf Spot"],
      count: 4,
      fact: "Chili plants are highly susceptible to virus transmission by whiteflies.",
    },
    {
      image: eggplantImg,
      name: "Eggplant",
      scientific: "Solanum melongena",
      diseases: ["Phomopsis Blight", "Verticillium Wilt", "Flea Beetle Damage"],
      count: 3,
      fact: "Eggplant diseases often spread through contaminated soil and water.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <div style={styles.titleRow}>
          <div style={styles.titleBar} />
          <h2 style={styles.heading}>Supported Crops</h2>
          <div style={styles.titleBar} />
        </div>
        <p style={styles.subheading}>
          The AgriVision AI system is currently trained to identify diseases in the following crop varieties.
          Early and accurate detection helps farmers take timely action to protect their harvest.
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
              <div style={styles.countBadge}>{plant.count} Detectable Diseases</div>
            </div>

            <div style={styles.cardBody}>
              <div style={styles.factBox}>
                <p style={styles.factText}>{plant.fact}</p>
              </div>
              <p style={styles.diseasesLabel}>Identified Disease Targets</p>
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

      <div style={styles.statsRow}>
        {[
          { value: '11', label: 'Total Disease Targets' },
          { value: '3', label: 'Crop Varieties' },
          { value: '98%', label: 'Detection Accuracy' },
        ].map((stat, i) => (
          <div key={i} style={{
            ...styles.statItem,
            borderRight: i < 2 ? '1px solid #d0e8d0' : 'none',
          }}>
            <span style={styles.statValue}>{stat.value}</span>
            <span style={styles.statLabel}>{stat.label}</span>
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
  statsRow: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    border: '1px solid #d0e8d0',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  statItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 16px',
    gap: '4px',
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#1a3d1a',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.72rem',
    color: '#777',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
    textAlign: 'center',
  },
};

export default SupportedPlants;