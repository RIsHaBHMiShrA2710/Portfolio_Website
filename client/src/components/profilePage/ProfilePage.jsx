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
        <h1 className="about-heading">
          A <span className='highlighted'>Full Stack</span> Developer
        </h1>
        <p className='about-text'>
          {/* Add your about text here */}
        </p>
        <div className="social-icons">
          <a href="https://twitter.com/your-twitter-link" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/your-instagram-link" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/your-github-link" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-link" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <DownloadButton />
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
