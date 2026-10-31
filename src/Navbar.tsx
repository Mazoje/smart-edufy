import React from 'react';

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logoGroup}>
          <svg
            width="38"
            height="38"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Layer */}
            <path d="M20 4L34 11L20 18L6 11L20 4Z" fill="#93C5FD" />
            {/* Middle Layer */}
            <path
              d="M6 16.5L20 23.5L34 16.5M6 16.5L20 23.5V28"
              stroke="#3B82F6"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M6 16.5L20 23.5L34 16.5" fill="#60A5FA" />
            {/* Bottom Base */}
            <path
              d="M6 23.5L20 30.5L34 23.5V29L20 36L6 29V23.5Z"
              fill="#2563EB"
            />
          </svg>
          <span style={styles.brandName}>SmartEdufy</span>
        </div>

        {/* Center Links */}
        <nav style={styles.navMenu}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#features" style={styles.link}>Features</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#pricing" style={styles.link}>Pricing</a>
          <a href="#faq" style={styles.link}>FAQ</a>
        </nav>

        {/* Right Auth Group */}
        <div style={styles.authGroup}>
          <a href="#login" style={styles.loginLink}>Login</a>
          <button style={styles.signupBtn}>Sign up for free</button>
        </div>
      </div>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    width: '100%',
    backgroundColor: '#FAF5FF', // Matches the exact top ambient tint
    borderBottom: 'none',       // Removes any unwanted separator line
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  brandName: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#1E293B',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    letterSpacing: '-0.3px',
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '36px',
  },
  link: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#475569',
    textDecoration: 'none',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  authGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  loginLink: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#334155',
    textDecoration: 'none',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  signupBtn: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
  },
};