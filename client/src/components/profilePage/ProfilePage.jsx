import React from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="Profile-Container">
      <div className="Profile-Right">
        <h1 className='about-heading'>About me</h1>
        <p className='about-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis turpis nisi, vel pulvinar augue commodo et. Pellentesque vitae suscipit lorem, sit amet pulvinar odio. Aenean ultrices cursus nisi eget interdum. Suspendisse potenti. Donec venenatis porta diam, id suscipit mauris condimentum eu. Sed erat odio, aliquam id nisi ut, mattis dignissim leo. Cras risus dui, suscipit ac ullamcorper vel, facilisis id felis. Etiam tincidunt sodales quam id mollis. Mauris consequat elementum eros pulvinar aliquet. Nullam venenatis luctus nulla, congue tincidunt elit dictum vel. Fusce facilisis sit amet metus eget eleifend. Cras mattis felis ut ma
        </p>
        <div className="social-icons">
          <a href="https://twitter.com/your-twitter-link"><FaTwitter /></a>
          <a href="https://www.instagram.com/your-instagram-link"><FaInstagram /></a>
          <a href="https://github.com/your-github-link"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/your-linkedin-link"><FaLinkedin /></a>
        </div>
        <button onClick={downloadResume}>Download Resume</button>
      </div>
      <div className="Profile-Left">
        <div className="Profile-Image">
          <img src="https://i.imgur.com/0tepHqb.png" className="Profile-img" alt="" />
        </div>
      </div>
    </div>
  );
}

function downloadResume() {
  // You can add the logic to download the resume here
}

export default ProfilePage;
