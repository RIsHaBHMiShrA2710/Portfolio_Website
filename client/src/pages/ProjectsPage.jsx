import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaGithub, FaTimes } from 'react-icons/fa';
import './ProjectsPage.css';

const projects = [
    {
        id: 1,
        title: 'Epaisa - Finance Blog',
        description: 'A responsive finance blog platform with full CRUD for blog posts, featuring upvote/downvote and threaded comments. Integrated React Query for client-side caching.',
        image: 'https://i.imgur.com/aZh5QtJ.png',
        link: 'https://epaisa.netlify.app/blog/',
        github: 'https://github.com/RIsHaBHMiShrA2710/Epaisa',
        tags: ['ReactJS', 'NodeJS', 'PostgreSQL', 'React Query'],
        color: '#6c5ce7',
    },
    {
        id: 2,
        title: 'Expense Tracker',
        description: 'A platform to track expenses through emails. Features user registration, login, document search, email extraction, and regex matching.',
        image: 'https://i.imgur.com/33X656O.png',
        link: 'https://x.com/lifelong_grind/status/1991048173004181865',
        github: 'https://github.com/RIsHaBHMiShrA2710/expense_tracker',
        tags: ['ReactJS', 'Spring Boot', 'PostgreSQL'],
        color: '#00cec9',
    },
    {
        id: 3,
        title: 'Samvidhan AI',
        description: 'An AI-powered platform to clear doubts about Indian law and constitution using natural language queries.',
        image: 'https://i.imgur.com/2kZOL4P.png',
        link: 'https://leagalai.netlify.app/',
        github: 'https://github.com/RIsHaBHMiShrA2710/LegalAi',
        tags: ['AI', 'React', 'API Integration'],
        color: '#fd79a8',
    },
    {
        id: 4,
        title: 'Story Social',
        description: 'A platform to upload short stories and see them in a ranking system with upvotes and downvotes.',
        image: 'https://i.imgur.com/aZh5QtJ.png',
        link: 'https://story-generator-ai.netlify.app/',
        github: 'https://github.com/RIsHaBHMiShrA2710/Storyteller',
        tags: ['React', 'Node.js', 'MongoDB'],
        color: '#e17055',
    },
];

const pageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
};

function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <motion.div
            className="page projects-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
            <motion.h2
                className="page-title"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Projects
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card magnetic"
                        style={{ '--project-color': project.color }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3 + index * 0.1,
                            type: 'spring',
                            stiffness: 100
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="card-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="card-image"
                            />
                            <div className="card-overlay">
                                <span className="view-project">View Details</span>
                            </div>
                        </div>
                        <div className="card-info">
                            <h3 className="card-title">{project.title}</h3>
                            <div className="card-tags">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="project-modal glass-card"
                            style={{ '--project-color': selectedProject.color }}
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                className="modal-close magnetic"
                                onClick={() => setSelectedProject(null)}
                            >
                                <FaTimes />
                            </button>

                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>

                            <div className="modal-content">
                                <h3 className="modal-title">{selectedProject.title}</h3>
                                <p className="modal-description">{selectedProject.description}</p>

                                <div className="modal-tags">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="modal-links">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-link primary magnetic"
                                    >
                                        <FaLink /> Live Demo
                                    </a>
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-link secondary magnetic"
                                    >
                                        <FaGithub /> Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ProjectsPage;
