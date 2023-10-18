import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DarkMode from '../DarkMode/DarkMode';
import "./navbar.css";

function NavbarComponent() {
    const [scrolling, setScrolling] = useState(false);
    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            if (!navbarCollapsed) {
                setScrolling(true);
            }
        } else {
            if (!navbarCollapsed) {
                setScrolling(false);
            }
        }
    };
    return (
        <Navbar expand="lg" className={scrolling ? 'navbar-opaque' : 'navbar-transparent'}>
            <Navbar.Brand href="#home" className="mr-auto">Rishabh Mishra</Navbar.Brand>
            <DarkMode />   
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                     
                    <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
                    <Nav.Link href="#about" className="nav-link">About Me</Nav.Link>
                    <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
