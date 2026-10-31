import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Flow from './Flow';
import Evolution from './Evolution';
import Video from './Video';
import FAQ from './FAQ';
import Footer from './Footer';

export default function App() {
  return (
    <div style={styles.appContainer}>
      <Navbar />
      <Hero />
      <Features />
      <Flow />
      <Evolution />
      <Video />
      <FAQ />
     <Footer />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#FAF5FF', // Same soft tint as the navbar
  },
};