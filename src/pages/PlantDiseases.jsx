import { useState } from 'react';
import vegetablesImg from '../assets/Vegetables.jpg';
import ornamentalsImg from '../assets/Ornamentals.jpg';
import fruitsImg from '../assets/Fruits.jpg';

const diseases = [
  // VEGETABLES
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Leaf Spot", description: "A fungus that attacks leaves, causing spots that can kill the leaf.", symptoms: "Small brown or black circles on leaves. Often have yellow edges. Spots can grow together and make leaves die.", treatment: "Spray copper or chlorothalonil fungicide. Pick off and throw away bad leaves. Give plants enough space for air flow. Water soil only, not leaves. Change where you plant each year." },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Early Blight", description: "A fungus that starts on lower leaves and moves up the plant in warm, wet weather.", symptoms: "Dark rings like a bullseye on lower leaves. Yellow around the spots. Leaves fall off early. Dark spots on stem near soil.", treatment: "Spray fungicide at first sign. Remove infected lower leaves. Put mulch to stop soil from splashing. Change planting spot every 2-3 years. Use resistant types if available." },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Late Blight", description: "A very dangerous fungus that kills plants fast. Same one that caused Irish Potato Famine.", symptoms: "Wet-looking dark spots on leaves and stems. White fuzzy mold on leaf underside when humid. Plant dies quickly. Dark spots on fruits.", treatment: "Spray fungicide before disease appears. Remove and destroy infected plants right away. Don't water from above. Use resistant types. Use strong fungicides for active infection." },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Powdery Mildew", description: "A white powder-like fungus that grows on leaves in dry conditions.", symptoms: "White powder on top of leaves. Leaves turn yellow, curl up, and dry out. Less fruit grows.", treatment: "Spray sulfur or potassium bicarbonate. Use neem oil for organic option. Improve air flow. Don't use too much nitrogen fertilizer. Use strong fungicides for bad cases." },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Downy Mildew", description: "A fungus that loves wet weather and causes yellow spots and fuzzy growth.", symptoms: "Yellow or pale green spots on top of leaves. Purple-gray fuzzy growth underneath. Leaves curl and die. Leaves fall off fast in wet weather.", treatment: "Spray phosphorous acid fungicide. Remove infected leaves. Improve drainage and air flow. Don't water in evening. Use resistant types. Spray copper to prevent." },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Bacterial Spot", description: "Bacteria that cause spots on leaves and fruit, spreading fast in wet conditions.", symptoms: "Small wet spots turn dark brown to black. Raised rough spots on fruit. Yellow rings around leaf spots. Leaves drop in bad cases.", treatment: "Spray copper with mancozeb. Use clean seeds and seedlings. Don't water from above. Clean up plant waste after harvest. Change planting spot every 2-3 years." },

  // ORNAMENTALS
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Powdery Mildew", description: "White powder-like fungus that covers leaves and flowers in dry weather.", symptoms: "White or gray powder on leaves, stems, and flowers. Plant grows slow. New leaves look weird. Leaves drop early. Plant looks weak.", treatment: "Spray potassium bicarbonate or sulfur. Use neem oil or horticultural oil. Give plants enough space for air flow. Don't water from above. Remove and destroy badly infected parts." },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Leaf Spot", description: "Fungus that makes round or odd-shaped spots on leaves.", symptoms: "Round or odd-shaped spots that are brown, black, or tan. Spots may have dark edges or yellow rings. Spots grow together causing big dead areas.", treatment: "Spray chlorothalonil or copper. Remove infected leaves from plant and ground. Water at base to keep leaves dry. Thin plants for better air flow. Spray protective fungicides to prevent." },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Rust", description: "Orange-brown powder-like fungus that grows under leaves.", symptoms: "Small powdery spots under leaves that are orange-brown or rust color. Yellow spots on top of leaves. Lots of leaf drop. Plant can't make food well.", treatment: "Spray myclobutanil fungicide. Remove and destroy infected leaves. Don't water from above. Improve air flow. Use sulfur dust for mild cases." },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Blight", description: "Gray mold fungus that causes leaves and stems to rot and die fast.", symptoms: "Leaves, stems, and flowers turn brown and die fast. Gray-brown fuzzy mold when humid. Wet-looking spots. Branches die back.", treatment: "Spray iprodione fungicide. Remove dead and infected parts. Lower humidity and improve air flow. Don't hurt plants. Use copper products to prevent." },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Bacterial Leaf Spot", description: "Bacteria that cause small wet spots that turn into black spots with yellow edges.", symptoms: "Small wet spots turn brown or black with yellow rings. Spots may have corners (blocked by veins). Leaves drop. Stems get cankers.", treatment: "Spray copper with mancozeb. Remove infected leaves. Don't water from above. Use clean seeds and plants. Change planting spot every 2 years. Destroy very infected plants." },

  // FRUITING PLANTS
  { plant: "Fruiting Plants", image: fruitsImg, category: "Fruiting Plants", name: "Anthracnose", description: "Fungus that causes sunken spots on fruits, making them rot.", symptoms: "Dark sunken round spots on fruits. Pink-orange spore masses in spots. Fruit rots. Leaves drop in bad cases. Stems get spots.", treatment: "Spray mancozeb fungicide. Remove and destroy infected fruits. Change planting spot every 3 years. Use clean seeds. Spray copper to prevent. Pick fruits when ripe." },
  { plant: "Fruiting Plants", image: fruitsImg, category: "Fruiting Plants", name: "Leaf Curl", description: "Virus spread by tiny white insects that makes leaves curl and stop growing.", symptoms: "Leaves curl up or down. Leaves get thick and veins turn yellow. Plant stays small. Less fruit grows. Yellow mosaic patterns.", treatment: "Control whiteflies with yellow sticky traps and neem oil. Remove infected plants to stop spread. Use reflective mulch. Spray insecticidal soap. Plant resistant types. Remove weeds." },
  { plant: "Fruiting Plants", image: fruitsImg, category: "Fruiting Plants", name: "Citrus Canker", description: "Bacteria that cause raised corky bumps on leaves, stems, and fruits.", symptoms: "Raised corky bumps on leaves, stems, and fruits. Bumps have wet-looking edges and yellow rings. Leaves and fruit drop early. Twigs die back.", treatment: "Spray copper with copper hydroxide. Cut off and destroy infected branches. Protect plants from wind and rain splash. Don't work with wet plants. Use resistant types when available." },
  { plant: "Fruiting Plants", image: fruitsImg, category: "Fruiting Plants", name: "Scab", description: "Fungus that causes rough, corky patches on fruits and leaves.", symptoms: "Raised corky rough patches on fruits and leaves. Olive-green to dark brown scabby spots. Fruit grows weird shape. Leaf spots with fuzzy edges.", treatment: "Spray myclobutanil fungicide. Improve air flow. Don't water from above. Remove fallen leaves and fruits. Change planting spot. Spray protective fungicides when fruit is growing." },
  { plant: "Fruiting Plants", image: fruitsImg, category: "Fruiting Plants", name: "Powdery Mildew", description: "White powder fungus that covers leaves and young fruits.", symptoms: "White powder on leaves, stems, and young fruits. Leaves turn yellow and drop early. Fruit quality and size go down. Plant grows slow.", treatment: "Spray sulfur or potassium bicarbonate. Use horticultural oils. Improve air flow. Remove infected plant parts. Use strong fungicides for bad cases." },
  { plant: "Fruiting Plants", image: fruitsImg, category: "Fruiting Plants", name: "Leaf Spot", description: "Fungus that causes brown or black spots on leaves, making them fall off.", symptoms: "Round or odd-shaped spots that are brown to black. Some have rings like a target. Yellow rings around spots. Leaves turn brown and drop.", treatment: "Spray chlorothalonil or copper. Remove and destroy infected leaves. Water at base to keep leaves dry. Give plants enough space. Change planting spot every 2 years." },
];

