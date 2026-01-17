import React from 'react';
import './MorphingBackground.css';

function MorphingBackground() {
    return (
        <div className="comic-background">
            {/* Halftone dot pattern */}
            <div className="halftone-pattern" />

            {/* Speed lines */}
            <div className="diagonal-lines" />

            {/* Corner decorations */}
            <div className="corner-burst top-left" />
            <div className="corner-burst bottom-right" />

            {/* Random floating shapes */}
            <div className="floating-shapes">
                <div className="shape star" style={{ top: '15%', left: '10%' }} />
                <div className="shape circle" style={{ top: '70%', left: '85%' }} />
                <div className="shape star" style={{ top: '80%', left: '20%' }} />
                <div className="shape circle" style={{ top: '25%', right: '15%' }} />
            </div>
        </div>
    );
}

export default MorphingBackground;
