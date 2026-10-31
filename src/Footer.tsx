import React from 'react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left: Logo & Tagline */}
        <div style={styles.leftGroup}>
          <div 
            onClick={() => scrollToSection('home')} 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <svg width="28" height="24" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#3B82F6" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M2 15L16 22L30 15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 21L16 28L30 21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={styles.logoText}>SmartEdufy</span>
          </div>
          <span style={styles.tagline}>Smart school management. Built for Africa.</span>
        </div>

        {/* Center: Navigation Links */}
        <div style={styles.navLinks}>
          <button onClick={() => scrollToSection('home')} style={styles.navLinkBtn}>Home</button>
          <button onClick={() => scrollToSection('features')} style={styles.navLinkBtn}>Features</button>
          <button onClick={() => scrollToSection('workflow')} style={styles.navLinkBtn}>About</button>
          <button onClick={() => scrollToSection('pricing')} style={styles.navLinkBtn}>Pricing</button>
          <button onClick={() => scrollToSection('faq')} style={styles.navLinkBtn}>FAQ</button>
        </div>

        {/* Right: Copyright & Legal */}
        <div style={styles.rightGroup}>
          <div style={styles.copyrightText}>
            © 2026 SmartEdufy. Empowering African education with AI-driven school management.
          </div>
          <div style={styles.legalLinks}>
            <a href="#privacy" style={styles.legalLink}>Privacy Policy</a>
            <span style={styles.dot}>•</span>
            <a href="#terms" style={styles.legalLink}>Terms of Service</a>
            <span style={styles.dot}>•</span>
            <a href="#compliance" style={styles.legalLink}>Compliance</a>
            <span style={styles.dot}>•</span>
            <a href="#status" style={styles.legalLink}>System Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    width: '100%',
    backgroundColor: '#FAF5FF',
    borderTop: '1px solid #E2E8F0',
    padding: '40px 24px',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '24px',
  },
  leftGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.5px',
  },
  tagline: {
    fontSize: '12.5px',
    color: '#64748B',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  navLinkBtn: {
    background: 'none',
    border: 'none',
    color: '#334155',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    padding: 0,
  },
  rightGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
    textAlign: 'right',
  },
  copyrightText: {
    fontSize: '12px',
    color: '#64748B',
  },
  legalLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11.5px',
    flexWrap: 'wrap',
  },
  legalLink: {
    color: '#64748B',
    textDecoration: 'none',
  },
  dot: {
    color: '#CBD5E1',
    fontSize: '10px',
  },
};

if (typeof document !== 'undefined') {
  const footerStyleTag = document.createElement('style');
  footerStyleTag.innerHTML = `
    @media (max-width: 900px) {
      footer div[style*="display: flex"] {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
      }
      footer div[style*="align-items: flex-end"] {
        align-items: center !important;
        text-align: center !important;
      }
      footer div[style*="gap: '24px'"] {
        justify-content: center !important;
      }
    }
  `;
  document.head.appendChild(footerStyleTag);
}