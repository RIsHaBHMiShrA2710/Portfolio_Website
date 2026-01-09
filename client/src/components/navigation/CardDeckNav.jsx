import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import './CardDeckNav.css';

const navItems = [
    { path: '/', label: 'Home', icon: FaHome, color: '#6c5ce7' },
    { path: '/about', label: 'About', icon: FaUser, color: '#00cec9' },
    { path: '/projects', label: 'Projects', icon: FaCode, color: '#fd79a8' },
    { path: '/contact', label: 'Contact', icon: FaEnvelope, color: '#e17055' },
];

function CardDeckNav() {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path) => {
        if (path !== location.pathname) {
            navigate(path);
        }
        setIsExpanded(false);
    };

    const getCardOffset = (index, total) => {
        if (isExpanded) {
            // Fan out in a curved arc
            const angle = -30 + (index * 20);
            const xOffset = index * 70;
            return {
                x: -xOffset,
                y: Math.abs(index - 1.5) * 10,
                rotate: angle,
                scale: 1,
            };
        }
        // Stacked
        return {
            x: index * -4,
            y: index * -4,
            rotate: index * 2,
            scale: 1 - index * 0.02,
        };
    };

    // Sort to put current page card on top
    const sortedItems = [...navItems].sort((a, b) => {
        if (a.path === location.pathname) return 1;
        if (b.path === location.pathname) return -1;
        return navItems.indexOf(a) - navItems.indexOf(b);
    });

    return (
        <div
            className="card-deck-nav"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="deck-container">
                <AnimatePresence>
                    {sortedItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        const offset = getCardOffset(index, sortedItems.length);

                        return (
                            <motion.button
                                key={item.path}
                                className={`nav-card magnetic ${isActive ? 'active' : ''}`}
                                style={{
                                    '--card-color': item.color,
                                    zIndex: index
                                }}
                                initial={false}
                                animate={{
                                    x: offset.x,
                                    y: offset.y,
                                    rotate: offset.rotate,
                                    scale: offset.scale,
                                }}
                                whileHover={{
                                    scale: isExpanded ? 1.1 : offset.scale,
                                    y: isExpanded ? offset.y - 10 : offset.y,
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 25
                                }}
                                onClick={() => handleNavigate(item.path)}
                            >
                                <div className="card-content">
                                    <Icon className="card-icon" />
                                    <span className="card-label">{item.label}</span>
                                </div>
                                <div className="card-glow" />
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>
            <div className="deck-hint">
                <span>{isExpanded ? 'Select' : 'Navigate'}</span>
            </div>
        </div>
    );
}

export default CardDeckNav;
