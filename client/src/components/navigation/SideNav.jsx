import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaTrophy, FaEnvelope } from 'react-icons/fa';
import './SideNav.css';

const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/about', label: 'About', icon: FaUser },
    { path: '/projects', label: 'Projects', icon: FaCode },
    { path: '/achievements', label: 'Stats', icon: FaTrophy },
    { path: '/contact', label: 'Contact', icon: FaEnvelope },
];

function SideNav() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="side-nav">
            <div className="nav-brand">
                <span className="brand-logo">RM</span>
            </div>

            <ul className="nav-list">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <motion.li
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                className={`nav-item magnetic ${isActive ? 'active' : ''}`}
                                onClick={() => navigate(item.path)}
                            >
                                <span className="nav-icon">
                                    <Icon />
                                </span>
                                <span className="nav-label">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        className="active-indicator"
                                        layoutId="activeIndicator"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        </motion.li>
                    );
                })}
            </ul>

            <div className="nav-footer">
                <span className="nav-hint">Navigate</span>
            </div>
        </nav>
    );
}

export default SideNav;
