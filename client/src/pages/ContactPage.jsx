import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './ContactPage.css';

const socialPlatforms = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/RIsHaBHMiShrA2710', color: '#6e5494' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishabhmishradev', color: '#0077b5' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/RishabhMishra2710', color: '#ffa116' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/Rishabh_27_10', color: '#1da1f2' },
];

const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSending(false);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSent(false), 3000);
    };

    return (
        <motion.div
            className="page contact-page"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
            <div className="contact-content">
                {/* Contact Info */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="contact-title">Let's Connect</h2>
                    <p className="contact-subtitle">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>

                    <div className="contact-details">
                        <a href="mailto:2710rismi@gmail.com" className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <span>2710rismi@gmail.com</span>
                        </a>
                        <a href="tel:+917439908878" className="contact-item">
                            <FaPhone className="contact-icon" />
                            <span>+91 7439908878</span>
                        </a>
                    </div>

                    <div className="social-platforms">
                        <h4 className="platforms-title">Find me on</h4>
                        <div className="platforms-grid">
                            {socialPlatforms.map((platform, index) => {
                                const Icon = platform.icon;
                                return (
                                    <motion.a
                                        key={platform.label}
                                        href={platform.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="platform-card magnetic"
                                        style={{ '--platform-color': platform.color }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Icon className="platform-icon" />
                                        <span className="platform-label">{platform.label}</span>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="contact-form-container glass-card"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="form-title">Send a Message</h3>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project..."
                                rows={4}
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className={`submit-btn magnetic ${isSending ? 'sending' : ''} ${isSent ? 'sent' : ''}`}
                            disabled={isSending}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSending ? (
                                <span className="btn-content">
                                    <span className="spinner" />
                                    Sending...
                                </span>
                            ) : isSent ? (
                                <span className="btn-content">
                                    ✓ Message Sent!
                                </span>
                            ) : (
                                <span className="btn-content">
                                    <FaPaperPlane />
                                    Send Message
                                </span>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ContactPage;
