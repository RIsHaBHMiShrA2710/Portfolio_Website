import React, { useState, useEffect, useRef } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import "./navbar.css";

function NavbarComponent() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navRef = useRef(null);

    // Enhanced scroll effect with hide/show functionality
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    
                    // Set scrolled state
                    setScrolled(currentScrollY > 20);
                    
                    // Hide/show navbar on scroll (only on mobile and tablet)
                    if (window.innerWidth < 1024) {
                        if (currentScrollY > lastScrollY && currentScrollY > 100) {
                            setIsVisible(false);
                            setMobileMenuOpen(false);
                        } else if (currentScrollY < lastScrollY) {
                            setIsVisible(true);
                        }
                    }
                    
                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Enhanced active section detection with intersection observer
    useEffect(() => {
        const sections = ['home', 'projects', 'about', 'contact'];
        const observers = [];

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                                setActiveSection(section);
                            }
                        });
                    },
                    {
                        threshold: [0.3],
                        rootMargin: '-20% 0px -60% 0px'
                    }
                );
                
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => observers.forEach(observer => observer.disconnect());
    }, []);

    // Smooth scroll with improved performance
    const scrollToSection = (sectionId, event) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        setMobileMenuOpen(false);
    };

    // Enhanced mobile menu toggle
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);

    // Enhanced keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'projects', label: 'Projects', icon: '💼' },
        { id: 'about', label: 'About Me', icon: '👨‍💻' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ];

    return (
        <nav 
            ref={navRef}
            className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'} ${
                isVisible ? 'navbar-visible' : 'navbar-hidden'
            }`}
        >
            <div className="navbar-container">
                {/* Brand */}
                <a 
                    href="#home" 
                    onClick={(e) => scrollToSection('home', e)}
                    className="navbar-brand"
                >
                    <div className="brand-logo">RM</div>
                    <span className="brand-text">Rishabh</span>
                </a>

                {/* Desktop Navigation */}
                <div className="navbar-desktop">
                    <div className="navbar-nav">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(item.id, e)}
                                className={`nav-link ${
                                    activeSection === item.id ? 'active' : ''
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    
                    <div className="dark-mode-toggle">
                        <DarkMode />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="navbar-mobile">
                    <div className="dark-mode-toggle">
                        <DarkMode />
                    </div>
                    
                    <button 
                        className={`navbar-toggler ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <div className="navbar-toggler-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="navbar-mobile-nav">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(item.id, e)}
                                className={`nav-link ${
                                    activeSection === item.id ? 'active' : ''
                                }`}
                            >
                                <span className="nav-link-text">{item.label}</span>
                                <span className="nav-link-icon">{item.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;