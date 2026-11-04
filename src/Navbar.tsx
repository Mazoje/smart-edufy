import React from 'react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* Logo */}
        <div style={styles.logoGroup} onClick={() => handleNav('home')}>
          <img 
            src="/logo1.png" 
            alt="SmartEdufy Logo" 
            style={styles.logoImage}
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
           </div>

        {/* Nav Links */}
        <div style={styles.linksRow}>
          <button 
            style={{
              ...styles.linkBtn, 
              color: currentPage === 'home' ? '#2563EB' : '#475569',
              fontWeight: currentPage === 'home' ? 700 : 600
            }} 
            onClick={() => handleNav('home')}
          >
            Home
          </button>

          <button 
            style={{
              ...styles.linkBtn, 
              color: currentPage === 'about' ? '#2563EB' : '#475569',
              fontWeight: currentPage === 'about' ? 700 : 600
            }} 
            onClick={() => handleNav('about')}
          >
            About
          </button>

          <button 
            style={{
              ...styles.linkBtn, 
              color: currentPage === 'pricing' ? '#2563EB' : '#475569',
              fontWeight: currentPage === 'pricing' ? 700 : 600
            }} 
            onClick={() => handleNav('pricing')}
          >
            Pricing
          </button>
        </div>

        {/* Action Button */}
        <button 
          style={styles.ctaButton}
          onClick={() => handleNav('pricing')}
        >
          Get Started
        </button>

      </div>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.9)',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoImage: {
    height: '32px',
    width: 'auto',
    objectFit: 'contain',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 800,
    color: '#0F172A',
    letterSpacing: '-0.5px',
  },
  linksRow: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  linkBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '15px',
    cursor: 'pointer',
    padding: 0,
    transition: 'color 0.2s ease',
  },
  ctaButton: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
    transition: 'background 0.2s ease',
  },
};