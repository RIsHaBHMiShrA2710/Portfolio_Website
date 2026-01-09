import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './HomePage.css';

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/RIsHaBHMiShrA2710', label: 'GitHub', delay: 0 },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rishabhmishradev', label: 'LinkedIn', delay: 0.1 },
    { icon: SiLeetcode, href: 'https://leetcode.com/RishabhMishra2710', label: 'LeetCode', delay: 0.2 },
    { icon: FaTwitter, href: 'https://x.com/Rishabh_27_10', label: 'Twitter', delay: 0.3 },
];

const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
};

const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

function HomePage() {
    return (
        <motion.div
            className="page home-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
            <div className="home-content">
                {/* Profile Image */}
                <motion.div
                    className="profile-frame"
                    initial={{ opacity: 0, x: -50, rotate: -5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                >
                    <div className="frame-border">
                        <img
                            src="https://i.imgur.com/0tepHqb.png"
                            alt="Rishabh Mishra"
                            className="profile-image"
                        />
                    </div>
                    <div className="frame-decoration" />
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="name-island glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                >
                    <motion.span
                        className="greeting"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.4 }}
                    >
                        Hello World, I'm
                    </motion.span>
                    <motion.h1
                        className="name"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.5 }}
                    >
                        <span className="gradient-text">Rishabh</span> Mishra
                    </motion.h1>
                    <motion.p
                        className="role"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.6 }}
                    >
                        Full Stack Developer
                    </motion.p>
                    <motion.p
                        className="tagline"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.7 }}
                    >
                        B.Tech CSE (AI) @ <span className="highlight">IEM Kolkata</span> •
                        Ex-Intern @ <span className="highlight">Accenture</span>
                    </motion.p>

                    {/* Social Links - Inline */}
                    <motion.div
                        className="social-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link magnetic"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    aria-label={social.label}
                                >
                                    <Icon />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="cta-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <a href="mailto:2710rismi@gmail.com" className="cta-btn primary magnetic">
                            <FaEnvelope /> Get in Touch
                        </a>
                        <a href="/resume.pdf" download className="cta-btn secondary magnetic">
                            <FaDownload /> Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    className="quick-stats"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="stat-card glass-card">
                        <span className="stat-value">750+</span>
                        <span className="stat-label">LeetCode Problems</span>
                    </div>
                    <div className="stat-card glass-card">
                        <span className="stat-value">1870+</span>
                        <span className="stat-label">Knight Rating</span>
                    </div>
                    <div className="stat-card glass-card">
                        <span className="stat-value">9.0</span>
                        <span className="stat-label">CGPA</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default HomePage;
