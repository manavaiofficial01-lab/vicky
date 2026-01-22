import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye } from 'lucide-react';

const certificates = [
    {
        title: 'Dynamic Web Application with JavaScript',
        issuer: 'CCBP 4.0 Academy',
        image: '/Certi - 2.png'
    },
    {
        title: 'Static Website Development',
        issuer: 'CCBP 4.0 Academy',
        image: '/Certi - 3.png'
    },
    {
        title: 'Responsive Website Development',
        issuer: 'CCBP 4.0 Academy',
        image: '/Certi - 4.png'
    },
    {
        title: 'Web Development Internship',
        issuer: 'InternIQ',
        image: '/Certi - 5.png'
    }
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    return (
        <section className="section" id="certificates" style={{ paddingTop: 0 }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                {/* Header */}
                <div className="mb-8">
                    <span className="section-label">Credentials</span>
                    <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
                        Professional <span className="text-accent">Certificates</span>
                    </h2>
                    <p className="section-subtitle">
                        Continuous learning and validation of architectural and creative mastery.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px'
                }}>
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -8, boxShadow: '0 16px 32px rgba(79, 70, 229, 0.2)' }}
                            onClick={() => setSelectedCert(cert)}
                            className="card"
                            style={{
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: '16px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {/* Image */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '9/12',
                                overflow: 'hidden',
                                background: 'var(--bg-secondary)',
                                position: 'relative'
                            }}>
                                <img 
                                    src={cert.image} 
                                    alt={cert.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                
                                {/* Eye Icon Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(4px)'
                                    }}
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.6, repeat: Infinity }}
                                    >
                                        <Eye size={32} style={{ color: '#fff', opacity: 0.9 }} />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Info */}
                            <div style={{
                                padding: '14px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px'
                            }}>
                                <h3 style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-display)'
                                }}>
                                    {cert.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.7rem',
                                    color: 'var(--text-muted)',
                                    fontWeight: 500
                                }}>
                                    {cert.issuer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Full View Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '16px'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: 'relative',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                borderRadius: '16px',
                                overflow: 'hidden'
                            }}
                        >
                            <img 
                                src={selectedCert.image} 
                                alt={selectedCert.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    maxHeight: '90vh'
                                }}
                            />
                            
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCert(null)}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(0, 0, 0, 0.7)',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#fff',
                                    transition: 'background 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.9)'}
                                onMouseLeave={(e) => e.target.style.background = 'rgba(0, 0, 0, 0.7)'}
                            >
                                <X size={20} />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
