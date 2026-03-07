import { useState } from 'react';
import tomatoImg from '../assets/TOMATO LEAF Fragrance Oil Choose Your Size - Etsy.jpg';
import chiliImg from '../assets/chilly.jpg';
import eggplantImg from '../assets/African Eggplant, Nya Nya Chungu (Solanum aethiopicum) - Medium Coconut Coir Pot.jpg';

const diseases = [
  { plant: "Tomato", image: tomatoImg, name: "Early Blight", description: "Caused by Alternaria solani fungus, common in warm humid environments.", symptoms: "Dark concentric rings on lower leaves, yellowing, premature leaf drop.", treatment: "Apply copper fungicide, remove infected leaves, practice crop rotation." },
  { plant: "Tomato", image: tomatoImg, name: "Late Blight", description: "Caused by Phytophthora infestans, the same pathogen behind the Irish Potato Famine.", symptoms: "Water-soaked dark lesions on leaves and stems, white mold on underside.", treatment: "Use resistant varieties, apply mancozeb fungicide, avoid overhead watering." },
  { plant: "Tomato", image: tomatoImg, name: "Leaf Mold", description: "Caused by Passalora fulva, thrives in high humidity greenhouses.", symptoms: "Yellow patches on upper leaf surface, olive-green mold on underside.", treatment: "Improve ventilation, reduce humidity, apply fungicide sprays." },
  { plant: "Tomato", image: tomatoImg, name: "Septoria Leaf Spot", description: "Caused by Septoria lycopersici, spreads rapidly in wet conditions.", symptoms: "Small circular spots with dark borders and light centers on lower leaves.", treatment: "Remove infected leaves, apply chlorothalonil fungicide, avoid wetting foliage." },
  { plant: "Chili", image: chiliImg, name: "Leaf Curl Virus", description: "Transmitted by whiteflies, causes severe yield loss.", symptoms: "Upward curling of leaves, thickened and leathery texture, stunted growth.", treatment: "Control whiteflies, use yellow sticky traps, plant resistant varieties." },
  { plant: "Chili", image: chiliImg, name: "Anthracnose", description: "Caused by Colletotrichum species, affects ripening fruit.", symptoms: "Dark sunken lesions on fruit, concentric rings, fruit rot.", treatment: "Use disease-free seeds, apply mancozeb, harvest ripe fruit promptly." },
  { plant: "Chili", image: chiliImg, name: "Bacterial Wilt", description: "Caused by Ralstonia solanacearum, spreads through soil and water.", symptoms: "Sudden wilting of entire plant, brown discoloration inside stems.", treatment: "Use resistant varieties, avoid waterlogged soil, practice crop rotation." },
  { plant: "Chili", image: chiliImg, name: "Cercospora Leaf Spot", description: "Caused by Cercospora capsici, common in humid conditions.", symptoms: "Circular spots with white centers and dark borders, leaf drop.", treatment: "Apply copper-based fungicide, remove infected leaves, improve air circulation." },
  { plant: "Eggplant", image: eggplantImg, name: "Phomopsis Blight", description: "Caused by Phomopsis vexans, affects all plant parts.", symptoms: "Circular gray-brown spots on leaves, stem cankers, fruit rot.", treatment: "Use certified seeds, apply mancozeb, practice 3-year crop rotation." },
  { plant: "Eggplant", image: eggplantImg, name: "Verticillium Wilt", description: "Soil-borne fungus Verticillium dahliae blocks water transport.", symptoms: "Yellowing and wilting of lower leaves, one-sided symptoms, stunted growth.", treatment: "Use resistant rootstock, solarize soil, avoid over-irrigation." },
  { plant: "Eggplant", image: eggplantImg, name: "Flea Beetle Damage", description: "Caused by flea beetles chewing small holes in leaves.", symptoms: "Numerous small round holes in leaves, stunted seedlings.", treatment: "Use row covers, apply neem oil, introduce beneficial insects." },
];

