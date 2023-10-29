import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import DownloadButton from '../DownloadButton/DownloadButton';
import "./ProfilePage.css";

function ProfilePage() {


  return (
    <div className="Profile-Container">
      <div className="Profile-Right">
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
        <div className="social-icons">
          <a className="social-icon-1" href="https://twitter.com/your-twitter-link" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a className="social-icon-2" href="https://www.instagram.com/your-instagram-link" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a className="social-icon-3" href="https://github.com/RIsHaBHMiShrA2710" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a className="social-icon-4" href="https://www.linkedin.com/feed/?trk=404_page" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <div className='profile-page-download-button'><DownloadButton /></div>
          
        </div>
      </div>
      <div className="Profile-Left">
        <div className="Profile-Image">
          <img src="https://i.imgur.com/0tepHqb.png" className="Profile-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
