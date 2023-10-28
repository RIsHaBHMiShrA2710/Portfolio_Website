import React from 'react';
import NavbarComponent from './components/navbar/navbar';
import ProfilePage from './components/profilePage/ProfilePage';
import EducationSection from './components/educationSection/educationSection';
import ProjectsSection from './components/projectsSection/projectsSection';
import SkillsSection from './components/educationSection/skillsSection';
import ContactForm from './components/contactSection/ContactForm';
import Footer from './components/footer/Footer';
import PlatformCarousel from './components/contactSection/PlatformCarousel';
function App() {
   
    return (
        <div>
            <NavbarComponent />
            <section id="home">
                <ProfilePage />
            </section>
            <section id="about">
                <SkillsSection />
                <EducationSection />
            </section>
            <section id="projects">
                <ProjectsSection />
                <PlatformCarousel />
            </section>
            
            <section id="contact">
                <ContactForm />
            </section>
            <Footer />
        </div>
    );
}

export default App;
