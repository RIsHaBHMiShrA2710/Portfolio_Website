import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaTrophy } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodeforces } from 'react-icons/si';
import './ProfileStats.css';

const codingProfiles = [
    {
        name: 'LeetCode',
        icon: SiLeetcode,
        color: '#ffa116',
        stat: '200+',
        label: 'Problems'
    },
    {
        name: 'GitHub',
        icon: FaGithub,
        color: '#ffffff',
        stat: '50+',
        label: 'Repos'
    },
    {
        name: 'HackerRank',
        icon: SiHackerrank,
        color: '#00ea64',
        stat: '5★',
        label: 'Rating'
    },
];

function ProfileStats() {
    return (
        <aside className="profile-stats">
            {/* Mini Profile Card */}
            <motion.div
                className="mini-profile glass-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <img
                    src="https://i.imgur.com/0tepHqb.png"
                    alt="Rishabh Mishra"
                    className="mini-avatar"
                />
                <div className="mini-info">
                    <h4 className="mini-name">Rishabh Mishra</h4>
                    <span className="mini-role">Full Stack Developer</span>
                </div>
            </motion.div>

            {/* Coding Stats */}
            <motion.div
                className="coding-stats glass-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h5 className="stats-title">
                    <FaTrophy className="title-icon" />
                    Coding Stats
                </h5>
                <div className="stats-grid">
                    {codingProfiles.map((profile, index) => {
                        const Icon = profile.icon;
                        return (
                            <motion.div
                                key={profile.name}
                                className="stat-item"
                                style={{ '--stat-color': profile.color }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <Icon className="stat-icon" />
                                <div className="stat-info">
                                    <span className="stat-value">{profile.stat}</span>
                                    <span className="stat-label">{profile.label}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                className="quick-links"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
            >
                <a
                    href="https://github.com/RIsHaBHMiShrA2710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link magnetic"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/rishabhmishradev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link magnetic"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-link magnetic"
                >
                    <SiLeetcode />
                </a>
            </motion.div>
        </aside>
    );
}

export default ProfileStats;
