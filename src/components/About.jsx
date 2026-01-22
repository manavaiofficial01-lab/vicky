import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code, Heart, MapPin, Coffee } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const stats = [
        { label: 'Videos Edited', value: '10+' },
        { label: 'Creative Projects', value: '10+' },
        { label: 'Tech Stack', value: '20+' },
    ];

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="card" style={{ padding: 8, borderRadius: 32 }}>
                            <div style={{
                                borderRadius: 24,
                                overflow: 'hidden',
                                aspectRatio: '4/5',
                                background: 'var(--bg-secondary)'
                            }}>
                                <img
                                    src={profileImg}
                                    alt="Vignesh"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="card-glass"
                            style={{
                                position: 'relative',
                                marginTop: -60,
                                marginLeft: 'auto',
                                marginRight: 24,
                                width: 'fit-content',
                                padding: '10px 16px',
                                borderRadius: 14,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8
                            }}
                        >
                            <div style={{
                                width: 34,
                                height: 34,
                                borderRadius: 10,
                                background: 'rgba(236, 72, 153, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Heart size={20} style={{ color: '#EC4899', fill: '#EC4899' }} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Status</p>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>Passionate Builder</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="section-label">About Me</span>
                        <h2 className="section-title">
                            Video Editor &<br />
                            <span className="text-accent">Vibe Coder</span>
                        </h2>

                        <div style={{ marginBottom: 20 }}>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: 16
                            }}>
                                I'm <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>K Modha Vignesh</span>, a 19-year-old Video Editor & Vibe Coder from Tamil Nadu, India. With 3+ years of creative experience,
                                I specialize in cinematic video editing using DaVinci Resolve and crafting elegant web experiences with modern tech stacks.
                            </p>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.7
                            }}>
                                My expertise spans <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>professional video production</span> (color grading, motion graphics, storytelling),
                                paired with full-stack development skills. I have the ability to develop full-featured applications from scratch to production within 20 days—combining
                                AI tools like ChatGPT and DeepSeek with rapid development practices to deliver high-quality digital solutions that captivate audiences.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid-3" style={{ gap: 12, marginBottom: 24 }}>
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="card"
                                    style={{ padding: 16, textAlign: 'center', cursor: 'pointer' }}
                                >
                                    <p style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 800,
                                        fontFamily: 'var(--font-display)',
                                        marginBottom: 4
                                    }}>
                                        {stat.value}
                                    </p>
                                    <p style={{
                                        fontSize: '0.7rem',
                                        color: 'var(--text-muted)',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                            <MapPin size={14} />
                            <span style={{ fontSize: '0.8rem' }}>Based in Tamil Nadu, India • Working Globally</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
