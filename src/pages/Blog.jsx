import { useState } from 'react';
import tomatoImg from '../assets/TOMATO LEAF Fragrance Oil Choose Your Size - Etsy.jpg';
import chiliImg from '../assets/chilly.jpg';
import eggplantImg from '../assets/African Eggplant, Nya Nya Chungu (Solanum aethiopicum) - Medium Coconut Coir Pot.jpg';

const posts = [
  {
    id: 1,
    image: tomatoImg,
    category: "Disease Management",
    date: "February 28, 2026",
    author: "Dr. Maria Santos",
    authorTitle: "Plant Pathologist, PhilRice",
    title: "How to Identify Tomato Diseases Early",
    excerpt: "Learn the telltale signs of common tomato diseases and how to catch them before they spread across your garden.",
    readTime: "5 min read",
    source: "Philippine Rice Research Institute (PhilRice) Field Manual, 2024",
    sourceUrl: "https://www.philrice.gov.ph",
    content: [
      "Early detection of tomato diseases significantly reduces crop loss. The most common diseases affecting tomato crops in Southeast Asia include Early Blight, Late Blight, and Septoria Leaf Spot.",
      "According to the Philippine Rice Research Institute (2024), farmers who identify disease symptoms within the first 7 days of onset reduce crop loss by up to 60% compared to those who delay treatment.",
      "Key indicators to monitor include: discoloration patterns on leaf surfaces, unusual spots or lesions, wilting despite adequate watering, and abnormal fruit development.",
    ],
  },
  {
    id: 2,
    image: chiliImg,
    category: "Pest Control",
    date: "February 20, 2026",
    author: "Engr. Jose Reyes",
    authorTitle: "Agricultural Extension Officer, DA-Region XI",
    title: "Protecting Chili Plants from Whiteflies",
    excerpt: "Whiteflies are the primary vector for chili leaf curl virus. Here's how to keep them away from your crops.",
    readTime: "4 min read",
    source: "Department of Agriculture – Integrated Pest Management Guide, 2023",
    sourceUrl: "https://www.da.gov.ph",
    content: [
      "Whiteflies (Bemisia tabaci) are the primary vector for Chili Leaf Curl Virus (ChiLCV), one of the most devastating diseases affecting chili production in the Philippines.",
      "The Department of Agriculture's IPM Guide (2023) recommends a combination of yellow sticky traps, neem-based insecticides, and reflective mulches as the most effective non-chemical management strategy.",
      "Farmers are advised to inspect the underside of leaves weekly, as early-stage whitefly colonies are often missed during routine field checks.",
    ],
  },
  {
    id: 3,
    image: eggplantImg,
    category: "Crop Management",
    date: "February 10, 2026",
    author: "Dr. Liza Cruz",
    authorTitle: "Senior Agronomist, Bureau of Plant Industry",
    title: "Managing Eggplant Blight in Humid Conditions",
    excerpt: "Phomopsis blight thrives in wet weather. Discover proven strategies to protect your eggplant harvest.",
    readTime: "6 min read",
    source: "Bureau of Plant Industry – Vegetable Crop Protection Manual, 2023",
    sourceUrl: "https://www.bpi.da.gov.ph",
    content: [
      "Phomopsis blight (caused by Phomopsis vexans) is particularly prevalent during the rainy season, when humidity levels exceed 80% for prolonged periods.",
      "According to the Bureau of Plant Industry (2023), the use of certified disease-free seeds combined with a 3-year crop rotation schedule reduces Phomopsis incidence by up to 75%.",
      "Field trials conducted in Davao Region showed that early morning irrigation, which allows foliage to dry before nightfall, significantly reduces fungal spore germination rates.",
    ],
  },
];

