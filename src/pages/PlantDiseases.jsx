import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import vegetablesImg from '../assets/Vegetables.jpg';
import ornamentalsImg from '../assets/Ornamentals.jpg';
import fruitsImg from '../assets/Fruits.jpg';

const diseases = [
  // VEGETABLES
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Leaf Spot", descriptionKey: "plants_d_leaf_spot_desc", symptomsKey: "plants_d_leaf_spot_symptoms", treatmentKey: "plants_d_leaf_spot_treatment" },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Early Blight", descriptionKey: "plants_d_early_blight_desc", symptomsKey: "plants_d_early_blight_symptoms", treatmentKey: "plants_d_early_blight_treatment" },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Late Blight", descriptionKey: "plants_d_late_blight_desc", symptomsKey: "plants_d_late_blight_symptoms", treatmentKey: "plants_d_late_blight_treatment" },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Powdery Mildew", descriptionKey: "plants_d_powdery_mildew_desc", symptomsKey: "plants_d_powdery_mildew_symptoms", treatmentKey: "plants_d_powdery_mildew_treatment" },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Downy Mildew", descriptionKey: "plants_d_downy_mildew_desc", symptomsKey: "plants_d_downy_mildew_symptoms", treatmentKey: "plants_d_downy_mildew_treatment" },
  { plant: "Vegetables", image: vegetablesImg, category: "Vegetables", name: "Bacterial Spot", descriptionKey: "plants_d_bacterial_spot_desc", symptomsKey: "plants_d_bacterial_spot_symptoms", treatmentKey: "plants_d_bacterial_spot_treatment" },

  // ORNAMENTALS
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Powdery Mildew", descriptionKey: "plants_d_powdery_mildew_desc_orn", symptomsKey: "plants_d_powdery_mildew_symptoms_orn", treatmentKey: "plants_d_powdery_mildew_treatment_orn" },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Leaf Spot", descriptionKey: "plants_d_leaf_spot_desc_orn", symptomsKey: "plants_d_leaf_spot_symptoms_orn", treatmentKey: "plants_d_leaf_spot_treatment_orn" },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Rust", descriptionKey: "plants_d_rust_desc", symptomsKey: "plants_d_rust_symptoms", treatmentKey: "plants_d_rust_treatment" },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Blight", descriptionKey: "plants_d_blight_desc", symptomsKey: "plants_d_blight_symptoms", treatmentKey: "plants_d_blight_treatment" },
  { plant: "Ornamentals", image: ornamentalsImg, category: "Ornamentals", name: "Bacterial Leaf Spot", descriptionKey: "plants_d_bacterial_leaf_spot_desc", symptomsKey: "plants_d_bacterial_leaf_spot_symptoms", treatmentKey: "plants_d_bacterial_leaf_spot_treatment" },

  // FRUIT-BEARING PLANTS
  { plant: "Fruit-Bearing Plants", image: fruitsImg, category: "Fruit-Bearing Plants", name: "Anthracnose", descriptionKey: "plants_d_anthracnose_desc", symptomsKey: "plants_d_anthracnose_symptoms", treatmentKey: "plants_d_anthracnose_treatment" },
  { plant: "Fruit-Bearing Plants", image: fruitsImg, category: "Fruit-Bearing Plants", name: "Leaf Curl", descriptionKey: "plants_d_leaf_curl_desc", symptomsKey: "plants_d_leaf_curl_symptoms", treatmentKey: "plants_d_leaf_curl_treatment" },
  { plant: "Fruit-Bearing Plants", image: fruitsImg, category: "Fruit-Bearing Plants", name: "Citrus Canker", descriptionKey: "plants_d_citrus_canker_desc", symptomsKey: "plants_d_citrus_canker_symptoms", treatmentKey: "plants_d_citrus_canker_treatment" },
  { plant: "Fruit-Bearing Plants", image: fruitsImg, category: "Fruit-Bearing Plants", name: "Scab", descriptionKey: "plants_d_scab_desc", symptomsKey: "plants_d_scab_symptoms", treatmentKey: "plants_d_scab_treatment" },
  { plant: "Fruit-Bearing Plants", image: fruitsImg, category: "Fruit-Bearing Plants", name: "Powdery Mildew", descriptionKey: "plants_d_powdery_mildew_desc_fruit", symptomsKey: "plants_d_powdery_mildew_symptoms_fruit", treatmentKey: "plants_d_powdery_mildew_treatment_fruit" },
  { plant: "Fruit-Bearing Plants", image: fruitsImg, category: "Fruit-Bearing Plants", name: "Leaf Spot", descriptionKey: "plants_d_leaf_spot_desc_fruit", symptomsKey: "plants_d_leaf_spot_symptoms_fruit", treatmentKey: "plants_d_leaf_spot_treatment_fruit" },
];

