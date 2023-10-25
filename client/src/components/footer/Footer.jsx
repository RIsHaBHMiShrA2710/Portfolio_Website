import "./Footer.css"
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import DownloadButton from "../DownloadButton/DownloadButton";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons-footer">
                <a href="https://twitter.com/your-twitter-link"><FaTwitter /></a>
                <a href="https://www.instagram.com/your-instagram-link"><FaInstagram /></a>
                <a href="https://github.com/your-github-link"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/your-linkedin-link"><FaLinkedin /></a>
            </div>
         
                <DownloadButton />
            
            <div className="made-with">
                Made with <span className="heart">&hearts;</span> by Rishabh Mishra
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Rishabh Mishra
            </div>
        </footer>
    );
}

export default Footer;
