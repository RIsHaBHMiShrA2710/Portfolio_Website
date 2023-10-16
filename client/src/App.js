import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import ProfilePage from './components/profilePage/ProfilePage';
import EducationSection from './components/educationSection/educationSection';
import ProjectsSection from './components/projectsSection/projectsSection';
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
            </section>
            <section id="contact">
                {/* Content for the Contact section */}
            </section>
        </div>
    );
}

export default App;
