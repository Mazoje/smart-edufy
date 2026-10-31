import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left: Logo & Tagline */}
        <div style={styles.leftGroup}>
          <div style={styles.logoRow}>
            {/* Layered Stack Icon SVG matching SmartEdufy branding */}
            <svg width="30" height="26" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#pricing" style={styles.navLink}>Pricing</a>
          <a href="#faq" style={styles.navLink}>FAQ</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
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
    backgroundColor: '#FAF5FF', // Matches the soft ambient lavender backdrop
    borderTop: '1px solid #E2E8F0',
    padding: '36px 32px',
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
  
  /* Left Group */
  leftGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.5px',
  },
  tagline: {
    fontSize: '12.5px',
    color: '#64748B',
  },

  /* Center Navigation Links */
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#334155',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 600,
    transition: 'color 0.2s ease',
  },

  /* Right Group */
  rightGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px',
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