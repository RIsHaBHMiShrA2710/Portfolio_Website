import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import DownloadButton from '../DownloadButton/DownloadButton';
import "./ProfilePage.css";
import { motion, useAnimation } from 'framer-motion';

function ProfilePage() {

  const containerAnimation = useAnimation();
  const textAnimation = useAnimation();
  const imageAnimation = useAnimation();
  const socialIconsAnimation = useAnimation();
  const downloadButtonAnimation = useAnimation();
  const glassAnimation = useAnimation();
  
  const animatePage = async () => {
    await containerAnimation.start({ opacity: 1 });
    await textAnimation.start({ x: 0, opacity: 1 });
    await imageAnimation.start({ rotate: 0, x: 0, opacity: 1 });
    await socialIconsAnimation.start({ opacity: 1, scale: 1 });
    await downloadButtonAnimation.start({ y: 0, opacity: 1 });
    await glassAnimation.start({x: 0, opacity: 1});
  };

  React.useEffect(() => {
    animatePage();
  }, []); // Run the animation when the component mounts

  return (
    <motion.div className="Profile-Container" initial={{ opacity: 0 }} animate={containerAnimation}>
      <motion.div className="Profile-Right" initial={{ x: -50, opacity: 0 }} animate={textAnimation}>
        <h4 className="about-heading">Hello World,</h4>
        <h1 className="about-heading">
          I am <span className="highlighted">Rishabh Mishra</span>
        </h1>
        <h3 className="about-heading">
          A <span className='highlighted'> Full Stack </span> Web Developer specialized in <span className='highlighted'> MERN </span> stack.
        </h3>
        <p className='about-text'>
          {/* Add your about text here */}
        </p>
        <motion.div className="social-icons" initial={{ opacity: 0, scale: 0 }} animate={socialIconsAnimation}>
          <a className="social-icon-1" href="https://x.com/Rishabh_27_10" target="_blank" rel="noreferrer">
            <FaTwitter className="twitter"/>
          </a>
          <a className="social-icon-2" href="https://www.instagram.com/your-instagram-link" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a className="social-icon-3" href="https://github.com/RIsHaBHMiShrA2710" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a className="social-icon-4" href="https://www.linkedin.com/in/rishabhmishradev" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <motion.div className='profile-page-download-button' initial={{ y: 40, opacity: 0 }} animate={downloadButtonAnimation}>
            <DownloadButton />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="Profile-Left" initial={{ rotate: 90, x: 50, opacity: 0 }} animate={imageAnimation}>
        <div className="Profile-Image">
          <motion.img src="https://i.imgur.com/0tepHqb.png" className="Profile-img" alt="" />
          <motion.img src="https://i.imgur.com/fkcMJZK.png" className="dark-mode-glasses" initial={{x: 60, opacity: 0 }} animate={glassAnimation} alt="" />
         
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProfilePage;
