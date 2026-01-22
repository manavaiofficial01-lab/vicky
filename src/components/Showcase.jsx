import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Smartphone, Globe, Apple, Play } from 'lucide-react';

const projects = {
    mobile: [
        {
            title: 'Jas and Yas Auto',
            category: 'Booking & Shopping App',
            tech: ['React Native', 'iOS', 'Android'],
            desc: 'Your ultimate auto-rickshaw booking & shopping companion. Book rides, shop essentials, and enjoy seamless service on both platforms.',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
            links: {
                ios: 'https://apps.apple.com/us/app/jasandyasauto/id6755973774',
                android: 'https://play.google.com/store/apps/details?id=com.JasandYasAuto&hl=en_IN'
            },
            type: 'mobile'
        },
        {
            title: 'Manavai: Shop & Eat in One',
            category: 'Food Delivery App',
            tech: ['React Native', 'Supabase', 'Firebase'],
            desc: 'Full-featured food delivery app like Swiggy with real-time push notifications, order tracking, and seamless payment integration.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200',
            link: 'https://play.google.com/store/apps/details?id=com.manavai.Manavai&hl=en_IN',
            type: 'mobile'
        }
    ],
    web: [
        {
            title: 'Trichy Gold Company',
            category: 'Business Website',
            tech: ['React', 'Node.js', 'Responsive'],
            desc: 'Professional gold jewelry business website with elegant product showcase and contact integration.',
            image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=1200',
            link: 'https://trichygoldcompany.in/',
            type: 'web'
        },
        {
            title: 'OM Scrap Buyers',
            category: 'Business Website',
            tech: ['React', 'Responsive Design', 'SEO'],
            desc: 'Professional scrap buying business website with service listings and contact integration.',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200',
            link: 'https://omscrapbuyers.in/',
            type: 'web'
        },
        {
            title: 'Anbulkamal Furniture',
            category: 'Business Website',
            tech: ['React', 'UI/UX', 'Product Catalog'],
            desc: 'Elegant furniture showcase website with product catalog and customer inquiry system.',
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
            link: 'https://anbulkamalfurniture.in/',
            type: 'web'
        }
    ],
    video: [
        {
            title: 'Lakhs to Crores Growth',
            category: 'Business Strategy',
            tech: ['DaVinci Resolve', 'Vfx'],
            desc: 'High-impact business growth strategy reel featuring dynamic 3D text animations and professional studio editing.',
            link: 'https://www.instagram.com/reel/DMX1Y9szspD/',
            type: 'video'
        },
        {
            title: 'Future of Tech in Business',
            category: 'Tech & AI',
            tech: ['DaVinci Resolve', 'Cinematography'],
            desc: 'Cinematic discussion on technology integration in modern business, featuring moody red lighting and crisp edits.',
            link: 'https://www.instagram.com/reel/DMadl2tpFyH/',
            type: 'video'
        },
        {
            title: 'Communication in Tech',
            category: 'Career Advice',
            tech: ['DaVinci Resolve', 'Sound Design'],
            desc: 'Energetic video highlighting the importance of soft skills in the technical world with high-key studio visuals.',
            link: 'https://www.instagram.com/reel/DMc9vwXuIpc/',
            type: 'video'
        },
        {
            title: 'Mastering Core Skills',
            category: 'Education',
            tech: ['DaVinci Resolve', 'Color Grading'],
            desc: 'Unique aesthetic edit featuring newspaper-print textures and high-contrast visuals focusing on skill development.',
            link: 'https://www.instagram.com/reel/DMfZd3spp51/',
            type: 'video'
        },
        {
            title: 'Navigating the Tech Stack',
            category: 'Developer Roadmap',
            tech: ['DaVinci Resolve', 'Visual FX'],
            desc: 'Educational reel with floating software logos and vibrant neon aesthetics guiding developers on their path.',
            link: 'https://www.instagram.com/reel/DMiA0fepTJa/',
            type: 'video'
        },
        {
            title: 'College Productivity Hacks',
            category: 'Student Life',
            tech: ['DaVinci Resolve', 'Cinematic Edits'],
            desc: 'Fast-paced, engaging student guide featuring minimalist grid backgrounds and trendy visual accents.',
            link: 'https://www.instagram.com/reel/DMsRONWpEt3/',
            type: 'video'
        },
        {
            title: 'Visual Storytelling',
            category: 'Creative Edit',
            tech: ['DaVinci Resolve', 'Cinematics'],
            desc: 'High-end visual production with ultra-smooth transitions and precisely timed rhythmic pacing.',
            link: 'https://www.instagram.com/p/DMyl0qDRYDN/',
            type: 'video'
        }
    ]
};

