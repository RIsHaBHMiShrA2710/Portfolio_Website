import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import SideNav from './components/navigation/SideNav';
import MorphingBackground from './components/canvas/MorphingBackground';
import MagneticCursor from './components/canvas/MagneticCursor';
import ThemeToggle from './components/canvas/ThemeToggle';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <MagneticCursor />
            <MorphingBackground />
            <SideNav />
            <AnimatedRoutes />
            <ThemeToggle />
        </Router>
    );
}

export default App;
