import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            {/* Background Effects */}
            <div className="glow glow-accent" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />
            <div className="glow glow-purple" style={{ bottom: '-20%', right: '-10%', opacity: 0.2 }} />

            <div className="container relative" style={{ zIndex: 10 }}>
                <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="tag mb-4"
                        style={{ margin: '0 auto 16px' }}
                    >
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', animation: 'pulse 2s infinite' }} />
                        Video Editor & Vibe Coder • Open to Work
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-gradient"
                        style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3rem)', marginBottom: '12px', lineHeight: 1.1 }}
                    >
                        Crafting Cinematic
                        <br />
                        Digital Experiences
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto 20px', lineHeight: 1.4 }}
                    >
                        I'm <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Vignesh</span>, a 19-year-old Video Editor & Vibe Coder
                        who transforms raw footage into captivating narratives with cutting-edge AI tech and creative coding.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex items-center justify-center gap-4"
                        style={{ flexWrap: 'wrap' }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Portfolio
                            <Rocket size={18} />
                        </a>
                        <a href="/K MODHA VIGNESH RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            Download CV
                        </a>
                        <a href="#contact" className="btn btn-outline" style={{
                            background: 'var(--overlay-light)',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            border: '1px solid var(--border)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            transition: 'var(--transition)'
                        }}>
                            Get in Touch
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex items-center justify-center gap-4"
                        style={{ marginTop: '48px' }}
                    >
                        {[
                            { icon: <Github size={20} />, href: 'https://github.com/dagger983' },
                            { icon: <Linkedin size={20} />, href: 'https://in.linkedin.com/in/modha-vignesh-k-vicky-6a3631333?trk=public_post_follow-view-profile' },
                            { icon: <Instagram size={20} />, href: 'https://www.instagram.com/vicky03.exe/' }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                style={{
                                    color: 'var(--text-muted)',
                                    transition: 'var(--transition)',
                                    padding: '12px'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute hidden md:flex flex-col items-center gap-2"
                style={{ bottom: '48px', left: '50%', transform: 'translateX(-50%)' }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ArrowDown size={20} style={{ color: 'var(--text-muted)' }} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