const Showcase = () => {
    const [activeTab, setActiveTab] = useState('mobile');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const tabs = [
        { id: 'video', label: 'Edits', icon: <Play size={16} /> },
        { id: 'mobile', label: 'Mobile', icon: <Smartphone size={16} /> },
        { id: 'web', label: 'Websites', icon: <Globe size={16} /> }
    ];

    return (
        <section className="section relative" id="projects">
            {/* Background Accent */}
            <div className="glow glow-accent" style={{
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                opacity: 0.15,
                width: '80%',
                height: '60%'
            }} />

            <div className="container relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
                    <div style={{ maxWidth: 640 }}>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-label"
                        >
                            Selected Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="section-title"
                        >
                            Crafting Digital <span className="text-accent">Experiences</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="section-subtitle"
                        >
                            A showcase of cross-platform apps, responsive web architectures, and cinematic video storytelling.
                        </motion.p>
                    </div>

                    {/* Premium Segmented Control Tabs */}
                    <div className="segmented-control min-w-[320px] md:min-w-[420px]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`segmented-button ${activeTab === tab.id ? 'active' : ''}`}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                            </button>
                        ))}
                        <motion.div
                            className="segmented-bg"
                            animate={{
                                left: `${(tabs.findIndex(t => t.id === activeTab) * (100 / tabs.length))}%`,
                                width: `${100 / tabs.length}%`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                width: '33.33%',
                                zIndex: 0
                            }}
                        />
                    </div>
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="grid-3"
                        style={{ gap: '16px' }}
                    >
                        {projects[activeTab].map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0, 0, 0, 0.3)' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="card"
                                style={{
                                    padding: 0,
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Media Container */}
                                <div style={{
                                    position: 'relative',
                                    aspectRatio: project.type === 'video' ? '9/15.5' : '16/9',
                                    overflow: 'hidden',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: project.type === 'video' ? 'var(--radius-lg) var(--radius-lg) 0 0' : 0
                                }}>
                                    {project.type === 'video' ? (
                                        <div style={{ height: '100%', width: '100%', position: 'relative' }}>
                                            <iframe
                                                src={`${project.link}embed/`}
                                                width="100%"
                                                height="100%"
                                                frameBorder="0"
                                                scrolling="no"
                                                allowTransparency="true"
                                                allow="encrypted-media"
                                                loading="lazy"
                                                style={{
                                                    border: 'none',
                                                    height: '100%',
                                                    width: '100%',
                                                    background: 'var(--bg-card)',
                                                    display: 'block',
                                                    position: 'relative',
                                                    zIndex: 2
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                inset: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 1
                                            }}>
                                                <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>
                                                    <Play size={32} />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.8s var(--ease-out)',
                                                    transform: hoveredIndex === i ? 'scale(1.08)' : 'scale(1)'
                                                }}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                                                opacity: hoveredIndex === i ? 1 : 0,
                                                transition: 'opacity 0.4s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: 20
                                            }}>
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: hoveredIndex === i ? 1 : 0.8, opacity: hoveredIndex === i ? 1 : 0 }}
                                                    className="flex flex-col gap-3 w-full max-w-[160px]"
                                                >
                                                    {project.type === 'mobile' && project.links ? (
                                                        <>
                                                            <a
                                                                href={project.links.ios}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn btn-primary"
                                                                style={{ padding: '10px 14px', fontSize: '0.75rem', background: '#fff', color: '#000' }}
                                                            >
                                                                <Apple size={16} /> App Store
                                                            </a>
                                                            <a
                                                                href={project.links.android}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn btn-secondary"
                                                                style={{
                                                                    padding: '10px 14px',
                                                                    fontSize: '0.75rem',
                                                                    background: 'rgba(255,255,255,0.12)',
                                                                    color: '#fff',
                                                                    backdropFilter: 'blur(12px)',
                                                                    border: '1px solid rgba(255,255,255,0.2)'
                                                                }}
                                                            >
                                                                <Play size={16} fill="currentColor" /> Play Store
                                                            </a>
                                                        </>
                                                    ) : (
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary"
                                                            style={{
                                                                fontSize: '0.8rem',
                                                                fontWeight: 600,
                                                                padding: '12px 20px',
                                                                background: '#fff',
                                                                color: '#000',
                                                                width: '100%'
                                                            }}
                                                        >
                                                            Visit Live Site <ArrowUpRight size={16} />
                                                        </a>
                                                    )}
                                                </motion.div>
                                            </div>
                                        </>
                                    )}

                                    {project.type === 'video' && (
                                        <div style={{
                                            position: 'absolute',
                                            top: 12,
                                            right: 12,
                                            background: 'rgba(0,0,0,0.6)',
                                            backdropFilter: 'blur(12px)',
                                            padding: '4px 10px',
                                            borderRadius: 'var(--radius-sm)',
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            color: '#fff',
                                            letterSpacing: '0.1em',
                                            pointerEvents: 'none',
                                            zIndex: 10,
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            REEL
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div style={{ padding: '16px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginBottom: '12px'
                                    }}>
                                        <div style={{
                                            fontSize: '0.6rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            color: 'var(--accent)',
                                            background: 'var(--accent-glow)',
                                            padding: '4px 12px',
                                            borderRadius: '100px',
                                            border: '1px solid var(--accent-light)',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0
                                        }}>
                                            {project.category}
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            alignItems: 'center'
                                        }}>
                                            {project.tech.slice(0, 2).map((t, ti) => (
                                                <span key={ti} style={{
                                                    fontSize: '0.65rem',
                                                    color: 'var(--text-muted)',
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    {t}{ti < project.tech.slice(0, 2).length - 1 && ' •'}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.05rem',
                                        fontWeight: 800,
                                        marginBottom: 8,
                                        fontFamily: 'var(--font-display)',
                                        letterSpacing: '-0.01em',
                                        color: 'var(--text-primary)'
                                    }}>
                                        {project.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.5,
                                        marginBottom: 0
                                    }}>
                                        {project.desc}
                                    </p>

                                    {project.type === 'mobile' && (
                                        <div className="flex gap-2 mt-auto pt-6">
                                            <span className="tag" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                                                <Apple size={12} /> iOS App
                                            </span>
                                            <span className="tag" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                                                <Play size={10} /> Android
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Showcase;
