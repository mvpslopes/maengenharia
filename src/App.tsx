import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import BIMTechnology from './components/BIMTechnology';
import Differentials from './components/Differentials';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Remove splash após animação (reduzido para melhor UX)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans">
      {showSplash && <SplashScreen />}
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Team />
        <Services />
        <BIMTechnology />
        <Differentials />
        <Projects />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
