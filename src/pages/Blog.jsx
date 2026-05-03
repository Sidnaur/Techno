import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import tomatoImg from '../assets/TOMATO LEAF Fragrance Oil Choose Your Size - Etsy.jpg';
import chiliImg from '../assets/chilly.jpg';
import eggplantImg from '../assets/African Eggplant, Nya Nya Chungu (Solanum aethiopicum) - Medium Coconut Coir Pot.jpg';

const posts = [
  {
    id: 1,
    image: tomatoImg,
    category: "Disease Management",
    date: "April 15, 2026",
    author: "Dr. Zhijuan Tang",
    authorTitle: "Plant Cell Journal",
    title: "How Plants Fight Back: Understanding Disease Resistance and Tolerance",
    excerpt: "Plants have two powerful strategies to survive diseases—resistance and tolerance. Learn how both work to keep your crops healthy.",
    readTime: "6 min read",
    source: "Defense strategies for plant health: Disease resistance and tolerance – The Plant Cell, Oxford Academic (Scopus-indexed), 2025",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/40721289/",
    content: [
      "When pathogens attack, plants don't just give up. They have evolved sophisticated defense strategies to survive. Scientists have identified two main approaches: resistance and tolerance. Both are essential for keeping crops healthy, but they work in very different ways.",
      "Resistance is like a plant's immune system. It allows the plant to fight back against invading pathogens—containing them, killing them, or stopping their spread. This is the strategy most farmers are familiar with, and it's what many crop varieties are bred for.",
      "But there's another strategy that's getting more attention from researchers: tolerance. Tolerant plants stay healthy even when infected. Instead of fighting the pathogen directly, they learn to live with it without showing severe symptoms or losing much yield. This is exciting because tolerance doesn't put as much pressure on pathogens to evolve and become stronger, making it a more lasting solution for farmers.",
      "Recent studies published in The Plant Cell (2025) show that tolerance works through several clever mechanisms: clearing out harmful protein buildup, activating cellular cleanup processes, and wisely allocating resources to protect the most important parts of the plant. Understanding these natural strategies helps scientists develop better crop varieties that can withstand diseases without relying heavily on chemicals.",
    ],
  },
  {
    id: 2,
    image: chiliImg,
    category: "Sustainable Farming",
    date: "April 10, 2026",
    author: "Dr. Maria Alexandra Cucu",
    authorTitle: "Agronomy Journal",
    title: "Eco-Friendly Disease Control: Working With Nature",
    excerpt: "Discover how crop rotation, beneficial organisms, and smart water management can protect your plants without harsh chemicals.",
    readTime: "5 min read",
    source: "Utilizing Environmentally Friendly Techniques for the Sustainable Control of Plant Pathogens – Agronomy, MDPI (Scopus-indexed), 2025",
    sourceUrl: "https://www.mdpi.com/2073-4395/15/7/1551",
    content: [
      "Controlling plant diseases doesn't always mean reaching for a chemical spray. More and more farmers are turning to environmentally friendly techniques that work with nature, not against it. These methods are better for the soil, safer for beneficial insects, and often more affordable in the long run.",
      "According to a comprehensive review published in Agronomy journal (2025), some of the most effective eco-friendly strategies include: crop rotation (changing what you plant in each field every season to break disease cycles), intercropping (planting different crops together to confuse pests), and maintaining biodiversity (which encourages natural predators and improves soil health).",
      "Biological control is another powerful tool. This means introducing beneficial microorganisms—like certain bacteria and fungi—that naturally fight off plant pathogens. These helpful microbes can outcompete harmful ones, produce natural antibiotics, or even trigger the plant's own defense system. Common examples include Bacillus, Trichoderma, and Pseudomonas species, which are now available as commercial products.",
      "Simple practices like mulching, soil solarization (using clear plastic to heat the soil and kill pathogens), and careful water management can also make a big difference. Watering in the morning, for instance, gives leaves time to dry during the day, which reduces the humidity that many fungi need to grow. These techniques work together as part of Integrated Pest Management (IPM)—a holistic approach that uses chemical controls only as a last resort.",
    ],
  },
  {
    id: 3,
    image: eggplantImg,
    category: "Plant Science",
    date: "April 5, 2026",
    author: "Dr. Samuel W. Wilkinson",
    authorTitle: "Scopus D1 Journal",
    title: "Plant Defense Strategies: From Quick Responses to Long-Term Adaptation",
    excerpt: "Explore how plants defend themselves over different timescales—from immediate chemical reactions to genetic changes passed down to future generations.",
    readTime: "7 min read",
    source: "Surviving in a Hostile World: Plant Strategies to Resist Pests and Diseases – MTMT / Scopus D1, 2026",
    sourceUrl: "https://m2.mtmt.hu/api/publication/30904453",
    content: [
      "Plants are constantly under attack from hungry insects and disease-causing pathogens. Yet they don't just stand there and take it. A major review published in a Scopus D1-ranked journal (2026) describes the remarkable strategies plants use to survive in a hostile world—and these strategies work on timescales ranging from seconds to generations.",
      "When a pathogen attacks, plants respond within seconds. They produce reactive molecules that signal danger, strengthen cell walls to block invaders, and release compounds that directly fight off the threat. This is the plant's emergency response system, and it's happening all the time in your garden or field.",
      "On a longer timescale—hours to days—plants activate more complex defenses. They produce specific proteins and chemicals targeted at the invading pathogen. They can even send warning signals to nearby plants through underground networks or the air, preparing their neighbors for an incoming attack.",
      "Perhaps most fascinating is how plants adapt over generations. Through a process called epigenetic modification, plants can 'remember' past attacks and pass that knowledge to their offspring. This means the children of a plant that survived a disease may be better equipped to handle the same threat. Understanding these natural strategies helps researchers develop hardier crop varieties and better farming practices that work with plants' own remarkable abilities.",
    ],
  },
];

const Blog = () => {
  const { t } = useLanguage();
  const [activePost, setActivePost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Disease Management', 'Sustainable Farming', 'Plant Science'];

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
              {t('blog_back')}
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
              <p style={styles.citationLabel}>{t('blog_source_label')}</p>
              <p style={styles.citationText}>
                {post.source}.{' '}
                <a href={post.sourceUrl} target="_blank" rel="noreferrer" style={styles.citationLink}>
                  {t('blog_view_publication')}
                </a>
              </p>
              <p style={styles.citationDisclaimer}>
                {t('blog_disclaimer')}
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
            <h1 style={styles.title}>{t('blog_title')}</h1>
          </div>
          <p style={styles.subtitle}>
            {t('blog_subtitle')}
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={styles.body}>

        {/* Filter */}
        <div style={styles.filterRow}>
          <span style={styles.filterLabel}>{t('blog_filter_label')}</span>
          <div style={styles.filterGroup}>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{ ...styles.filterBtn, ...(activeCategory === c ? styles.filterActive : {}) }}
              >
                {c === 'All' ? t('blog_filter_all') : c}
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
                    <span style={styles.sourceTagText}>{t('blog_scopus_indexed')}</span>
                  </div>
                  <button
                    style={styles.readMoreBtn}
                    onClick={() => setActivePost(post.id)}
                  >
                    {t('blog_read_article')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={styles.disclaimer}>
          <p style={styles.disclaimerText}>
            {t('blog_disclaimer')}
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