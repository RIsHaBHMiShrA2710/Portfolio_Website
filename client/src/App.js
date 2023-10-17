import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import ProfilePage from './components/profilePage/ProfilePage';
import EducationSection from './components/educationSection/educationSection';
import ProjectsSection from './components/projectsSection/projectsSection';
import SkillsSection from './components/educationSection/skillsSection';

function App() {
    return (
        <div>
            <NavbarComponent />
            <section id="home">
                <ProfilePage />
            </section>
            <section id="projects">
                <ProjectsSection />
            </section>
            <section id="about">
                <EducationSection/>
                <SkillsSection />
            </section>
            <section id="contact">
                {/* Content for the Contact section */}
            </section>
        </div>
    );
}

export default App;
