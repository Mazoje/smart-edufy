import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setMobileMenuOpen(false);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div 
          style={styles.logoGroup} 
          onClick={() => handleNavClick('home')}
        >
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
        <nav style={styles.navMenu}>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
            style={styles.link}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} 
            style={styles.link}
          >
            About
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }} 
            style={styles.link}
          >
            Pricing
          </a>
        </nav>

        {/* Desktop Auth Group */}
        <div style={styles.authGroup}>
          <a href="#login" style={styles.loginLink}>Login</a>
          <button 
            style={styles.signupBtn} 
            onClick={() => handleNavClick('pricing')}
          >
            Sign up for free
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          style={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} color="#1E293B" /> : <Menu size={24} color="#1E293B" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileDropdown}>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
            style={styles.mobileLink}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} 
            style={styles.mobileLink}
          >
            About
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }} 
            style={styles.mobileLink}
          >
            Pricing
          </a>
          <div style={styles.mobileAuthGroup}>
            <a href="#login" style={styles.mobileLoginLink}>Login</a>
            <button 
              style={styles.mobileSignupBtn} 
              onClick={() => handleNavClick('pricing')}
            >
              Sign up for free
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    width: '100%',
    backgroundColor: '#FAF5FF',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoImage: {
    height: '34px',
    width: 'auto',
    objectFit: 'contain',
  },
  brandName: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#1E293B',
    fontFamily: 'Inter, system-ui, sans-serif',
    letterSpacing: '-0.3px',
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  link: {
    fontSize: '14.5px',
    fontWeight: 500,
    color: '#475569',
    textDecoration: 'none',
    fontFamily: 'Inter, system-ui, sans-serif',
    cursor: 'pointer',
  },
  authGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  loginLink: {
    fontSize: '14.5px',
    fontWeight: 500,
    color: '#334155',
    textDecoration: 'none',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  signupBtn: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '50px',
    fontSize: '13.5px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'Inter, system-ui, sans-serif',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  mobileDropdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    backgroundColor: '#FAF5FF',
    borderBottom: '1px solid #E2E8F0',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
  },
  mobileLink: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#334155',
    textDecoration: 'none',
  },
  mobileAuthGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    paddingTop: '12px',
    borderTop: '1px solid #E2E8F0',
  },
  mobileLoginLink: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#334155',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '8px 0',
  },
  mobileSignupBtn: {
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    width: '100%',
  },
};

if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    @media (max-width: 900px) {
      header nav, header div > div:nth-child(3) { display: none !important; }
      button[aria-label="Toggle Navigation Menu"] { display: flex !important; }
    }
    @media (min-width: 901px) {
      div[style*="mobileDropdown"] { display: none !important; }
      button[aria-label="Toggle Navigation Menu"] { display: none !important; }
    }
  `;
  document.head.appendChild(styleTag);
}