import React from 'react';
import { motion } from 'framer-motion';

const tools = [
    { name: 'JavaScript', id: 'js', color: '#F7DF1E' },
    { name: 'TypeScript', id: 'ts', color: '#3178C6' },
    { name: 'React Native', id: 'react', color: '#61DAFB' },
    { name: 'React JS', id: 'react', color: '#61DAFB' },
    { name: 'Node JS', id: 'nodejs', color: '#339933' },
    { name: 'Express JS', id: 'express', color: '#ffffff' },
    { name: 'MySQL', id: 'mysql', color: '#4479A1' },
    { name: 'PostgreSQL', id: 'postgresql', color: '#336791' },
    { name: 'Firebase', id: 'firebase', color: '#FFCA28' },
    { name: 'Supabase', id: 'supabase', color: '#3ECF8E' },
    { name: 'Tailwind', id: 'tailwind', color: '#06B6D4' },
    { name: 'Git', id: 'git', color: '#F05032' },
    { name: 'Figma', id: 'figma', color: '#F24E1E' },
    { name: 'Photoshop', id: 'ps', color: '#31A8FF' },
    {
        name: 'DaVinci Resolve',
        id: 'davinci',
        customIcon: 'https://static.vecteezy.com/system/resources/previews/067/941/730/non_2x/davinci-resolve-logo-davinci-resolve-icon-transparent-background-free-png.png',
        color: '#000000'
    },
    {
        name: 'Power BI',
        id: 'powerbi',
        customIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/960px-New_Power_BI_Logo.svg.png',
        color: '#F2C811'
    },
    {
        name: 'ChatGPT',
        id: 'openai',
        customIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png',
        color: '#10A37F'
    },
    {
        name: 'DeepSeek',
        id: 'deepseek',
        customIcon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.75.0/files/dark/deepseek-color.png',
        color: '#1F2937'
    },
    {
        name: 'AntiGravity',
        id: 'antigravity',
        customIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvinjxr8MVZ69diNIbNNMfcUljy04dIjkqPQ&s',
        color: '#FF6B00'
    }
];

const Skills = () => {
    return (
        <section className="section" id="skills">
            <div className="container" style={{ maxWidth: '1000px' }}>
                {/* Header */}
                <div className="flex flex-col md:flex-row items-baseline justify-between gap-2 mb-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="section-label"
                            style={{ fontSize: '0.65rem', marginBottom: '4px' }}
                        >
                            KNOWLEDGE IN
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="section-title"
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', lineHeight: 1.1 }}
                        >
                            Technical
                            <br />
                            <span className="text-accent" style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>Arsenal</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="section-subtitle"
                        style={{ textAlign: 'left', maxWidth: '300px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}
                    >
                        Engineering precision meets creative intuition, refined through building real-world products.
                    </motion.p>
                </div>

                {/* Tools Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                        gap: '10px'
                    }}>
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.03 }}
                            whileHover={{ y: -3, backgroundColor: 'var(--overlay-hover)' }}
                            style={{
                                padding: '14px 10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                background: 'var(--overlay-light)',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                textAlign: 'center',
                                cursor: 'default',
                                transition: 'background-color 0.2s ease'
                            }}
                        >
                            <div style={{
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '6px',
                                background: tool.id === 'express' ? 'var(--text-primary)' : 'var(--overlay-medium)',
                                borderRadius: '8px',
                                border: '1px solid var(--border)'
                            }}>
                                <img
                                    src={tool.customIcon || `https://skillicons.dev/icons?i=${tool.id}`}
                                    alt={tool.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        filter: tool.id === 'express' ? 'invert(1)' : 'none'
                                    }}
                                />
                            </div>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: 650,
                                color: 'var(--text-primary)',
                                letterSpacing: '0.01em',
                                whiteSpace: 'nowrap'
                            }}>
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
