import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Award, Rocket } from 'lucide-react';

const experiences = [
    {
        role: 'Video Editor & Vibe Coder',
        company: 'Freelance',
        period: 'Jan 2026 - Present',
        desc: 'Creating cinematic video content and building elegant digital experiences for diverse clients. Specializing in DaVinci Resolve editing, AI-powered creative enhancement, and full-stack web development.',
        icon: <Briefcase size={20} />,
        tags: ['Video Editing', 'DaVinci Resolve', 'Creative Development']
    },
    {
        role: 'Head of Creative & Video Production',
        company: 'Rategle Technologies',
        period: 'Jun 2024 - Dec 2025',
        desc: 'Led the Video Editing and Creative teams, producing professional content and establishing creative workflows. Managed production pipelines for 50+ videos and optimized team efficiency with modern tools.',
        icon: <Rocket size={20} />,
        tags: ['Video Production', 'Team Leadership', 'Creative Strategy']
    },
    {
        role: 'Video Editor & Junior Developer',
        company: 'Rategle Technologies',
        period: 'Mar 2023 - May 2024',
        desc: 'Started as a junior developer and video enthusiast, transitioned to professional video editing. Mastered DaVinci Resolve, color grading, motion graphics, and integrated coding skills into creative projects.',
        icon: <Award size={20} />,
        tags: ['Video Editing', 'Learning', 'Growth']
    }
];

const Experience = () => {
    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="flex flex-col gap-6" style={{ maxWidth: '800px' }}>
                    {/* Header */}
                    <div>
                        <span className="section-label">Journey</span>
                        <h2 className="section-title">
                            Creative <span className="text-accent">Experience</span>
                        </h2>
                        <p className="section-subtitle">
                            A portfolio of video productions and digital creative projects that showcase cinematic storytelling and technical expertise.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-6">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 12,
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Top Row */}
                                <div className="flex items-start gap-4" style={{ flexWrap: 'wrap' }}>
                                    {/* Icon */}
                                    <div style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 10,
                                        background: 'rgba(79, 70, 229, 0.1)',
                                        border: '1px solid rgba(79, 70, 229, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--accent-light)',
                                        flexShrink: 0
                                    }}>
                                        {exp.icon}
                                    </div>

                                    {/* Info */}
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            marginBottom: 4,
                                            fontFamily: 'var(--font-display)'
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.825rem',
                                            color: 'var(--text-secondary)'
                                        }}>
                                            {exp.company} <span style={{ color: 'var(--text-muted)' }}>•</span> {exp.period}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.5
                                }}>
                                    {exp.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                                    {exp.tags.map((tag, ti) => (
                                        <span
                                            key={ti}
                                            className="tag"
                                            style={{ background: 'var(--bg-secondary)' }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
