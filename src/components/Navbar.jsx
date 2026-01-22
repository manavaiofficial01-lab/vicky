import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'About', href: '#about' },
        { name: 'Resume', href: '/K MODHA VIGNESH RESUME.pdf', external: true },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed w-full"
            style={{
                top: 0,
                left: 0,
                zIndex: 100,
                padding: isScrolled ? '8px 0' : '12px 0',
                background: isScrolled ? 'var(--bg-primary)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                opacity: isScrolled ? 0.95 : 1,
                borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
                transition: 'var(--transition)'
            }}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-primary)' }}>
                    Vignesh
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.external ? "_blank" : "_self"}
                            rel={link.external ? "noopener noreferrer" : ""}
                            style={{
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: 'var(--text-secondary)',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-4 pl-4" style={{ borderLeft: '1px solid var(--border)' }}>
                        {/* Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyCenter: 'center',
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-primary)',
                                overflow: 'hidden',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '200%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                transition: 'transform 0.5s var(--ease-out)',
                                transform: theme === 'light' ? 'translateY(25%)' : 'translateY(-25%)'
                            }}>
                                <Sun size={18} />
                                <Moon size={18} />
                            </div>
                        </motion.button>

                        <a href="#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.7rem' }}>
                            Contact
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        style={{ color: 'var(--text-primary)', padding: 8 }}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ color: 'var(--text-primary)', padding: 8 }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            borderTop: '1px solid var(--border)',
                            overflow: 'hidden'
                        }}
                    >
                        <div className="container" style={{ padding: '32px 24px' }}>
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target={link.external ? "_blank" : "_self"}
                                        rel={link.external ? "noopener noreferrer" : ""}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 600,
                                            fontFamily: 'var(--font-display)',
                                            color: 'var(--text-primary)'
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a href="#contact" className="btn btn-primary w-full" style={{ marginTop: 16 }}>
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