const PlantDiseases = () => {
  const [filterCategory, setFilterCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filtered = diseases.filter((d) => {
    const matchCategory = filterCategory === "All" || d.category === filterCategory;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = ["All", "Vegetables", "Ornamentals", "Fruiting Plants"];

  const categoryColors = {
    Vegetables: { bg: '#e8f5e9', border: '#a5d6a7', label: '#2e7d32' },
    Ornamentals: { bg: '#f3e5f5', border: '#ce93d8', label: '#7b1fa2' },
    "Fruiting Plants": { bg: '#fff3e0', border: '#ffcc80', label: '#ef6c00' },
  };

  const categoryImages = {
    Vegetables: vegetablesImg,
    Ornamentals: ornamentalsImg,
    "Fruiting Plants": fruitsImg,
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
            A simple guide to help you spot and treat common plant diseases
          </p>
          <div style={styles.headerStats}>
            {[
              { value: diseases.length.toString(), label: 'Disease Entries' },
              { value: categories.length - 1, label: 'Plant Categories' },
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
            <span style={styles.filterLabel}>Filter by category:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                style={{ ...styles.filterBtn, ...(filterCategory === cat ? styles.filterActive : {}) }}
              >
                {cat}
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
            const colors = categoryColors[disease.category];
            const isOpen = expanded === index;
            return (
              <div key={index} style={{ ...styles.card, borderTop: `3px solid ${colors.label}` }}>

                {/* Card Header */}
                <div style={styles.cardTop}>
                  <div style={styles.cardTopLeft}>
                    <img src={categoryImages[disease.category]} alt={disease.category} style={styles.plantImg} />
                    <div>
                      <span style={{ ...styles.categoryTag, background: colors.bg, color: colors.label, border: `1px solid ${colors.border}` }}>
                        {disease.category}
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
                        <p style={styles.infoBoxLabel}>What you'll see:</p>
                        <p style={styles.infoBoxText}>{disease.symptoms}</p>
                      </div>
                      <div style={{ ...styles.infoBox, borderLeft: '3px solid #2d6a2d' }}>
                        <p style={styles.infoBoxLabel}>What to do:</p>
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
    background: '#fafdfa',
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
  categoryTag: {
    display: 'inline-block',
    fontSize: '0.65rem',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '4px',
  },
  diseaseName: {
    fontSize: '1.2rem',
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
    fontSize: '0.9rem',
    color: '#555',
    lineHeight: '1.5',
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