import { useState } from 'react';
import api from '../api';

const DetectDisease = () => {
  const [dragOver, setDragOver] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [imageFile, setImageFile] = useState(null);  // ← added
  const [loading, setLoading] = useState(false);      // ← added
  const [result, setResult] = useState(null);         // ← added
  const [error, setError] = useState(null);           // ← added

  const handleFile = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
      setImageFile(file);   // ← added
      setResult(null);      // ← reset result on new image
      setError(null);       // ← reset error on new image
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  // ← added: sends image to backend
  const handleDetect = async () => {
    if (!imageFile) return;
    try {
      setLoading(true);
      setError(null);
      const formData = new FormData();
      formData.append('image', imageFile);
      const response = await api.post('/api/detect', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data.result);
    } catch (err) {
      console.error('Detection failed:', err);
      setError('Detection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>Plant Disease Detection</h1>
          </div>
          <p style={styles.subtitle}>
            Upload a clear photograph of an affected leaf. Our AI system will analyze the image
            and provide an accurate disease diagnosis with recommended treatment protocols.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        <div style={styles.twoCol}>

          {/* Left — Upload */}
          <div style={styles.leftCol}>
            <p style={styles.sectionLabel}>Step 1 — Upload Leaf Image</p>
            <div
              style={{
                ...styles.uploadCard,
                borderColor: dragOver ? '#2d6a2d' : image ? '#2d6a2d' : '#c8dfc8',
                background: dragOver ? '#f0faf0' : 'white',
              }}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              {image ? (
                <div style={styles.previewContainer}>
                  <img src={image} alt="Uploaded leaf" style={styles.preview} />
                  <div style={styles.previewOverlay}>
                    <div style={styles.fileInfo}>
                      <span style={styles.fileName}>{fileName}</span>
                    </div>
                    <label style={styles.reuploadBtn}>
                      Replace Image
                      <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                    </label>
                  </div>
                </div>
              ) : (
                <div style={styles.uploadInner}>
                  <div style={styles.uploadIconBox}>
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#2d6a2d" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  </div>
                  <h3 style={styles.uploadTitle}>Drag & Drop Leaf Image Here</h3>
                  <p style={styles.uploadSub}>Accepted formats: JPG, PNG · Maximum size: 10MB</p>
                  <div style={styles.divider}>
                    <span style={styles.dividerLine} />
                    <span style={styles.dividerText}>or</span>
                    <span style={styles.dividerLine} />
                  </div>
                  <label style={styles.chooseBtn}>
                    Browse Files
                    <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                  </label>
                </div>
              )}
            </div>

            {/* ← updated: calls handleDetect, shows loading state */}
            {image && (
              <button
                style={{
                  ...styles.analyzeBtn,
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
                onClick={handleDetect}
                disabled={loading}
              >
                {loading ? 'Analyzing...' : 'Run Disease Analysis'}
              </button>
            )}

            {/* ← added: error message */}
            {error && (
              <div style={styles.errorBox}>
                <p style={styles.errorText}>{error}</p>
              </div>
            )}

            {/* ← added: result display */}
            {result && (
              <div style={styles.resultBox}>
                <p style={styles.resultLabel}>Detection Result</p>
                <div style={styles.resultRow}>
                  <span style={styles.resultKey}>Disease</span>
                  <span style={styles.resultValue}>{result.disease_name || result.disease || 'N/A'}</span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultKey}>Confidence</span>
                  <span style={styles.resultBadge}>{result.confidence_level || result.confidence || 'N/A'}</span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultKey}>Symptoms</span>
                  <span style={styles.resultValue}>{result.symptoms_observed || result.symptoms || 'N/A'}</span>
                </div>
                <div style={styles.resultDivider} />
                <p style={styles.resultKey}>Recommended Treatment</p>
                <p style={styles.resultTreatment}>{result.recommended_treatment || result.treatment || 'N/A'}</p>
                <p style={styles.resultKey}>Preventive Measures</p>
                <p style={styles.resultTreatment}>{result.preventive_measures || result.prevention || 'N/A'}</p>
              </div>
            )}
          </div>

          {/* Right — Guidelines */}
          <div style={styles.rightCol}>
            <p style={styles.sectionLabel}>Photography Guidelines</p>
            <div style={styles.guideList}>
              {[
                { num: '01', title: 'Use Proper Lighting', text: 'Photograph the leaf under natural daylight or bright indoor lighting for clear visibility.' },
                { num: '02', title: 'Focus on Affected Area', text: 'Ensure the diseased portion of the leaf is sharp and centered in the frame.' },
                { num: '03', title: 'Avoid Obstructions', text: 'Remove shadows, blurring, or any objects that may cover the leaf surface.' },
                { num: '04', title: 'Single Leaf Per Image', text: 'Capture one leaf at a time to improve detection accuracy and result clarity.' },
              ].map((guide, i) => (
                <div key={i} style={styles.guideItem}>
                  <div style={styles.guideLeft}>
                    <span style={styles.guideNum}>{guide.num}</span>
                  </div>
                  <div>
                    <p style={styles.guideTitle}>{guide.title}</p>
                    <p style={styles.guideText}>{guide.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div style={styles.noteBox}>
              <p style={styles.noteText}>
                <strong>Advisory:</strong> This tool is intended to assist farmers in early disease identification.
                For severe or uncertain cases, consult a licensed agricultural extension officer or agronomist.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f4f9f4',
    paddingBottom: '80px',
  },
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
    maxWidth: '620px',
    lineHeight: '1.7',
    margin: 0,
  },
  content: {
    maxWidth: '1100px',
    margin: '40px auto 0',
    padding: '0 40px',
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr',
    gap: '40px',
    alignItems: 'start',
  },
  leftCol: { display: 'flex', flexDirection: 'column', gap: '16px' },
  rightCol: { display: 'flex', flexDirection: 'column', gap: '16px' },
  sectionLabel: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#2d6a2d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    margin: '0 0 8px',
  },
  uploadCard: {
    background: 'white',
    borderRadius: '12px',
    border: '2px dashed',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    minHeight: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadInner: {
    textAlign: 'center',
    padding: '60px 40px',
    width: '100%',
  },
  uploadIconBox: {
    width: '100px',
    height: '100px',
    background: '#f0faf0',
    border: '1px solid #c8e6c9',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  uploadTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1a3d1a',
    marginBottom: '10px',
  },
  uploadSub: {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '28px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '28px',
    maxWidth: '300px',
    margin: '0 auto 28px',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    background: '#e0e0e0',
    display: 'block',
  },
  dividerText: {
    color: '#aaa',
    fontSize: '0.85rem',
  },
  chooseBtn: {
    display: 'inline-block',
    background: '#2d6a2d',
    color: 'white',
    padding: '14px 48px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    letterSpacing: '0.3px',
  },
  previewContainer: { width: '100%' },
  preview: {
    width: '100%',
    maxHeight: '360px',
    objectFit: 'contain',
    display: 'block',
  },
  previewOverlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    background: '#f4faf4',
    borderTop: '1px solid #e0ece0',
  },
  fileInfo: { display: 'flex', alignItems: 'center', gap: '8px' },
  fileName: {
    fontSize: '0.82rem',
    color: '#555',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '260px',
  },
  reuploadBtn: {
    background: 'transparent',
    color: '#2d6a2d',
    border: '1px solid #2d6a2d',
    padding: '5px 12px',
    borderRadius: '6px',
    fontSize: '0.82rem',
    cursor: 'pointer',
    fontWeight: '600',
  },
  analyzeBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #1a3d1a, #2d6a2d)',
    color: 'white',
    border: 'none',
    padding: '16px',
    borderRadius: '10px',
    fontSize: '1.05rem',
    fontWeight: '700',
    letterSpacing: '0.5px',
    boxShadow: '0 4px 16px rgba(45,106,45,0.3)',
  },
  errorBox: {
    background: '#fff5f5',
    border: '1px solid #ffcccc',
    borderLeft: '4px solid #e53e3e',
    borderRadius: '8px',
    padding: '12px 16px',
  },
  errorText: {
    fontSize: '0.85rem',
    color: '#c53030',
    margin: 0,
  },
  resultBox: {
    background: 'white',
    border: '1px solid #deeede',
    borderRadius: '12px',
    padding: '20px 22px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  resultLabel: {
    fontSize: '0.72rem',
    fontWeight: '700',
    color: '#2d6a2d',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '14px',
  },
  resultRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  resultKey: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#555',
    margin: '0 0 6px',
  },
  resultValue: {
    fontSize: '0.85rem',
    color: '#333',
    maxWidth: '60%',
    textAlign: 'right',
  },
  resultBadge: {
    background: '#f0faf0',
    border: '1px solid #c8e6c9',
    color: '#2d6a2d',
    padding: '3px 10px',
    borderRadius: '4px',
    fontSize: '0.78rem',
    fontWeight: '700',
  },
  resultDivider: {
    height: '1px',
    background: '#f0f0f0',
    margin: '12px 0',
  },
  resultTreatment: {
    fontSize: '0.85rem',
    color: '#444',
    lineHeight: '1.6',
    margin: '0 0 12px',
  },
  guideList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  guideItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    background: 'white',
    border: '1px solid #deeede',
    borderRadius: '10px',
    padding: '16px 18px',
  },
  guideLeft: { flexShrink: 0, paddingTop: '2px' },
  guideNum: {
    fontSize: '0.7rem',
    fontWeight: '800',
    color: '#2d6a2d',
    background: '#f0faf0',
    border: '1px solid #c8e6c9',
    padding: '4px 8px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
    display: 'block',
  },
  guideTitle: {
    fontSize: '0.92rem',
    fontWeight: '700',
    color: '#1a3d1a',
    margin: '0 0 4px',
  },
  guideText: {
    fontSize: '0.85rem',
    color: '#555',
    lineHeight: '1.6',
    margin: 0,
  },
  noteBox: {
    background: '#fffbf0',
    border: '1px solid #f5e6b8',
    borderLeft: '4px solid #f5a623',
    borderRadius: '8px',
    padding: '14px 16px',
  },
  noteText: {
    fontSize: '0.85rem',
    color: '#555',
    lineHeight: '1.6',
    margin: 0,
  },
};

export default DetectDisease;