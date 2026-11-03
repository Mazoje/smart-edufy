import React from 'react';

export default function Hero() {
  return (
    <section style={styles.heroSection}>
      {/* Inject Media Query for Mobile Responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .hero-top-row {
            flex-direction: column !important;
            text-align: center !important;
            min-height: auto !important;
            gap: 32px !important;
          }
          .hero-left-col {
            max-width: 100% !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .hero-subtitle {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-button-group {
            justify-content: center !important;
            width: 100% !important;
          }
          .hero-checklist-row {
            justify-content: center !important;
          }
          .hero-right-col {
            width: 100% !important;
            margin-top: 10px !important;
          }
          .hero-graphic-wrapper {
            max-width: 320px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Top Hero Layout (Text + Graphic) */}
        <div className="hero-top-row" style={styles.topRow}>
          
          {/* Left Hero Text Column */}
          <div className="hero-left-col" style={styles.leftCol}>
            {/* Tag Badge */}
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              <span style={styles.badgeText}>Built for African Schools</span>
            </div>

            {/* Main Title */}
            <h1 style={styles.title}>
              The AI–Powered School Management System Built for African Schools
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" style={styles.subtitle}>
              Manage students, attendance, fees, results, staff and communication — all in one simple platform.
            </p>

            {/* Action Buttons */}
            <div className="hero-button-group" style={styles.buttonGroup}>
              <button style={styles.primaryBtn}>Sign up for free</button>
              <button style={styles.secondaryBtn}>Learn More</button>
            </div>

            {/* Trust Badges Checkmarks */}
            <div className="hero-checklist-row" style={styles.checklistRow}>
              <div style={styles.checkItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Zero Setup Hassle</span>
              </div>

              <div style={styles.checkItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Free 14–Day Trial</span>
              </div>

              <div style={styles.checkItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Offline Ready</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic */}
          <div className="hero-right-col" style={styles.rightCol}>
            <div className="hero-graphic-wrapper" style={styles.singleImageWrapper}>
              <img 
                src="/screen3.png" 
                alt="SmartEdufy App Display" 
                style={styles.heroGraphic} 
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

        </div>

        {/* Bottom 4 Feature Cards */}
        <div style={styles.bottomFeaturesCardContainer}>
          <div style={styles.featureItemRow}>
            <div style={styles.iconBoxSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>Cloud–Based</h3>
              <p style={styles.featureDescText}>Always accessible, zero server hassle.</p>
            </div>
          </div>

          <div style={styles.featureItemRow}>
            <div style={styles.iconBoxSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>Secure</h3>
              <p style={styles.featureDescText}>Bank–grade encryption for student records.</p>
            </div>
          </div>

          <div style={styles.featureItemRow}>
            <div style={styles.iconBoxSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>Mobile–Friendly</h3>
              <p style={styles.featureDescText}>Optimized for phones and low bandwidth.</p>
            </div>
          </div>

          <div style={styles.featureItemRow}>
            <div style={styles.iconBoxSquare}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                <path d="M12 12L2.5 7.5"></path>
                <path d="M12 12v10"></path>
              </svg>
            </div>
            <div>
              <h3 style={styles.featureTitleText}>AI–Ready</h3>
              <p style={styles.featureDescText}>Built to integrate smart insights smoothly.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  heroSection: {
    width: '100%',
    background: `
      radial-gradient(
        ellipse at 78% 35%,
        rgba(224, 195, 255, 0.38) 0%,
        transparent 42%
      ),
      linear-gradient(
        135deg,
        #FCF7FF 0%,
        #F7E9FF 48%,
        #FCF5FF 100%
      )
    `,
    paddingTop: '24px',
    paddingBottom: '40px',
    overflow: 'hidden',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },

  container: {
    maxWidth: '1240px',
    width: '100%',
    margin: '0 auto',
    padding: '0 20px',
  },

  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '30px',
    minHeight: '480px',
    marginBottom: '40px',
  },

  leftCol: {
    flex: '1 1 50%',
    maxWidth: '510px',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(239, 246, 255, 0.75)',
    border: '1px solid rgba(191, 219, 254, 0.8)',
    padding: '5px 11px',
    borderRadius: '50px',
    marginBottom: '22px',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },

  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#2563EB',
  },

  badgeText: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#2563EB',
  },

  title: {
    fontSize: 'clamp(26px, 3.1vw, 34px)',
    fontWeight: 800,
    letterSpacing: '-1.1px',
    color: '#10172D',
    lineHeight: 1.18,
    marginBottom: '16px',
  },

  subtitle: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.55,
    marginBottom: '24px',
    maxWidth: '480px',
  },

  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '25px',
    flexWrap: 'wrap',
  },

  primaryBtn: {
    background: 'linear-gradient(135deg, #2563EB, #315FEA)',
    color: '#FFFFFF',
    border: '1px solid rgba(255,255,255,0.25)',
    padding: '11px 21px',
    borderRadius: '17px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 5px 14px rgba(37,99,235,0.20)',
  },

  secondaryBtn: {
    background: 'rgba(255,255,255,0.82)',
    color: '#172033',
    border: '1px solid rgba(203,213,225,0.9)',
    padding: '11px 21px',
    borderRadius: '17px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },

  checklistRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    flexWrap: 'wrap',
  },

  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '10px',
    fontWeight: 500,
    color: '#64748B',
  },

  rightCol: {
    flex: '1 1 45%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '0',
  },

  singleImageWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '440px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroGraphic: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    filter: 'drop-shadow(0 20px 30px rgba(15, 23, 42, 0.18))',
  },

  bottomFeaturesCardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "32px 28px",
    boxShadow: "0 10px 30px -10px rgba(15, 23, 42, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "28px",
    width: "100%",
    boxSizing: "border-box",
  },

  featureItemRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  iconBoxSquare: {
    width: "48px",
    height: "48px",
    backgroundColor: "#EFF6FF",
    border: "1px solid #DBEAFE",
    borderRadius: "14px",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },

  featureTitleText: {
    fontSize: "16px",
    fontWeight: 800,
    color: "#0F172A",
    margin: "0 0 4px 0",
    letterSpacing: "-0.2px",
  },

  featureDescText: {
    fontSize: "13px",
    color: "#64748B",
    lineHeight: 1.4,
    margin: 0,
  },
};