import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import './topography.css';

interface PreloaderGateProps {
  onLoaded: () => void;
}

export const PreloaderGate: React.FC<PreloaderGateProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  /* -- progress counter -- */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 130);
    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    onLoaded();
  };

  /* -- auto-enter when ready -- */
  useEffect(() => {
    if (isReady) {
      const timer = setTimeout(() => {
        handleEnter();
      }, 750); // 3/4 second delay
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <>
      <style>{`
        /* Keyframes removed because cat position is now tied to progress state */
        @keyframes shadowPulse {
          0%, 100% { transform: translateX(-50%) scaleX(1); opacity: 0.35; }
          50%      { transform: translateX(-50%) scaleX(0.5); opacity: 0.1; }
        }
        @keyframes dustPuff {
          0%   { opacity: 0.8; transform: translateX(0) scale(1); }
          100% { opacity: 0; transform: translateX(-40px) scale(3); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes goldGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,199,44,0.4); }
          50%      { text-shadow: 0 0 28px rgba(255,199,44,0.95), 0 0 55px rgba(255,130,0,0.3); }
        }
        @keyframes slideTopo {
          0%   { background-position: 0 0; }
          100% { background-position: -600px -600px; }
        }
        .topo-animation {
          animation: slideTopo 45s linear infinite;
        }

        /* ── CSS Cat Animation (Pure White Minimalist Theme) ── */
        .css-cat-container {
          position: absolute;
          bottom: 12px;
          width: 80px;
          height: 60px;
        }
        .css-cat-scaler {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: scale(2.2); 
          transform-origin: bottom center;
        }
        .css-cat-torso {
          position: absolute;
          bottom: 18px;
          left: 15px;
          width: 48px;
          height: 20px;
          background: #1a3d1a;
          border-radius: 10px;
          animation: bodyBounce 0.25s ease-in-out infinite alternate;
        }
        .css-cat-head {
          position: absolute;
          top: -12px;
          right: -6px;
          width: 22px;
          height: 22px;
          background: #1a3d1a;
          border-radius: 50%;
        }
        .css-cat-ear {
          position: absolute;
          top: -6px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 10px solid #1a3d1a;
        }
        .css-cat-ear-l { left: -1px; transform: rotate(-25deg); }
        .css-cat-ear-r { right: 0px; transform: rotate(15deg); }
        .css-cat-tail {
          position: absolute;
          top: -10px;
          left: -20px;
          width: 26px;
          height: 26px;
          transform-origin: 90% 80%;
          animation: tailWag 0.25s ease-in-out infinite alternate;
        }
        .css-cat-leg {
          position: absolute;
          top: 12px;
          width: 5px;
          height: 18px;
          background: #1a3d1a;
          border-radius: 2.5px;
          transform-origin: top center;
        }
        .css-cat-paw {
          position: absolute;
          bottom: 0;
          left: -1px;
          width: 7px;
          height: 3px;
          background: inherit;
          border-radius: 1.5px;
        }
        .css-leg-fl { right: 6px; animation: legRun 0.25s infinite alternate; }
        .css-leg-fr { right: 14px; animation: legRun 0.25s infinite alternate-reverse; background: #2a572a; }
        .css-leg-bl { left: 8px; animation: legRun 0.25s infinite alternate-reverse; }
        .css-leg-br { left: 16px; animation: legRun 0.25s infinite alternate; background: #2a572a; }

        @keyframes bodyBounce {
          0% { transform: translateY(0px) rotate(2deg); }
          100% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes legRun {
          0% { transform: rotate(-40deg); height: 20px; }
          100% { transform: rotate(35deg); height: 12px; }
        }
        @keyframes tailWag {
          0% { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
        
        /* Elements */
        .rp-title { animation: fadeUp 0.7s ease both 0.1s; }
        .rp-sub   { animation: fadeUp 0.7s ease both 0.3s; }
        .rp-prog  { animation: fadeUp 0.7s ease both 0.5s; }
        .rp-gold-glow { animation: goldGlow 2s ease-in-out infinite; }
        
        .rp-dust {
          position: absolute;
          border-radius: 50%;
        }
        .rp-dust-1 { width:10px; height:10px; bottom:2px; left:4px; background:rgba(255,199,44,0.7); animation: dustPuff 0.4s ease-out infinite 0s; }
        .rp-dust-2 { width:6px; height:6px; bottom:6px; left:12px; background:rgba(255,199,44,0.5); animation: dustPuff 0.4s ease-out infinite 0.15s; }
        
        .rp-cat-shadow {
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 50px;
          height: 8px;
          border-radius: 50%;
          background: rgba(26,61,26,0.25);
          filter: blur(3px);
          animation: shadowPulse 0.5s ease-in-out infinite;
        }
      `}</style>

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              /* Pure White Minimalist Background */
              background: '#ffffff',
              color: '#1a3d1a', display: 'flex', flexDirection: 'column',
              overflow: 'hidden', userSelect: 'none', fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {/* Topography Pattern & Center glow */}
            <div className="bg-topography topo-animation" style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.9
            }} />
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 70%)',
            }} />

            {/* ── MAIN CONTENT ── */}
            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '0 24px', position: 'relative', zIndex: 10,
            }}>

              {/* Title */}
              <div className="rp-title" style={{ textAlign: 'center', marginBottom: 6 }}>
                <h1 style={{
                  fontSize: 'clamp(2.4rem, 8vw, 6.5rem)',
                  fontWeight: 900, letterSpacing: '-0.035em',
                  lineHeight: 1.0, margin: 0, color: '#1a3d1a',
                }}>
                  ROYAL{' '}
                  <span className="rp-gold-glow" style={{ color: '#FFC72C', fontStyle: 'italic' }}>
                    PET'S
                  </span>
                </h1>
              </div>

              <p className="rp-sub" style={{
                color: 'rgba(26,61,26,0.6)', fontSize: 'clamp(0.68rem,1.4vw,0.95rem)',
                letterSpacing: '0.28em', textTransform: 'uppercase',
                fontFamily: 'monospace', marginTop: 8, marginBottom: 54,
              }}>
                Premium Organic Pet Nutrition
              </p>

              {/* ── CAT RUNWAY ── */}
              <div style={{
                width: '100%', maxWidth: 680,
                position: 'relative', height: 80, marginBottom: 32,
              }}>
                {/* ground line */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: 4, background: '#1a3d1a', borderRadius: 2
                }} />

                {/* CSS Running Cat */}
                <div className="css-cat-container" style={{ left: `calc(${progress}% - 40px)`, transition: 'left 0.15s ease-out' }}>
                  <div className="css-cat-scaler">
                    <div className="rp-dust rp-dust-1" />
                    <div className="rp-dust rp-dust-2" />
                    <div className="rp-cat-shadow" />
                    
                    <div className="css-cat-torso">
                      <div className="css-cat-tail">
                        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible', display: 'block' }}>
                          <path d="M 90 90 C 50 90, 20 70, 20 40 C 20 20, 40 20, 40 40 C 40 60, 60 70, 90 70 Z" fill="#1a3d1a" />
                        </svg>
                      </div>
                      <div className="css-cat-leg css-leg-br"><div className="css-cat-paw" /></div>
                      <div className="css-cat-leg css-leg-bl"><div className="css-cat-paw" /></div>
                      <div className="css-cat-leg css-leg-fr"><div className="css-cat-paw" /></div>
                      <div className="css-cat-leg css-leg-fl"><div className="css-cat-paw" /></div>
                      <div className="css-cat-head">
                        <div className="css-cat-ear css-cat-ear-l" />
                        <div className="css-cat-ear css-cat-ear-r" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── PROGRESS ── */}
              <div className="rp-prog" style={{
                width: '100%', maxWidth: 460,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  display: 'flex', width: '100%',
                  alignItems: 'center', justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                  <span style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 15, fontWeight: 900,
                    color: '#1a3d1a',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    {isReady ? 'LOADING COMPLETE' : 'INITIALIZING ASSETS…'}
                  </span>
                  <span style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: 20, fontWeight: 900,
                    color: '#FFC72C', letterSpacing: '0.05em',
                  }}>{progress}%</span>
                </div>
              </div>
            </div>

            {/* ── BOTTOM BAR ── */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 36px', borderTop: '1px solid rgba(26,61,26,0.1)',
              fontSize: 10, fontFamily: 'monospace', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'rgba(26,61,26,0.4)', zIndex: 10,
            }}>
              <span>© 2026 ROYALPET'S · ALL RIGHTS RESERVED</span>
              <span style={{ color: '#10B981', fontWeight: 600 }}>
                {isReady ? '✦ ENTERING EXPERIENCE…' : '✦ LOADING ASSETS…'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
