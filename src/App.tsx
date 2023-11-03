import React from 'react';
import Hero from "./components/Hero"
import Header from "./components/Header"

const App: React.FC = () => {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};


const About: React.FC = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        {/* Your introduction here */}
      </p>
    </section>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* List of projects here */}
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {/* List of skills here */}
      </ul>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        {/* Contact form fields here */}
      </form>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Connect with me on social media</p>
      <ul>
        {/* Social media links here */}
      </ul>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default App;
