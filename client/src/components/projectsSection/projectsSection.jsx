import { FaLink, FaGithub } from 'react-icons/fa'; 
import "./projectsSection.css";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1.",
    image: "https://i.imgur.com/RIy1Lv9.jpeg",
    link: "https://example.com/project1",
    github: "https://github.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2.",
    image: "https://i.imgur.com/RIy1Lv9.jpeg",
    link: "https://example.com/project2",
    github: "https://github.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of Project 3.",
    image: "https://i.imgur.com/RIy1Lv9.jpeg",
    link: "https://example.com/project3",
    github: "https://github.com/project3",
  },

];

const ProjectsSection = () => {
  return (
    <div className="project-card-container">
      <h2 className='heading'>Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-card-top-section">
            <img className="project-card-image" src={project.image} alt={project.title} />
          </div>
          <div className="project-card-bottom-section">
            <span className="project-card-title">{project.title}</span>
            <div className="project-card-row project-card-row1">
              <p>{project.description}</p>
            </div>
            <div class="project-card-buttons">
            <button href={project.github} target="_blank" rel="noopener noreferrer" class="custom-button learn-more">
                <span class="project-card-icon"><FaLink></FaLink></span>
                <span class="button-text">Preview</span>
              </button>
              <button href={project.github} target="_blank" rel="noopener noreferrer" class="custom-button learn-more">
                <span class="project-card-icon"><FaGithub></FaGithub></span>
                <span class="button-text">Code</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;