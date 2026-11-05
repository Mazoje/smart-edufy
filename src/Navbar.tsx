import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
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

        {/* Desktop Nav Links */}
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

        {/* Desktop Right Side Actions */}
        <div style={styles.rightActions}>
          <button 
            style={styles.loginBtn}
            onClick={() => handleNav('pricing')}
          >
            Login
          </button>

          <button 
            style={styles.signupBtn}
            onClick={() => handleNav('pricing')}
          >
            Sign up for free
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          style={styles.hamburgerBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} color="#0F172A" /> : <Menu size={24} color="#0F172A" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileDropdown}>
          <button style={styles.mobileLink} onClick={() => handleNav('home')}>Home</button>
           <button style={styles.mobileLink} onClick={() => handleNav('about')}>About</button>
          <button style={styles.mobileLink} onClick={() => handleNav('pricing')}>Pricing</button>
          <div style={styles.mobileActionRow}>
            <button style={styles.loginBtn} onClick={() => handleNav('pricing')}>Login</button>
            <button style={styles.signupBtnMobile} onClick={() => handleNav('pricing')}>Sign up for free</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          .desktop-links, .desktop-actions {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
        @media (min-width: 851px) {
          .hamburger-btn, .mobile-dropdown {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
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
    gap: '28px',
    alignItems: 'center',
  },
  linkBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '14px',
    cursor: 'pointer',
    padding: 0,
    transition: 'color 0.2s ease',
  },
  rightActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  loginBtn: {
    background: 'transparent',
    border: 'none',
    color: '#475569',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    padding: '8px 12px',
    transition: 'color 0.2s ease',
  },
  signupBtn: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
  },
  signupBtnMobile: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
  },
  hamburgerBtn: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  mobileDropdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(203, 213, 225, 0.5)',
    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.1)',
  },
  mobileLink: {
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    fontWeight: 600,
    color: '#1E293B',
    textAlign: 'left',
    cursor: 'pointer',
    padding: '4px 0',
  },
  mobileActionRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '10px',
    borderTop: '1px solid #E2E8F0',
    paddingTop: '16px',
  },
};