const PlantDiseases = () => {
  const { t } = useLanguage();
  const [filterCategory, setFilterCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filtered = diseases.filter((d) => {
    const matchCategory = filterCategory === "All" || d.category === filterCategory;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const categories = [
    "All", 
    { value: "Vegetables", displayKey: "plants_cat_vegetables_display" }, 
    { value: "Ornamentals", displayKey: "plants_cat_ornamentals_display" }, 
    { value: "Fruit-Bearing Plants", displayKey: "plants_cat_fruits_display" }
  ];

  const categoryColors = {
    Vegetables: { bg: '#e8f5e9', border: '#a5d6a7', label: '#2e7d32' },
    Ornamentals: { bg: '#f3e5f5', border: '#ce93d8', label: '#7b1fa2' },
    "Fruit-Bearing Plants": { bg: '#fff3e0', border: '#ffcc80', label: '#ef6c00' },
  };

  const categoryImages = {
    Vegetables: vegetablesImg,
    Ornamentals: ornamentalsImg,
    "Fruit-Bearing Plants": fruitsImg,
  };

  const getCategoryDisplay = (categoryValue) => {
    if (categoryValue === "Vegetables") return t("plants_cat_vegetables_display");
    if (categoryValue === "Ornamentals") return t("plants_cat_ornamentals_display");
    if (categoryValue === "Fruit-Bearing Plants") return t("plants_cat_fruits_display");
    return categoryValue;
  };

  return (
    <div>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>{t("plants_title")}</h1>
          </div>
          <p style={styles.subtitle}>
            {t("plants_subtitle")}
          </p>
          <div style={styles.headerStats}>
            {[
              { value: diseases.length.toString(), label: t('plants_header_stat_diseases') },
              { value: categories.length - 1, label: t('plants_header_stat_categories') },
              { value: '100%', label: t('plants_header_stat_treatment') },
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
            <span style={styles.filterLabel}>{t("plants_filter_label")}</span>
            {categories.map((cat) => (
              <button
                key={typeof cat === 'object' ? cat.value : cat}
                onClick={() => setFilterCategory(typeof cat === 'object' ? cat.value : cat)}
                style={{ ...styles.filterBtn, ...(filterCategory === (typeof cat === 'object' ? cat.value : cat) ? styles.filterActive : {}) }}
              >
                {typeof cat === 'object' ? t(cat.displayKey) : t("plants_filter_all")}
              </button>
            ))}
          </div>
          <div style={styles.searchBox}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder={t("plants_search_placeholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>

        {/* Result count */}
        <p style={styles.resultCount}>
          {t("plants_result_count_prefix")} <strong>{filtered.length}</strong> {t("plants_result_count_middle")} {diseases.length} {t("plants_disease_entries")}
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
                    <img src={categoryImages[disease.category]} alt={getCategoryDisplay(disease.category)} style={styles.plantImg} />
                    <div>
                      <span style={{ ...styles.categoryTag, background: colors.bg, color: colors.label, border: `1px solid ${colors.border}` }}>
                        {getCategoryDisplay(disease.category)}
                      </span>
                      <h3 style={styles.diseaseName}>{disease.name}</h3>
                    </div>
                  </div>
                  <button
                    style={styles.expandBtn}
                    onClick={() => setExpanded(isOpen ? null : index)}
                  >
                    {isOpen ? t("plants_expand_less") : t("plants_expand_more")}
                  </button>
                </div>

                {/* Description always visible */}
                <div style={styles.cardBody}>
                  <p style={styles.description}>{t(disease.descriptionKey)}</p>
                </div>

                {/* Expandable details */}
                {isOpen && (
                  <div style={styles.expandedBody}>
                    <div style={styles.infoRow}>
                      <div style={{ ...styles.infoBox, borderLeft: '3px solid #e53935' }}>
                        <p style={styles.infoBoxLabel}>{t("plants_info_symptoms")}</p>
                        <p style={styles.infoBoxText}>{t(disease.symptomsKey)}</p>
                      </div>
                      <div style={{ ...styles.infoBox, borderLeft: '3px solid #2d6a2d' }}>
                        <p style={styles.infoBoxLabel}>{t("plants_info_treatment")}</p>
                        <p style={styles.infoBoxText}>{t(disease.treatmentKey)}</p>
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
            <p style={styles.emptyText}>{t("plants_empty_results")}</p>
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