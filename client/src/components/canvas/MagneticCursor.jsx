import React, { useEffect, useRef, useState } from 'react';
import './MagneticCursor.css';

function MagneticCursor() {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const position = useRef({ x: 0, y: 0 });
    const targetPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        let animationFrameId;

        const handleMouseMove = (e) => {
            targetPosition.current = { x: e.clientX, y: e.clientY };

            // Move dot immediately
            if (cursorDot) {
                cursorDot.style.left = `${e.clientX}px`;
                cursorDot.style.top = `${e.clientY}px`;
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = (e) => {
            if (e.target.closest('.magnetic') || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = (e) => {
            if (e.target.closest('.magnetic') || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(false);
            }
        };

        // Smooth follow animation for outer cursor
        const animate = () => {
            position.current.x += (targetPosition.current.x - position.current.x) * 0.15;
            position.current.y += (targetPosition.current.y - position.current.y) * 0.15;

            if (cursor) {
                cursor.style.left = `${position.current.x}px`;
                cursor.style.top = `${position.current.y}px`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseEnter);
        document.addEventListener('mouseout', handleMouseLeave);

        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseEnter);
            document.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`cursor-ring ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
            />
            <div
                ref={cursorDotRef}
                className={`cursor-dot ${isClicking ? 'click' : ''}`}
            />
        </>
    );
}

export default MagneticCursor;
