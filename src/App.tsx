import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import FeaturesPage from './Features';
import Flow from './Flow';
import Evolution from './Evolution';
import Video from './Video';
import FAQ from './FAQ';
import Footer from './Footer';
import PricingPage from './Pricing';
import SmartEdufySignIn from './Signin';

type Page = 'home' | 'features' | 'pricing' | 'signin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const savedPage = localStorage.getItem('smartEdufy_page');
    if (
      savedPage === 'features' ||
      savedPage === 'pricing' ||
      savedPage === 'signin'
    ) {
      return savedPage;
    }
    return 'home';
  });

  useEffect(() => {
    localStorage.setItem('smartEdufy_page', currentPage);
  }, [currentPage]);

  const handlePageChange = (page: string, sectionId?: string) => {
    const nextPage = page as Page;
    const pageChanged = nextPage !== currentPage;

    setCurrentPage(nextPage);

    if (sectionId) {
      if (pageChanged) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 250);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else if (pageChanged) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const showHeaderFooter = currentPage !== 'signin';

  return (
    <div style={styles.appContainer}>
      {showHeaderFooter && (
        <Navbar
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
        />
      )}

      <main style={styles.mainContent}>
        {currentPage === 'home' && (
          <>
            <Hero setCurrentPage={handlePageChange} />

            <section id="about" className="app-scroll-section">
              <About />
            </section>

            <Flow />
            <Evolution />
            <Video />

            <section id="faq" className="app-scroll-section">
              <FAQ />
            </section>
          </>
        )}

        {currentPage === 'features' && (
          <FeaturesPage setCurrentPage={handlePageChange} />
        )}

        {currentPage === 'pricing' && <PricingPage />}

        {currentPage === 'signin' && (
          <SmartEdufySignIn setCurrentPage={handlePageChange} />
        )}
      </main>

      {showHeaderFooter && <Footer setCurrentPage={handlePageChange} />}

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .app-scroll-section {
          scroll-margin-top: 90px;
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
    backgroundColor: '#FDF8FF',
    overflowX: 'hidden',
  },
  mainContent: {
    flex: 1,
    width: '100%',
  },
};