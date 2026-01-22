import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Tv, Youtube } from 'lucide-react';

const mediaItems = [
    {
        title: 'Featured Interview: 19-Year-Old CTO',
        source: 'Tech Spotlight',
        link: 'https://youtu.be/cB24RSk5yks',
        image: 'https://img.youtube.com/vi/cB24RSk5yks/maxresdefault.jpg',
        description: 'Discussing the future of full-stack development and building products that scale.'
    },
    {
        title: 'Young Innovator Recognition',
        source: 'Media Feature',
        link: 'https://youtube.com/shorts/_dYPusam-C4',
        image: 'https://img.youtube.com/vi/_dYPusam-C4/maxresdefault.jpg',
        description: 'Breaking barriers in tech as a young entrepreneur and creator.'
    },
    {
        title: 'Photoshop Mastery Course',
        source: 'Tamil Creator Collab',
        link: 'https://www.youtube.com/watch?v=DIKP-qxUJp8',
        image: 'https://img.youtube.com/vi/DIKP-qxUJp8/maxresdefault.jpg',
        description: 'Comprehensive Photoshop course created in collaboration with Tamil content creator.'
    }
];

const Media = () => {
    return (
        <section className="section" id="media">
            <div className="container">
                {/* Header */}
                <div className="mb-8">
                    <span className="section-label">Recognition</span>
                    <h2 className="section-title">
                        In The <span className="text-accent">Spotlight</span>
                    </h2>
                    <p className="section-subtitle">
                        Featured in media for technical leadership and innovative thinking.
                    </p>
                </div>

                {/* Media Grid */}
                <div className="grid-3" style={{ gap: '16px' }}>
                    {mediaItems.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="card"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                textDecoration: 'none'
                            }}
                        >
                            {/* Video Thumbnail */}
                            <div style={{
                                position: 'relative',
                                aspectRatio: '16/9',
                                overflow: 'hidden',
                                background: 'var(--bg-secondary)'
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s var(--ease-out)'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />

                                {/* Play Button Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.3s ease'
                                }}>
                                    <div style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.95)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#000',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <Play size={20} fill="currentColor" style={{ marginLeft: 3 }} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '16px 20px 20px' }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Youtube size={14} style={{ color: '#FF0000' }} />
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {item.source}
                                    </span>
                                </div>

                                <h3 style={{
                                    fontSize: '1.05rem',
                                    fontWeight: 700,
                                    marginBottom: 8,
                                    fontFamily: 'var(--font-display)'
                                }}>
                                    {item.title}
                                </h3>

                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.5,
                                    marginBottom: 12
                                }}>
                                    {item.description}
                                </p>

                                <span className="flex items-center gap-2" style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--accent-light)'
                                }}>
                                    Watch Now <ExternalLink size={12} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Media;
