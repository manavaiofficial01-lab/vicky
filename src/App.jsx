import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Showcase from './components/Showcase';
import Media from './components/Media';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON';
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isPointer ? 48 : 24,
        height: isPointer ? 48 : 24,
        borderRadius: '50%',
        border: '1.5px solid rgba(255, 255, 255, 0.3)',
        backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        opacity: isVisible ? 1 : 0
      }}
      animate={{
        x: position.x - (isPointer ? 24 : 12),
        y: position.y - (isPointer ? 24 : 12),
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
      className="hidden md:block"
    />
  );
};

function App() {
  const [theme, setTheme] = useState('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <CustomCursor />

      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--accent)',
          transformOrigin: 'left',
          scaleX,
          zIndex: 1000
        }}
      />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Skills />
        <Showcase />
        <Experience />
        <Achievements />
        <Certificates />
        <Media />
        <About />
        <CTA />
      </main>

      <Footer />

      {/* Noise Texture Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 50,
          opacity: 0.015,
          mixBlendMode: 'overlay',
          backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
        }}
      />
    </div>
  );
}

export default App;
