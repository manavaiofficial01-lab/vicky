import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Command } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: '/K MODHA VIGNESH RESUME.pdf' },
    ];

    const socials = [
        { icon: <Github size={18} />, href: 'https://github.com/dagger983', label: 'GitHub' },
        { icon: <Linkedin size={18} />, href: 'https://in.linkedin.com/in/modha-vignesh-k-vicky-6a3631333?trk=public_post_follow-view-profile', label: 'LinkedIn' },
        { icon: <Instagram size={18} />, href: 'https://www.instagram.com/vicky03.exe/', label: 'Instagram' },
        { icon: <Youtube size={18} />, href: 'https://youtu.be/cB24RSk5yks', label: 'YouTube' },
    ];

    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 32,
            paddingBottom: 16
        }}>
            <div className="container">
                {/* Main Footer */}
                <div className="grid-2" style={{ gap: 32, marginBottom: 32 }}>
                    {/* Left - Brand */}
                    <div>
                        <a href="#" className="flex items-center gap-3 mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>
                            <div style={{
                                width: 32,
                                height: 32,
                                background: '#fff',
                                borderRadius: 8,
                                display: 'flex',
                                alignItems: 'center',
                                justifyCenter: 'center',
                                color: '#000'
                            }}>
                                <Command size={16} />
                            </div>
                            Vignesh
                        </a>
                        <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            maxWidth: 280,
                            lineHeight: 1.5,
                            marginBottom: 16
                        }}>
                            Building exceptional digital experiences as a 19-year-old CTO and Full-Stack Architect.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-2">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 8,
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        transition: 'var(--transition)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.borderColor = 'var(--border-hover)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--text-muted)';
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Links & Status */}
                    <div className="grid-2" style={{ gap: 32 }}>
                        {/* Navigation */}
                        <div>
                            <h4 style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'var(--text-muted)',
                                marginBottom: 20
                            }}>
                                Navigation
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)',
                                                transition: 'color 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#fff'}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Status */}
                        <div>
                            <h4 style={{
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'var(--text-muted)',
                                marginBottom: 20
                            }}>
                                Status
                            </h4>
                            <div className="flex items-center gap-2 mb-3">
                                <span style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: '#22C55E'
                                }} />
                                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Available for Projects</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                                Based in Tamil Nadu, India
                                <br />
                                GMT +5:30
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="flex items-center justify-between"
                    style={{
                        paddingTop: 24,
                        borderTop: '1px solid var(--border)',
                        flexWrap: 'wrap',
                        gap: 16
                    }}
                >
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        © 2026 K Modha Vignesh. Crafted with precision.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2"
                        style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--text-muted)',
                            transition: 'color 0.2s ease',
                            padding: '6px 0'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                        Back to Top
                        <ArrowUp size={12} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