const PlantDiseases = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filtered = diseases.filter((d) => {
    const matchFilter = filter === "All" || d.plant === filter;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const filters = ["All", "Tomato", "Chili", "Eggplant"];

  const plantColors = {
    Tomato: { bg: '#fff5f5', border: '#fcc', label: '#c0392b' },
    Chili: { bg: '#fffaf0', border: '#fde8b0', label: '#b7770d' },
    Eggplant: { bg: '#faf5ff', border: '#ddb8f0', label: '#6b21a8' },
  };

  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>Plant Disease Reference</h1>
          </div>
          <p style={styles.subtitle}>
            A comprehensive reference guide for identifying and managing common diseases
            affecting tomato, chili pepper, and eggplant crops.
          </p>
          <div style={styles.headerStats}>
            {[
              { value: '11', label: 'Disease Entries' },
              { value: '3', label: 'Crop Varieties' },
              { value: '100%', label: 'Treatment Guidance' },
            ].map((s, i) => (
              <div key={i} style={styles.headerStat}>
                <span style={styles.headerStatValue}>{s.value}</span>
                <span style={styles.headerStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page body */}
      <div style={styles.page}>

        {/* Controls */}
        <div style={styles.controls}>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Filter by crop:</span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{ ...styles.filterBtn, ...(filter === f ? styles.filterActive : {}) }}
              >
                {f}
              </button>
            ))}
          </div>
          <div style={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search disease name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        {/* Result count */}
        <p style={styles.resultCount}>
          Showing <strong>{filtered.length}</strong> of {diseases.length} disease entries
        </p>

        {/* Grid */}
        <div style={styles.grid}>
          {filtered.map((disease, index) => {
            const colors = plantColors[disease.plant];
            const isOpen = expanded === index;
            return (
              <div key={index} style={{ ...styles.card, borderTop: `3px solid ${colors.label}` }}>

                {/* Card Header */}
                <div style={styles.cardTop}>
                  <div style={styles.cardTopLeft}>
                    <img src={disease.image} alt={disease.plant} style={styles.plantImg} />
                    <div>
                      <span style={{ ...styles.plantTag, background: colors.bg, color: colors.label, border: `1px solid ${colors.border}` }}>
                        {disease.plant}
                      </span>
                      <h3 style={styles.diseaseName}>{disease.name}</h3>
                    </div>
                  </div>
                  <button
                    style={styles.expandBtn}
                    onClick={() => setExpanded(isOpen ? null : index)}
                  >
                    {isOpen ? '▲ Less' : '▼ Details'}
                  </button>
                </div>

                {/* Description always visible */}
                <div style={styles.cardBody}>
                  <p style={styles.description}>{disease.description}</p>
                </div>

                {/* Expandable details */}
                {isOpen && (
                  <div style={styles.expandedBody}>
                    <div style={styles.infoRow}>
                      <div style={{ ...styles.infoBox, borderLeft: '3px solid #e53935' }}>
                        <p style={styles.infoBoxLabel}>Symptoms</p>
                        <p style={styles.infoBoxText}>{disease.symptoms}</p>
                      </div>
                      <div style={{ ...styles.infoBox, borderLeft: '3px solid #2d6a2d' }}>
                        <p style={styles.infoBoxLabel}>Recommended Treatment</p>
                        <p style={styles.infoBoxText}>{disease.treatment}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={styles.empty}>
            <p style={styles.emptyText}>No diseases found matching your search.</p>
          </div>
        )}
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
    maxWidth: '600px',
    lineHeight: '1.7',
    margin: '0 0 32px',
  },
  headerStats: {
    display: 'flex',
    gap: '32px',
  },
  headerStat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  headerStatValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#f5a623',
    lineHeight: 1,
  },
  headerStatLabel: {
    fontSize: '0.75rem',
    color: 'rgba(255,255,255,0.65)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontWeight: '600',
  },
  page: {
    background: '#f4f9f4',
    minHeight: '80vh',
    padding: '40px 60px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '16px',
    background: 'white',
    border: '1px solid #deeede',
    borderRadius: '10px',
    padding: '16px 20px',
  },
  filterLabel: {
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  filterGroup: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    alignItems: 'center',
    flex: 1,
  },
  filterBtn: {
    padding: '7px 18px',
    borderRadius: '6px',
    border: '1px solid #d0e8d0',
    background: 'white',
    cursor: 'pointer',
    fontSize: '0.88rem',
    color: '#444',
    fontWeight: '500',
    transition: 'all 0.2s',
  },
  filterActive: {
    background: '#2d6a2d',
    color: 'white',
    border: '1px solid #2d6a2d',
    fontWeight: '600',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: '#f8fdf8',
    border: '1px solid #d0e8d0',
    borderRadius: '6px',
    padding: '8px 16px',
    width: '260px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    fontSize: '0.9rem',
    width: '100%',
    background: 'transparent',
    color: '#333',
  },
  resultCount: {
    fontSize: '0.85rem',
    color: '#777',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
    gap: '16px',
  },
  card: {
    background: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #deeede',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.2s',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid #f0f0f0',
    background: '#fafdf a',
  },
  cardTopLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  plantImg: {
    width: '52px',
    height: '52px',
    borderRadius: '8px',
    objectFit: 'cover',
    border: '1px solid #e0e0e0',
    flexShrink: 0,
  },
  plantTag: {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '5px',
  },
  diseaseName: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#1a3d1a',
    margin: 0,
  },
  expandBtn: {
    background: '#f4f9f4',
    border: '1px solid #c8e6c9',
    color: '#2d6a2d',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: '600',
    cursor: 'pointer',
    flexShrink: 0,
    letterSpacing: '0.3px',
  },
  cardBody: {
    padding: '14px 20px',
  },
  description: {
    fontSize: '0.88rem',
    color: '#555',
    lineHeight: '1.6',
    margin: 0,
  },
  expandedBody: {
    padding: '0 20px 16px',
    borderTop: '1px solid #f0f0f0',
  },
  infoRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '14px',
  },
  infoBox: {
    background: '#f8fdf8',
    borderRadius: '6px',
    padding: '12px 14px',
  },
  infoBoxLabel: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#444',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  },
  infoBoxText: {
    fontSize: '0.85rem',
    color: '#444',
    lineHeight: '1.6',
    margin: 0,
  },
  empty: {
    textAlign: 'center',
    padding: '60px',
  },
  emptyText: {
    fontSize: '1rem',
    color: '#888',
  },
};

export default PlantDiseases;