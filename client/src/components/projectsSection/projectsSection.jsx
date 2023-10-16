import React from "react";
import { Carousel } from "react-bootstrap";
import "./projectsSection.css"; // Import your CSS file

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1.",
    images: ["https://i.imgur.com/RIy1Lv9.jpeg", "https://i.imgur.com/4ceA1LA_d.webp?shape=thumb&fidelity=high", "https://i.imgur.com/RIy1Lv9.jpeg"],
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2.",
    images: ["https://i.imgur.com/RIy1Lv9.jpeg", "https://i.imgur.com/4ceA1LA_d.webp?shape=thumb&fidelity=high", "https://i.imgur.com/RIy1Lv9.jpeg"],
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of Project 2.",
    images: ["https://i.imgur.com/RIy1Lv9.jpeg", "https://i.imgur.com/4ceA1LA_d.webp?shape=thumb&fidelity=high", "https://i.imgur.com/RIy1Lv9.jpeg"],
    link: "https://example.com/project3",
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Web Development Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className={`row ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
              {/* On large screens, pictures on one side, descriptions on the other */}
              <div className="col-lg-6">
                <Carousel  interval={null} touch={true} wrap={false}className="project-images">
                  {project.images.map((image, imgIndex) => (
                    <Carousel.Item key={imgIndex}>
                      <img
                        src={image}
                        alt={`Image ${imgIndex + 1}`}
                        className="project-image"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-lg-6">
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
