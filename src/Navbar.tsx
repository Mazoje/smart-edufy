import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Pricing', page: 'pricing' },
  ];

  return (
    <>
      <nav className="smart-navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <button
            className="navbar-logo"
            onClick={() => handleNav('home')}
            aria-label="Go to homepage"
          >
            <img
              src="/logo1.png"
              alt="SmartEdufy Logo"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={`navbar-link ${
                  currentPage === item.page ? 'active' : ''
                }`}
                onClick={() => handleNav(item.page)}
                aria-current={
                  currentPage === item.page ? 'page' : undefined
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="navbar-actions">
            <button
              className="navbar-login"
              onClick={() => handleNav('pricing')}
            >
              Login
            </button>

            <button
              className="navbar-signup"
              onClick={() => handleNav('pricing')}
            >
              Sign up for free
              <ArrowRight size={16} />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`mobile-navigation ${
            mobileMenuOpen ? 'mobile-navigation-open' : ''
          }`}
        >
          <div className="mobile-navigation-inner">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={`mobile-nav-link ${
                  currentPage === item.page ? 'active' : ''
                }`}
                onClick={() => handleNav(item.page)}
              >
                {item.label}
              </button>
            ))}

            <div className="mobile-navigation-actions">
              <button
                className="mobile-login"
                onClick={() => handleNav('pricing')}
              >
                Login
              </button>

              <button
                className="mobile-signup"
                onClick={() => handleNav('pricing')}
              >
                Sign up for free
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <style>{`

        /* NAVBAR BASE */

        .smart-navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;

          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          border-bottom: 1px solid rgba(226, 232, 240, 0.75);

          box-shadow: 0 4px 25px rgba(15, 23, 42, 0.035);

          font-family: Inter, system-ui, -apple-system, sans-serif;
        }

        .smart-navbar * {
          box-sizing: border-box;
        }

        .navbar-container {
          max-width: 1280px;
          width: 100%;
          min-height: 76px;
          margin: 0 auto;
          padding: 12px 30px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */

        .navbar-logo {
          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .navbar-logo img {
          display: block;
          height: 38px;
          width: auto;
          max-width: 190px;
          object-fit: contain;
        }

        /* DESKTOP LINKS */

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .navbar-link {
          position: relative;
          padding: 10px 0;

          background: transparent;
          border: none;

          color: #64748B;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;

          cursor: pointer;
          transition: color 0.2s ease;
        }

        .navbar-link:hover,
        .navbar-link.active {
          color: #2563EB;
        }

        .navbar-link.active::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 2px;

          width: 100%;
          height: 2px;

          background: #2563EB;
          border-radius: 10px;
        }

        /* RIGHT ACTIONS */

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .navbar-login {
          background: transparent;
          border: none;

          color: #475569;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;

          cursor: pointer;
          transition: color 0.2s ease;
        }

        .navbar-login:hover {
          color: #2563EB;
        }

        .navbar-signup {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 12px 21px;

          background: linear-gradient(
            110deg,
            #2563EB,
            #1D4ED8
          );

          border: none;
          border-radius: 50px;

          color: white;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;

          cursor: pointer;

          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.22);

          transition: all 0.25s ease;
        }

        .navbar-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
        }

        /* MOBILE TOGGLE */

        .navbar-menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          background: rgba(241, 245, 249, 0.8);
          border: 1px solid #E2E8F0;
          border-radius: 11px;

          color: #0F172A;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .navbar-menu-toggle:hover {
          background: #DBEAFE;
          color: #2563EB;
        }

        /* MOBILE NAVIGATION */

        .mobile-navigation {
          display: none;
          width: 100%;

          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);

          border-top: 1px solid #F1F5F9;

          box-shadow: 0 15px 25px rgba(15, 23, 42, 0.07);
        }

        .mobile-navigation-inner {
          display: flex;
          flex-direction: column;
          gap: 5px;

          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 24px 25px;
        }

        .mobile-nav-link {
          width: 100%;
          padding: 13px 12px;

          text-align: left;

          background: transparent;
          border: none;
          border-radius: 9px;

          color: #475569;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;

          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: #EFF6FF;
          color: #2563EB;
        }

        .mobile-navigation-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;

          margin-top: 14px;
          padding-top: 18px;

          border-top: 1px solid #E2E8F0;
        }

        .mobile-login {
          width: 100%;
          padding: 12px;

          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 10px;

          color: #334155;
          font-family: inherit;
          font-size: 14px;
          font-weight: 650;

          cursor: pointer;
        }

        .mobile-signup {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          width: 100%;
          padding: 13px;

          background: linear-gradient(
            110deg,
            #2563EB,
            #1D4ED8
          );

          border: none;
          border-radius: 10px;

          color: white;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;

          cursor: pointer;
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
        }

        /* RESPONSIVE BREAKPOINT */

        @media (max-width: 850px) {
          .navbar-container {
            min-height: 70px;
            padding: 12px 22px;
          }

          .navbar-links,
          .navbar-actions {
            display: none;
          }

          .navbar-menu-toggle {
            display: flex;
          }

          .mobile-navigation {
            display: block;
          }

          .mobile-navigation:not(.mobile-navigation-open) {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .navbar-container {
            min-height: 66px;
            padding: 10px 17px;
          }

          .navbar-logo img {
            height: 33px;
            max-width: 160px;
          }

          .mobile-navigation-inner {
            padding: 15px 18px 22px;
          }
        }

      `}</style>
    </>
  );
}