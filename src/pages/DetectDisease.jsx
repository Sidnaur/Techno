import { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext'; 
import api from '../api';

const DetectDisease = () => {
  const [dragOver, setDragOver] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const { t } = useLanguage(); 

  // Camera states
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [capturing, setCapturing] = useState(false);
  const [facingMode, setFacingMode] = useState('environment'); // back camera default
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);

  // Start camera
  const startCamera = useCallback(async () => {
    setCameraError(null);
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      setCameraError(
        err.name === 'NotAllowedError'
          ? t('cam_err_permission')
          : err.name === 'NotFoundError'
          ? t('cam_err_notfound')
          : t('cam_err_generic')
      );
    }
  }, [facingMode, t]);

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraOpen(false);
    setCameraError(null);
    setCapturing(false);
  };

  // Flip camera (mobile)
  const flipCamera = async () => {
    stopCamera();
    const next = facingMode === 'environment' ? 'user' : 'environment';
    setFacingMode(next);
  };

  useEffect(() => {
    if (cameraOpen && !cameraError) startCamera();
  }, [cameraOpen, cameraError, startCamera]);

  useEffect(() => { return () => stopCamera(); }, []);

  // Capture photo from video
  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    setCapturing(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      const file = new File([blob], 'captured-leaf.jpg', { type: 'image/jpeg' });
      setImage(URL.createObjectURL(blob));
      setFileName('captured-leaf.jpg');
      setImageFile(file);
      setResult(null);
      setError(null);
      stopCamera();
      setCapturing(false);
    }, 'image/jpeg', 0.92);
  };

  // File upload handlers
  const handleFile = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file));
      setFileName(file.name);
      setImageFile(file);
      setResult(null);
      setError(null);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };
  const handleChange = (e) => handleFile(e.target.files[0]);

  // Detect
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
      setError(t('detect_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Camera Modal */}
      {cameraOpen && (
        <div style={styles.cameraOverlay}>
          <div style={styles.cameraModal}>
            {/* Header */}
            <div style={styles.cameraHeader}>
              <div style={styles.cameraHeaderLeft}>
                <div style={styles.cameraIndicator} />
                <span style={styles.cameraHeaderTitle}>{t('cam_live')}</span>
              </div>
              <button onClick={stopCamera} style={styles.cameraCloseBtn} title={t('cam_close')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Video / Error */}
            <div style={styles.cameraViewport}>
              {cameraError ? (
                <div style={styles.cameraErrorState}>
                  <div style={styles.cameraErrorIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="1.5">
                      <path d="M23 7l-7 5 7 5V7z"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                      <line x1="1" y1="1" x2="23" y2="23" stroke="#e53e3e"/>
                    </svg>
                  </div>
                  <p style={styles.cameraErrorText}>{cameraError}</p>
                  <button onClick={startCamera} style={styles.retryBtn}>{t('cam_retry')}</button>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    style={styles.video}
                  />
                  {/* Leaf guide overlay */}
                  <div style={styles.guideOverlay}>
                    <div style={styles.guideFrame}>
                      <span style={{...styles.guideCorner, top: 0, left: 0, borderRight: 'none', borderBottom: 'none'}} />
                      <span style={{...styles.guideCorner, top: 0, right: 0, borderLeft: 'none', borderBottom: 'none'}} />
                      <span style={{...styles.guideCorner, bottom: 0, left: 0, borderRight: 'none', borderTop: 'none'}} />
                      <span style={{...styles.guideCorner, bottom: 0, right: 0, borderLeft: 'none', borderTop: 'none'}} />
                    </div>
                    <p style={styles.guideHint}>{t('cam_guide_hint')}</p>
                  </div>
                </>
              )}
            </div>

            {/* Controls */}
            {!cameraError && (
              <div style={styles.cameraControls}>
                <button onClick={flipCamera} style={styles.flipBtn} title={t('cam_flip')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 4v6h6"/><path d="M23 20v-6h-6"/>
                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                  </svg>
                  <span>{t('cam_flip')}</span>
                </button>

                <button
                  onClick={capturePhoto}
                  style={styles.captureBtn}
                  disabled={capturing}
                  title={t('cam_capture')}
                >
                  <div style={styles.captureBtnInner} />
                </button>

                <button onClick={stopCamera} style={styles.cancelCameraBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>{t('cam_cancel')}</span>
                </button>
              </div>
            )}
          </div>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      )}

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.titleRow}>
            <div style={styles.titleBar} />
            <h1 style={styles.title}>{t('detect_title')}</h1>
          </div>
          <p style={styles.subtitle}>{t('detect_subtitle_long')}</p>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        <div style={styles.twoCol}>

          {/* Left — Upload */}
          <div style={styles.leftCol}>
            <p style={styles.sectionLabel}>{t('detect_step1_label')}</p>

            {/* Input method tabs */}
            <div style={styles.methodTabs}>
              <label style={styles.methodTab}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                {t('detect_tab_upload')}
                <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
              </label>
              <button style={styles.methodTab} onClick={startCamera}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"/>
                  <rect x="1" y="5" width="15" height="14" rx="2"/>
                </svg>
                {t('detect_tab_capture')}
              </button>
            </div>

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
                  <img src={image} alt="Leaf" style={styles.preview} />
                  <div style={styles.previewOverlay}>
                    <div style={styles.fileInfo}>
                      {fileName === 'captured-leaf.jpg' && (
                        <span style={styles.capturedBadge}>📷 {t('detect_captured_badge')}</span>
                      )}
                      <span style={styles.fileName}>{fileName}</span>
                    </div>
                    <div style={styles.previewActions}>
                      <button style={styles.retakeBtn} onClick={startCamera}>
                        {t('detect_retake')}
                      </button>
                      <label style={styles.reuploadBtn}>
                        {t('detect_replace')}
                        <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                      </label>
                    </div>
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
                  <h3 style={styles.uploadTitle}>{t('detect_drag_title')}</h3>
                  <p style={styles.uploadSub}>{t('detect_drag_sub')}</p>
                  <div style={styles.divider}>
                    <span style={styles.dividerLine} />
                    <span style={styles.dividerText}>{t('detect_or')}</span>
                    <span style={styles.dividerLine} />
                  </div>
                  <div style={styles.uploadBtnRow}>
                    <label style={styles.chooseBtn}>
                      {t('detect_browse')}
                      <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                    </label>
                    <button style={styles.cameraBtn} onClick={startCamera}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 7l-7 5 7 5V7z"/>
                        <rect x="1" y="5" width="15" height="14" rx="2"/>
                      </svg>
                      {t('detect_use_camera')}
                    </button>
                  </div>
                </div>
              )}
            </div>

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
                {loading ? (
                  <span style={styles.analyzingInner}>
                    <span style={styles.spinner} />
                    {t('detect_analyzing')}
                  </span>
                ) : t('detect_run_analysis')}
              </button>
            )}

            {error && (
              <div style={styles.errorBox}>
                <p style={styles.errorText}>{error}</p>
              </div>
            )}

            {result && (
              <div style={styles.resultBox}>
                <p style={styles.resultLabel}>{t('detect_result')}</p>
                <div style={styles.resultRow}>
                  <span style={styles.resultKey}>{t('detect_disease')}</span>
                  <span style={styles.resultValue}>{result.disease_name || result.disease || 'N/A'}</span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultKey}>{t('detect_confidence')}</span>
                  <span style={styles.resultBadge}>{result.confidence_level || result.confidence || 'N/A'}</span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultKey}>{t('detect_symptoms')}</span>
                  <span style={styles.resultValue}>{result.symptoms_observed || result.symptoms || 'N/A'}</span>
                </div>
                <div style={styles.resultDivider} />
                <p style={styles.resultKey}>{t('detect_treatment')}</p>
                <p style={styles.resultTreatment}>{result.recommended_treatment || result.treatment || 'N/A'}</p>
                <p style={styles.resultKey}>{t('detect_prevention')}</p>
                <p style={styles.resultTreatment}>{result.preventive_measures || result.prevention || 'N/A'}</p>
              </div>
            )}
          </div>

          {/* Right — Guidelines */}
          <div style={styles.rightCol}>
            <p style={styles.sectionLabel}>{t('detect_guidelines_label')}</p>
            <div style={styles.guideList}>
              {[
                { num: '01', title: t('detect_guide1_title'), text: t('detect_guide1_text') },
                { num: '02', title: t('detect_guide2_title'), text: t('detect_guide2_text') },
                { num: '03', title: t('detect_guide3_title'), text: t('detect_guide3_text') },
                { num: '04', title: t('detect_guide4_title'), text: t('detect_guide4_text') },
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

            <div style={styles.noteBox}>
              <p style={styles.noteText}>
                <strong>{t('detect_advisory_label')}</strong> {t('detect_advisory_text')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { minHeight: '100vh', background: '#f4f9f4', paddingBottom: '80px' },

  // Camera overlay
  cameraOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.85)',
    zIndex: 9000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  cameraModal: {
    background: '#111',
    borderRadius: '16px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '680px',
    display: 'flex',
    flexDirection: 'column',
  },
  cameraHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 18px',
    background: '#1a1a1a',
    borderBottom: '1px solid #333',
  },
  cameraHeaderLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
  cameraIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#ff4444',
    boxShadow: '0 0 6px #ff4444',
  },
  cameraHeaderTitle: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'white',
    letterSpacing: '0.3px',
  },
  cameraCloseBtn: {
    background: 'transparent',
    border: 'none',
    color: '#aaa',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
  },
  cameraViewport: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  guideOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  guideFrame: {
    position: 'relative',
    width: '55%',
    aspectRatio: '1',
  },
  guideCorner: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    border: '3px solid rgba(255,255,255,0.8)',
    display: 'block',
  },
  guideHint: {
    marginTop: '16px',
    fontSize: '0.78rem',
    color: 'rgba(255,255,255,0.7)',
    background: 'rgba(0,0,0,0.4)',
    padding: '4px 12px',
    borderRadius: '20px',
    letterSpacing: '0.3px',
  },
  cameraErrorState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
    padding: '40px',
    textAlign: 'center',
  },
  cameraErrorIcon: {
    width: '64px',
    height: '64px',
    background: '#1a0000',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraErrorText: {
    fontSize: '0.88rem',
    color: '#ffaaaa',
    maxWidth: '320px',
    lineHeight: '1.6',
    margin: 0,
  },
  retryBtn: {
    background: '#2d6a2d',
    color: 'white',
    border: 'none',
    padding: '9px 24px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  cameraControls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 40px',
    background: '#1a1a1a',
  },
  flipBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    background: 'transparent',
    border: 'none',
    color: '#ccc',
    cursor: 'pointer',
    fontSize: '0.72rem',
    fontWeight: '600',
    letterSpacing: '0.3px',
  },
  captureBtn: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    background: 'white',
    border: '4px solid rgba(255,255,255,0.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  captureBtnInner: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    background: 'white',
    border: '2px solid #ccc',
  },
  cancelCameraBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    background: 'transparent',
    border: 'none',
    color: '#ccc',
    cursor: 'pointer',
    fontSize: '0.72rem',
    fontWeight: '600',
    letterSpacing: '0.3px',
  },

  // Header
  header: {
    background: 'linear-gradient(135deg, #1a3d1a 0%, #2d6a2d 100%)',
    padding: '60px 60px 50px',
  },
  headerInner: { maxWidth: '1100px', margin: '0 auto' },
  titleRow: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' },
  titleBar: { width: '5px', height: '42px', background: '#f5a623', borderRadius: '4px', flexShrink: 0 },
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

  // Content
  content: { maxWidth: '1100px', margin: '40px auto 0', padding: '0 40px' },
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

  // Method tabs
  methodTabs: {
    display: 'flex',
    gap: '10px',
    marginBottom: '4px',
  },
  methodTab: {
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
    padding: '9px 18px',
    borderRadius: '8px',
    border: '1px solid #c8dfc8',
    background: 'white',
    color: '#2d6a2d',
    fontSize: '0.85rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },

  // Upload card
  uploadCard: {
    background: 'white',
    borderRadius: '12px',
    border: '2px dashed',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    overflow: 'hidden',
    minHeight: '380px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadInner: { textAlign: 'center', padding: '50px 40px', width: '100%' },
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
  uploadTitle: { fontSize: '1.3rem', fontWeight: '700', color: '#1a3d1a', marginBottom: '10px' },
  uploadSub: { fontSize: '0.9rem', color: '#888', marginBottom: '28px' },
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '28px',
    maxWidth: '300px',
    margin: '0 auto 28px',
  },
  dividerLine: { flex: 1, height: '1px', background: '#e0e0e0', display: 'block' },
  dividerText: { color: '#aaa', fontSize: '0.85rem' },
  uploadBtnRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  chooseBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: '#2d6a2d',
    color: 'white',
    padding: '12px 32px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
  cameraBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: 'white',
    color: '#2d6a2d',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '0.95rem',
    cursor: 'pointer',
    border: '1.5px solid #2d6a2d',
  },

  // Preview
  previewContainer: { width: '100%' },
  preview: { width: '100%', maxHeight: '340px', objectFit: 'contain', display: 'block' },
  previewOverlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    background: '#f4faf4',
    borderTop: '1px solid #e0ece0',
    flexWrap: 'wrap',
    gap: '8px',
  },
  fileInfo: { display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' },
  capturedBadge: {
    background: '#e8f5e9',
    color: '#2d6a2d',
    border: '1px solid #c8e6c9',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '700',
  },
  fileName: {
    fontSize: '0.82rem',
    color: '#555',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '180px',
  },
  previewActions: { display: 'flex', gap: '8px' },
  retakeBtn: {
    background: 'transparent',
    color: '#2d6a2d',
    border: '1px solid #2d6a2d',
    padding: '5px 12px',
    borderRadius: '6px',
    fontSize: '0.82rem',
    cursor: 'pointer',
    fontWeight: '600',
  },
  reuploadBtn: {
    background: 'transparent',
    color: '#555',
    border: '1px solid #ccc',
    padding: '5px 12px',
    borderRadius: '6px',
    fontSize: '0.82rem',
    cursor: 'pointer',
    fontWeight: '600',
  },

  // Analyze button
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
  analyzingInner: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    display: 'inline-block',
    animation: 'spin 0.8s linear infinite',
  },

  // Error / Result
  errorBox: {
    background: '#fff5f5',
    border: '1px solid #ffcccc',
    borderLeft: '4px solid #e53e3e',
    borderRadius: '8px',
    padding: '12px 16px',
  },
  errorText: { fontSize: '0.85rem', color: '#c53030', margin: 0 },
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
  resultKey: { fontSize: '0.82rem', fontWeight: '700', color: '#555', margin: '0 0 6px' },
  resultValue: { fontSize: '0.85rem', color: '#333', maxWidth: '60%', textAlign: 'right' },
  resultBadge: {
    background: '#f0faf0',
    border: '1px solid #c8e6c9',
    color: '#2d6a2d',
    padding: '3px 10px',
    borderRadius: '4px',
    fontSize: '0.78rem',
    fontWeight: '700',
  },
  resultDivider: { height: '1px', background: '#f0f0f0', margin: '12px 0' },
  resultTreatment: { fontSize: '0.85rem', color: '#444', lineHeight: '1.6', margin: '0 0 12px' },

  // Guidelines
  guideList: { display: 'flex', flexDirection: 'column', gap: '12px' },
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
  guideTitle: { fontSize: '0.92rem', fontWeight: '700', color: '#1a3d1a', margin: '0 0 4px' },
  guideText: { fontSize: '0.85rem', color: '#555', lineHeight: '1.6', margin: 0 },
  noteBox: {
    background: '#fffbf0',
    border: '1px solid #f5e6b8',
    borderLeft: '4px solid #f5a623',
    borderRadius: '8px',
    padding: '14px 16px',
  },
  noteText: { fontSize: '0.85rem', color: '#555', lineHeight: '1.6', margin: 0 },
};

// Inject spinner keyframe
const styleTag = document.createElement('style');
styleTag.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(styleTag);

export default DetectDisease;