
import './skillsSection.css';
import { FaHtml5, FaCss3, FaJs} from 'react-icons/fa';
const frontendSkills = [
    
    {
        skillName: 'ReactJs',
        level: 85,
    },
    {
        skillName: 'Bootstrap',
        level: 90,
    }
];
const miscskills = [
    {
        skillName: 'Git/GitHub',
        level: 80,
    },
    {
        skillName: 'OOPs(Objecct Oriented Programming)',
        level: 70,
    },
    {
        skillName: 'Data Structures and Algorithm',
        level: 90,
    },
    {
        skillName: 'Operating System',
        level: 75,
    },

];
const backendSkills = [
    {
        skillName: 'Node.js, Express',
        level: 80,
    },
    {
        skillName: 'EJS',
        level: 75,
    },
    {
        skillName: 'MongoDB',
        level: 80,
    },
    {
        skillName: 'SQL',
        level: 70,
    },
];
const languages = [
    {
        skillName: 'HTML',
        level: 90,
    },
    {
        skillName: 'CSS',
        level: 85,
    },
    {
        skillName: 'JavaScript',
        level: 80,
    },
    {
        skillName: 'C/C++',
        level: 100,
    },
    {
        skillName: 'JavaScript',
        level: 90,
    },
    {
        skillName: 'Java',
        level: 85,
    },
    {
        skillName: 'Python',
        level: 80,
    },
]
const skillIcons = {
    HTML: <FaHtml5 color="#E44D26" />,
    CSS: <FaCss3 color="#1572B6" />,
    JavaScript: <FaJs color="#F7DF1E" />,
    // Add more as needed
};
const SkillsSection = () => {
    return (
        <section className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div  className='skill-line'>
                <h3 className='skill-name'>Languages</h3>
                <hr/>
            </div>
            <div className="skills-container">
                {languages.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-name">{skill.skillName}</div>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <div className="percentage">{skill.level}%</div>
                    </div>
                ))}
            </div>
            <div  className='skill-line'>
                <h3 className='skill-name'>FrontEnd</h3>
                <hr/>
            </div>
            
            
            <div className="skills-container">
                {frontendSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-icon">
                            {skillIcons[skill.skillName]}
                        </div>
                        <div className="skill-name">

                            {skill.skillName}
                        </div>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <div className="percentage">{skill.level}%</div>
                    </div>
                ))}
            </div>
            
            <div  className='skill-line'>
                <h3 className='skill-name'>BackEnd and Databases</h3>
                <hr/>
            </div>
            <div className="skills-container">
                {backendSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-name">{skill.skillName}</div>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <div className="percentage">{skill.level}%</div>
                    </div>
                ))}
            </div>
            <div  className='skill-line'>
                <h3 className='skill-name'>Miscelanous</h3>
                <hr/>
            </div>
            <div className="skills-container">
                {miscskills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-name">{skill.skillName}</div>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <div className="percentage">{skill.level}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
