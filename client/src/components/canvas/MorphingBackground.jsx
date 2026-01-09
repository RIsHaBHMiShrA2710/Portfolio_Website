import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './MorphingBackground.css';

function MorphingBackground() {
    const location = useLocation();

    const getBlobColor = () => {
        switch (location.pathname) {
            case '/about':
                return 'blob-about';
            case '/projects':
                return 'blob-projects';
            case '/achievements':
                return 'blob-projects'; // Use warm colors for achievements
            case '/contact':
                return 'blob-contact';
            default:
                return 'blob-home';
        }
    };

    return (
        <div className="morphing-background">
            <motion.div
                className={`blob blob-1 ${getBlobColor()}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                key={location.pathname + '-1'}
            />
            <motion.div
                className={`blob blob-2 ${getBlobColor()}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                key={location.pathname + '-2'}
            />
            <div className="noise-overlay" />
        </div>
    );
}

export default MorphingBackground;
