import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import ProfilePage from './components/profilePage/ProfilePage';
import EducationSection from './components/educationSection/educationSection';
import ProjectsSection from './components/projectsSection/projectsSection';
import SkillsSection from './components/educationSection/skillsSection';
import ContactForm from './components/contactSection/ContactForm';

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
                <ContactForm />
            </section>
        </div>
    );
}

export default App;
