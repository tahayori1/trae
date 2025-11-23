import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Technology from './components/Technology';
import Dealers from './components/Dealers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <Technology />
        <Dealers />
      </main>
      <Footer />
    </div>
  );
}

export default App;