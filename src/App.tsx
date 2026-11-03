import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Flow from './Flow';
import Evolution from './Evolution';
import Video from './Video';
import FAQ from './FAQ';
import Footer from './Footer';
import AboutPage from './About'; // Update path if your file name differs
import PricingPage from './Pricing';

export default function App() {
  // Initialize state from localStorage so refreshes remember your current page
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('smartEdufy_page') || 'home';
  });

  // Save page state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('smartEdufy_page', currentPage);
  }, [currentPage]);

  // Handle page transitions with smooth scroll to top
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.appContainer}>
      {/* Navbar with page switcher */}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      
      {/* Dynamic Main View */}
      <main style={styles.mainContent}>
        {currentPage === 'home' && (
          <>
            <Hero setCurrentPage={handlePageChange} />
            <Features />
            <Flow />
            <Evolution />
            <Video />
            <FAQ />
          </>
        )}
        
        {currentPage === 'about' && <AboutPage setCurrentPage={handlePageChange} />}
        
        {currentPage === 'pricing' && <PricingPage />}
      </main>

      {/* Footer with page switching links */}
      <Footer setCurrentPage={handlePageChange} />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    backgroundColor: '#FDF8FF',
  },
  mainContent: {
    flex: 1,
    width: '100%',
  },
};