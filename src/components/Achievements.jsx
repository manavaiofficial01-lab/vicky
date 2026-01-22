import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap, TrendingUp, Users } from 'lucide-react';

const achievements = [
    {
        title: 'CTO at 19 Years Old',
        description: 'Appointed as Chief Technology Officer at Rategle Technologies, leading engineering and design teams.',
        icon: <Trophy size={20} />,
        color: '#F59E0B',
        stat: 'Leadership'
    },
    {
        title: '25+ Products Launched',
        description: 'Successfully architected and deployed over 25 digital products across web and mobile platforms.',
        icon: <Target size={20} />,
        color: '#10B981',
        stat: 'Execution'
    },
    {
        title: '3+ Years in Full-Stack',
        description: 'A journey of continuous building, from initial hobby projects to industry-grade architectures.',
        icon: <TrendingUp size={20} />,
        color: '#3B82F6',
        stat: 'Experience'
    },
    {
        title: 'Media Recognition',
        description: 'Featured in multiple tech spotlights and interviews for technical contributions and leadership.',
        icon: <Star size={20} />,
        color: '#EC4899',
        stat: 'Spotlight'
    },
    {
        title: 'Team Management',
        description: 'Managed cross-functional teams of developers and designers to achieve product milestones.',
        icon: <Users size={20} />,
        color: '#8B5CF6',
        stat: 'Management'
    },
    {
        title: 'Performance Specialist',
        description: 'Specialized in optimizing application performance, achieving sub-second load times in production.',
        icon: <Zap size={20} />,
        color: '#EF4444',
        stat: 'Optimization'
    }
];

const Achievements = () => {
    return (
        <section className="section" id="achievements">
            <div className="container">
                {/* Header */}
                <div className="mb-12">
                    <span className="section-label">Milestones</span>
                    <h2 className="section-title">
                        Key <span className="text-accent">Achievements</span>
                    </h2>
                    <p className="section-subtitle">
                        A summary of technical milestones and leadership roles throughout my professional career.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid-3" style={{ gap: '20px' }}>
                    {achievements.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="card"
                            style={{
                                padding: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: item.color + '15',
                                border: `1px solid ${item.color}30`,
                                color: item.color
                            }}>
                                {item.icon}
                            </div>

                            <div>
                                <div style={{
                                    fontSize: '0.65rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    color: item.color,
                                    letterSpacing: '0.1em',
                                    marginBottom: '4px'
                                }}>
                                    {item.stat}
                                </div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    fontFamily: 'var(--font-display)'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.5
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
