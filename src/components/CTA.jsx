import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, ArrowUpRight, Phone } from 'lucide-react';

const CTA = () => {
    return (
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="card"
                    style={{
                        padding: 'clamp(24px, 5vw, 40px)',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 32
                    }}
                >
                    {/* Background Gradient */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                        opacity: 0.08,
                        pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span className="section-label">Let's Connect</span>

                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 4.5vw, 2.25rem)',
                            fontWeight: 700,
                            fontFamily: 'var(--font-display)',
                            marginBottom: 16,
                            lineHeight: 1.1
                        }}>
                            Ready to Transform
                            <br />
                            <span className="text-accent">Your Creative Vision?</span>
                        </h2>

                        <p style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '440px',
                            margin: '0 auto 24px',
                            lineHeight: 1.5
                        }}>
                            I'm actively seeking opportunities in video editing and creative development roles.
                            Let's connect and explore how I can bring cinematic quality and technical excellence to your team.
                        </p>

                        {/* CTAs */}
                        <div className="flex items-center justify-center gap-3" style={{ flexWrap: 'wrap', marginBottom: 24 }}>
                            <a href="mailto:kmvignesh1406@gmail.com" className="btn btn-primary">
                                Let's Talk
                                <Mail size={18} />
                            </a>
                            <a href="/K MODHA VIGNESH RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                View Resume
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div style={{
                            paddingTop: 24,
                            borderTop: '1px solid var(--border)',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 24,
                            flexWrap: 'wrap'
                        }}>
                            <a
                                href="tel:+919442011620"
                                className="flex items-center gap-2"
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                <Phone size={16} />
                                +91 9442011620
                            </a>
                            <a
                                href="mailto:kmvignesh1406@gmail.com"
                                className="flex items-center gap-2"
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                <Mail size={16} />
                                kmvignesh1406@gmail.com
                            </a>
                            <a
                                href="https://in.linkedin.com/in/modha-vignesh-k-vicky-6a3631333"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                <ArrowUpRight size={16} />
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
