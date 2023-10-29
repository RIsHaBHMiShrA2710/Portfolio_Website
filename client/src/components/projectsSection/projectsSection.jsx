import { FaLink, FaGithub } from 'react-icons/fa';
import "./projectsSection.css";

const projects = [
  {
    title: "Story Social",
    description: "A platform to upload short stories and see them in a ranking system with upvotes and downvotes.",
    image: "https://i.imgur.com/aZh5QtJ.png",
    link: "https://story-generator-ai.netlify.app/",
    github: "https://github.com/RIsHaBHMiShrA2710/Storyteller",
  },
  {
    title: "Super Welded Mesh",
    description: "The site for a welded mesh manufacturing company.",
    image: "https://i.imgur.com/33X656O.png",
    link: "https://suparweldedmesh.netlify.com/",
    github: "https://github.com/dK2856/superweld_V1",
  },
  {
    title: "Samvidhan AI",
    description: "Clear all your doubts about law and constitution.",
    image: "https://i.imgur.com/2kZOL4P.png",
    link: "https://samvidhanai.netlify.app/",
    github: "https://github.com/suryapratap-01/iemhacks_Hacker-Noobs",
  },

];

const ProjectsSection = () => {
  return (
    <div className="project-card-container">
      <h2 className='skill-title heading'>Projects</h2>
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
              <a href={project.link} target="_blank" rel="noopener noreferrer" class="custom-button learn-more">
                <span class="project-card-icon"><FaLink></FaLink></span>
                <span class="button-text">Preview</span>
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="custom-button learn-more">
                <span class="project-card-icon"><FaGithub></FaGithub></span>
                <span class="button-text">Code</span>
              </a>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;