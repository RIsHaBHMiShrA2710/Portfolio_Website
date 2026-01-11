import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaFileAlt, FaMedal, FaChartLine } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import './AchievementsPage.css';

const codingPlatforms = [
    {
        name: 'LeetCode',
        icon: SiLeetcode,
        color: '#ffa116',
        bgGradient: 'linear-gradient(135deg, #ffa116 0%, #ffb84d 100%)',
        stats: [
            { label: 'Problems Solved', value: '750+' },
            { label: 'Rating', value: '1870+' },
            { label: 'Rank', value: 'Knight' },
        ],
        link: 'https://leetcode.com/RishabhMishra2710',
    },
    {
        name: 'CodeChef',
        icon: SiCodechef,
        color: '#5b4638',
        bgGradient: 'linear-gradient(135deg, #5b4638 0%, #8b6914 100%)',
        stats: [
            { label: 'Rating', value: '1750+' },
            { label: 'Stars', value: '4★' },
        ],
        link: 'https://www.codechef.com/',
    },
    {
        name: 'Codeforces',
        icon: SiCodeforces,
        color: '#00b894',
        bgGradient: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
        stats: [
            { label: 'Rank', value: 'Specialist' },
            { label: 'Rating', value: '1400+' },
        ],
        link: 'https://codeforces.com/',
    },
];

const otherAchievements = [
    {
        icon: FaFileAlt,
        title: 'Research Paper Published',
        description: '"Event Identification and Chronology Model for Ramayana" accepted at IEMTech 2025',
        color: '#00b894',
    },
    {
        icon: FaMedal,
        title: 'Accenture Internship',
        description: 'Associate Software Engineer Intern - Built chatbot for Oracle EPM team',
        color: '#00cec9',
    },
    {
        icon: FaChartLine,
        title: 'Academic Excellence',
        description: 'CGPA 9.0/10 in B.Tech CSE (AI) at IEM Kolkata',
        color: '#e17055',
    },
];

const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
};

function AchievementsPage() {
    return (
        <motion.div
            className="page achievements-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
            <div className="achievements-content">
                <motion.div
                    className="page-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="page-title">
                        <FaTrophy className="title-icon" />
                        Achievements
                    </h2>
                    <p className="page-subtitle">Competitive programming stats and accomplishments</p>
                </motion.div>

                {/* Coding Platforms Grid */}
                <div className="platforms-section">
                    <h3 className="section-label">Coding Platforms</h3>
                    <div className="platforms-grid">
                        {codingPlatforms.map((platform, index) => {
                            const Icon = platform.icon;
                            return (
                                <motion.a
                                    key={platform.name}
                                    href={platform.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="platform-card glass-card magnetic"
                                    style={{ '--platform-color': platform.color }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                >
                                    <div className="platform-header">
                                        <Icon className="platform-icon" />
                                        <span className="platform-name">{platform.name}</span>
                                    </div>
                                    <div className="platform-stats">
                                        {platform.stats.map((stat, i) => (
                                            <div key={i} className="stat-row">
                                                <span className="stat-label">{stat.label}</span>
                                                <span className="stat-value">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="platform-glow" style={{ background: platform.bgGradient }} />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>

                {/* Other Achievements */}
                <div className="other-section">
                    <h3 className="section-label">Other Accomplishments</h3>
                    <div className="achievements-list">
                        {otherAchievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="achievement-item glass-card"
                                    style={{ '--achievement-color': achievement.color }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <div className="achievement-icon-wrapper">
                                        <Icon className="achievement-icon" />
                                    </div>
                                    <div className="achievement-content">
                                        <h4 className="achievement-title">{achievement.title}</h4>
                                        <p className="achievement-desc">{achievement.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default AchievementsPage;
