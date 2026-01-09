import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './AboutPage.css';

const skills = {
    languages: ['C/C++', 'Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
    frameworks: ['ReactJS', 'NodeJS', 'Express', 'Spring', 'Redux'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'GitHub', 'VS Code', 'Linux', 'OOP', 'DBMS'],
};

const education = [
    {
        year: '2021 - 2025',
        degree: 'B.Tech in CSE (AI)',
        institution: 'Institute of Engineering and Management, Kolkata',
        score: 'CGPA: 9.0/10',
    },
    {
        year: '2018 - 2020',
        degree: 'Higher Secondary',
        institution: 'Adarsh Madhyamik Vidyalaya, Kolkata',
        score: '86%',
    },
];

const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
};

function AboutPage() {
    return (
        <motion.div
            className="page about-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
            <div className="about-content">
                {/* Bio Section */}
                <motion.div
                    className="about-bio glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="bio-text">
                        I'm a <span className="highlight">Full Stack Developer</span> and final-year
                        CSE (AI) student passionate about building scalable web applications.
                        Previously interned at <span className="highlight">Accenture</span> where
                        I developed internal tools for the Oracle EPM team.
                    </p>
                    <p className="bio-text">
                        I'm an active competitive programmer and also have a research paper
                        accepted at <span className="highlight">IEMTech 2025</span>. Check out my
                        coding stats in the Stats section!
                    </p>
                </motion.div>

                {/* Experience */}
                <motion.div
                    className="experience-section glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="subsection-title">
                        <FaBriefcase className="title-icon" />
                        Experience
                    </h3>
                    <div className="experience-item">
                        <div className="exp-header">
                            <span className="exp-company">Accenture</span>
                            <span className="exp-duration">May 2024 - Jul 2024</span>
                        </div>
                        <span className="exp-role">Associate Software Engineer Intern</span>
                        <ul className="exp-details">
                            <li>Built a one-stop solution for Oracle EPM applications with a chatbot, used by 50+ team members</li>
                            <li>Developed the backend with business logic and integrated it with the frontend</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    className="skills-section glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                >
                    <h3 className="subsection-title">Skills</h3>
                    <div className="skills-group">
                        <span className="skill-category">Languages</span>
                        <div className="skills-tags">
                            {skills.languages.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skills-group">
                        <span className="skill-category">Frameworks</span>
                        <div className="skills-tags">
                            {skills.frameworks.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="skills-group">
                        <span className="skill-category">Databases & Tools</span>
                        <div className="skills-tags">
                            {[...skills.databases, ...skills.tools].map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    className="education-section glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="subsection-title">
                        <FaGraduationCap className="title-icon" />
                        Education
                    </h3>
                    {education.map((edu, index) => (
                        <div key={index} className="edu-item">
                            <span className="edu-year">{edu.year}</span>
                            <span className="edu-degree">{edu.degree}</span>
                            <span className="edu-institution">{edu.institution}</span>
                            <span className="edu-score">{edu.score}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default AboutPage;
