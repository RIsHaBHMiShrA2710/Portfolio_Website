import './educationSection.css';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">My Educational Journey</h2>
      <div className="education-items">
        <div className="education-item">
          <FaSchool className="education-icon" />
          <h3 className="education-title">10th Standard</h3>
          <p className="education-info">ARNC Vidhyalaya, 2018</p>
          <p className="education-info">WBBSE</p>
          <p className="education-info">Percentage: 74%</p>
        </div>
        <div className="education-item">
          <FaUniversity className="education-icon" />
          <h3 className="education-title">12th Standard</h3>
          <p className="education-info">Adarsh Madhyamik Vidhyalaya, 2020</p>
          <p className="education-info">WBCHSE</p>
          <p className="education-info">Percentage: 87% (PCM)</p>
        </div>
        <div className="education-item">
          <FaGraduationCap className="education-icon" />
          <h3 className="education-title">Undergraduate (CSE AI)</h3>
          <p className="education-info">Institute of Engineering and Management (IEM) Kolkata</p>
          <p className="education-info">5th Semester (Expected Graduation: 2025)</p>
          <p className="education-info">CGPA: 9.13</p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