const Blog = () => {
  const [activePost, setActivePost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Disease Management', 'Pest Control', 'Crop Management'];

  const filtered = posts.filter(p =>
    activeCategory === 'All' || p.category === activeCategory
  );

  if (activePost) {
    const post = posts.find(p => p.id === activePost);
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <div style={styles.headerInner}>
            <button onClick={() => setActivePost(null)} style={styles.backBtn}>
              ← Back to Blog
            </button>
            <div style={styles.titleRow}>
              <div style={styles.titleBar} />
              <h1 style={styles.title}>{post.title}</h1>
            </div>
            <div style={styles.postMeta}>
              <span style={styles.categoryTag}>{post.category}</span>
              <span style={styles.metaDot}>·</span>
              <span style={styles.metaText}>{post.date}</span>
              <span style={styles.metaDot}>·</span>
              <span style={styles.metaText}>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div style={styles.articleBody}>
          <div style={styles.articleInner}>
            <img src={post.image} alt={post.title} style={styles.articleImage} />

            {/* Author */}
            <div style={styles.authorBox}>
              <div style={styles.authorAvatar}>
                {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p style={styles.authorName}>{post.author}</p>
                <p style={styles.authorTitle}>{post.authorTitle}</p>
              </div>
            </div>

            {/* Content */}
            {post.content.map((para, i) => (
              <p key={i} style={styles.articlePara}>{para}</p>
            ))}

            {/* Citation */}
            <div style={styles.citationBox}>
              <p style={styles.citationLabel}>Source & References</p>
              <p style={styles.citationText}>
                {post.source}.{' '}
                <a href={post.sourceUrl} target="_blank" rel="noreferrer" style={styles.citationLink}>
                  {post.sourceUrl}
                </a>
              </p>
              <p style={styles.citationDisclaimer}>
                The information in this article is based on verified agricultural research and government
                extension publications. AgriVision does not claim authorship of the referenced studies.
                For field-specific guidance, consult your local agricultural extension officer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>Agricultural Blog</h1>
          </div>
          <p style={styles.subtitle}>
            Evidence-based tips, guides, and field insights on plant disease management —
            sourced from trusted agricultural institutions and extension officers.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={styles.body}>

        {/* Filter */}
        <div style={styles.filterRow}>
          <span style={styles.filterLabel}>Browse by topic:</span>
          <div style={styles.filterGroup}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{ ...styles.filterBtn, ...(activeCategory === c ? styles.filterActive : {}) }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div style={styles.grid}>
          {filtered.map((post) => (
            <div key={post.id} style={styles.card}>
              <div style={styles.cardImageWrapper}>
                <img src={post.image} alt={post.title} style={styles.cardImage} />
                <span style={styles.cardCategory}>{post.category}</span>
              </div>
              <div style={styles.cardBody}>
                <div style={styles.cardMeta}>
                  <span style={styles.cardDate}>{post.date}</span>
                  <span style={styles.metaDot}>·</span>
                  <span style={styles.cardDate}>{post.readTime}</span>
                </div>
                <h2 style={styles.cardTitle}>{post.title}</h2>
                <p style={styles.cardExcerpt}>{post.excerpt}</p>

                {/* Author */}
                <div style={styles.cardAuthor}>
                  <div style={styles.cardAvatar}>
                    {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p style={styles.cardAuthorName}>{post.author}</p>
                    <p style={styles.cardAuthorTitle}>{post.authorTitle}</p>
                  </div>
                </div>

                <div style={styles.cardFooter}>
                  <div style={styles.sourceTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2d6a2d" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span style={styles.sourceTagText}>Cited Source</span>
                  </div>
                  <button
                    style={styles.readMoreBtn}
                    onClick={() => setActivePost(post.id)}
                  >
                    Read Article →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={styles.disclaimer}>
          <p style={styles.disclaimerText}>
            All articles published on AgriVision Blog are based on verified research from the
            Department of Agriculture, Bureau of Plant Industry, and accredited agricultural institutions.
            Content is reviewed for accuracy but should not replace professional agronomic consultation.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { minHeight: '100vh', background: '#f4f9f4' },
  header: {
    background: 'linear-gradient(135deg, #1a3d1a 0%, #2d6a2d 100%)',
    padding: '60px 60px 50px',
  },
  headerInner: { maxWidth: '1100px', margin: '0 auto' },
  backBtn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'rgba(255,255,255,0.8)',
    padding: '6px 14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    marginBottom: '20px',
    fontWeight: '500',
  },
  titleRow: {
    display: 'flex', alignItems: 'center',
    gap: '14px', marginBottom: '16px',
  },
  titleBar: {
    width: '5px', height: '42px',
    background: '#f5a623', borderRadius: '4px', flexShrink: 0,
  },
  title: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
    fontWeight: '800', color: 'white',
    margin: 0, letterSpacing: '-0.3px',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.8)',
    maxWidth: '600px', lineHeight: '1.7', margin: 0,
  },
  postMeta: {
    display: 'flex', alignItems: 'center',
    gap: '10px', flexWrap: 'wrap',
  },
  categoryTag: {
    background: 'rgba(245,166,35,0.2)',
    color: '#f5a623',
    border: '1px solid rgba(245,166,35,0.3)',
    padding: '3px 10px', borderRadius: '4px',
    fontSize: '0.75rem', fontWeight: '700',
    textTransform: 'uppercase', letterSpacing: '0.5px',
  },
  metaDot: { color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' },
  metaText: { color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' },
  body: {
    maxWidth: '1100px', margin: '0 auto',
    padding: '40px 40px 80px', boxSizing: 'border-box',
  },
  filterRow: {
    display: 'flex', alignItems: 'center',
    gap: '16px', flexWrap: 'wrap',
    background: 'white', border: '1px solid #deeede',
    borderRadius: '10px', padding: '14px 20px',
    marginBottom: '32px',
  },
  filterLabel: {
    fontSize: '0.75rem', fontWeight: '700',
    color: '#888', textTransform: 'uppercase',
    letterSpacing: '0.5px', whiteSpace: 'nowrap',
  },
  filterGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  filterBtn: {
    padding: '6px 16px', borderRadius: '6px',
    border: '1px solid #d0e8d0', background: 'white',
    cursor: 'pointer', fontSize: '0.85rem',
    color: '#555', fontWeight: '500',
  },
  filterActive: {
    background: '#2d6a2d', color: 'white',
    border: '1px solid #2d6a2d', fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px', marginBottom: '40px',
  },
  card: {
    background: 'white', borderRadius: '12px',
    overflow: 'hidden', border: '1px solid #deeede',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    display: 'flex', flexDirection: 'column',
  },
  cardImageWrapper: { position: 'relative', height: '220px', overflow: 'hidden' },
  cardImage: { width: '100%', height: '100%', objectFit: 'cover' },
  cardCategory: {
    position: 'absolute', top: '12px', left: '12px',
    background: 'rgba(26,61,26,0.85)',
    backdropFilter: 'blur(6px)',
    color: 'white', padding: '4px 10px',
    borderRadius: '4px', fontSize: '0.72rem',
    fontWeight: '700', letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  cardBody: {
    padding: '20px 22px 22px',
    display: 'flex', flexDirection: 'column', flex: 1,
  },
  cardMeta: {
    display: 'flex', alignItems: 'center',
    gap: '8px', marginBottom: '10px',
  },
  cardDate: { fontSize: '0.78rem', color: '#999' },
  cardTitle: {
    fontSize: '1.1rem', fontWeight: '800',
    color: '#1a3d1a', marginBottom: '10px',
    lineHeight: '1.4',
  },
  cardExcerpt: {
    fontSize: '0.88rem', color: '#666',
    lineHeight: '1.65', marginBottom: '16px', flex: 1,
  },
  cardAuthor: {
    display: 'flex', alignItems: 'center',
    gap: '10px', marginBottom: '16px',
    paddingTop: '14px', borderTop: '1px solid #f0f0f0',
  },
  cardAvatar: {
    width: '36px', height: '36px',
    borderRadius: '50%', background: '#e8f5e9',
    border: '1px solid #c8e6c9',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.75rem', fontWeight: '800', color: '#2d6a2d',
    flexShrink: 0,
  },
  cardAuthorName: {
    fontSize: '0.85rem', fontWeight: '700',
    color: '#333', margin: 0,
  },
  cardAuthorTitle: {
    fontSize: '0.75rem', color: '#888',
    margin: 0, marginTop: '2px',
  },
  cardFooter: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
  },
  sourceTag: {
    display: 'flex', alignItems: 'center',
    gap: '5px', background: '#f0faf0',
    border: '1px solid #c8e6c9',
    padding: '4px 10px', borderRadius: '4px',
  },
  sourceTagText: {
    fontSize: '0.72rem', fontWeight: '600',
    color: '#2d6a2d', letterSpacing: '0.3px',
  },
  readMoreBtn: {
    background: '#1a3d1a', color: 'white',
    border: 'none', padding: '8px 16px',
    borderRadius: '6px', fontSize: '0.82rem',
    fontWeight: '600', cursor: 'pointer',
    letterSpacing: '0.3px',
  },
  disclaimer: {
    background: '#fffbf0',
    border: '1px solid #f5e6b8',
    borderLeft: '4px solid #f5a623',
    borderRadius: '8px', padding: '16px 20px',
  },
  disclaimerText: {
    fontSize: '0.82rem', color: '#666',
    lineHeight: '1.6', margin: 0, fontStyle: 'italic',
  },

  // Article view
  articleBody: {
    maxWidth: '780px', margin: '0 auto',
    padding: '48px 40px 80px',
  },
  articleInner: { display: 'flex', flexDirection: 'column', gap: '24px' },
  articleImage: {
    width: '100%', borderRadius: '12px',
    objectFit: 'cover', maxHeight: '360px',
    border: '1px solid #deeede',
  },
  authorBox: {
    display: 'flex', alignItems: 'center',
    gap: '14px', background: 'white',
    border: '1px solid #deeede',
    borderRadius: '10px', padding: '16px 20px',
  },
  authorAvatar: {
    width: '48px', height: '48px',
    borderRadius: '50%', background: '#e8f5e9',
    border: '2px solid #c8e6c9',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '0.85rem', fontWeight: '800', color: '#2d6a2d',
    flexShrink: 0,
  },
  authorName: {
    fontSize: '0.95rem', fontWeight: '700',
    color: '#1a3d1a', margin: 0,
  },
  authorTitle: {
    fontSize: '0.8rem', color: '#888',
    margin: '3px 0 0',
  },
  articlePara: {
    fontSize: '0.97rem', color: '#444',
    lineHeight: '1.85', margin: 0,
    background: 'white', border: '1px solid #eee',
    borderRadius: '8px', padding: '16px 20px',
  },
  citationBox: {
    background: '#fffbf0',
    border: '1px solid #f5e6b8',
    borderLeft: '4px solid #f5a623',
    borderRadius: '8px', padding: '18px 20px',
  },
  citationLabel: {
    fontSize: '0.72rem', fontWeight: '700',
    color: '#b7770d', textTransform: 'uppercase',
    letterSpacing: '0.8px', marginBottom: '8px',
  },
  citationText: {
    fontSize: '0.85rem', color: '#555',
    lineHeight: '1.6', marginBottom: '10px',
  },
  citationLink: {
    color: '#2d6a2d', fontWeight: '600',
    textDecoration: 'underline',
  },
  citationDisclaimer: {
    fontSize: '0.8rem', color: '#888',
    lineHeight: '1.6', margin: 0,
    fontStyle: 'italic', borderTop: '1px solid #f0e0b0',
    paddingTop: '10px', marginTop: '10px',
  },
};

export default Blog;