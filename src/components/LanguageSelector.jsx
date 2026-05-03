import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en',  label: 'English',          flag: '🇺🇸' },
  { code: 'ceb', label: 'Bisaya (Cebuano)', flag: '🇵🇭' },
  { code: 'tl',  label: 'Tagalog',          flag: '🇵🇭' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      {/* Portal-style: rendered outside overflow:hidden parents */}
      <style>{`
        .ls-wrapper {
          position: fixed !important;
          bottom: 28px !important;
          right: 28px !important;
          z-index: 999999 !important;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          transform: translateZ(0);
          will-change: transform;
        }
        .ls-fab {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #2d6a2d;
          border: none;
          border-radius: 50px;
          padding: 11px 20px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(45,106,45,0.5);
          color: white;
          transition: background 0.2s, transform 0.2s;
        }
        .ls-fab:hover { background: #1f4d1f; transform: scale(1.05); }
        .ls-fab-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: white;
        }
        .ls-dropdown {
          background: white;
          border: 1px solid #d0e8d0;
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
          overflow: hidden;
          min-width: 220px;
          animation: lsSlideUp 0.2s ease;
        }
        @keyframes lsSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ls-header {
          font-size: 10px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 12px 16px 8px;
          margin: 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .ls-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 16px;
          border: none;
          border-bottom: 1px solid #f5f5f5;
          cursor: pointer;
          font-size: 13px;
          text-align: left;
          transition: background 0.15s;
        }
        .ls-option:last-child { border-bottom: none; }
        .ls-option:hover { background: #f4faf5 !important; }
        .ls-flag { font-size: 18px; }
        .ls-name { flex: 1; }
        .ls-check { color: #2d6a2d; font-size: 15px; margin-left: auto; }
      `}</style>

      <div ref={ref} className="ls-wrapper">
        {open && (
          <div className="ls-dropdown">
            <p className="ls-header">🌐 Select Language</p>
            {languages.map(lang => (
              <button
                key={lang.code}
                className="ls-option"
                onClick={() => { setLanguage(lang.code); setOpen(false); }}
                style={{
                  background: language === lang.code ? '#e8f5e9' : 'white',
                  fontWeight: language === lang.code ? '700' : '500',
                  color: language === lang.code ? '#1a3d1a' : '#333',
                }}
              >
                <span className="ls-flag">{lang.flag}</span>
                <span className="ls-name">{lang.label}</span>
                {language === lang.code && <span className="ls-check">✓</span>}
              </button>
            ))}
          </div>
        )}

        <button
          className="ls-fab"
          onClick={() => setOpen(prev => !prev)}
          title="Change Language"
          aria-label="Change Language"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span className="ls-fab-label">
            {current.code === 'en' ? 'English' : current.code === 'ceb' ? 'Bisaya' : 'Tagalog'}
          </span>
        </button>
      </div>
    </>
  );
};

export default LanguageSelector;