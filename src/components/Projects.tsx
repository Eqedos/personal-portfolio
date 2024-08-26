//@ts-nocheck
import React from 'react';
import ProjectVoluntr from './ProjectVoluntr';
import ProjectReelReview from './ProjectReelReview';
import ProjectEcode from './ProjectEcode';
import ProjectSW from './ProjectSW';
import ProjectPortfolio from './ProjectPortfolio';

const Header = ({ onClose }) => {
  return (
    <header className="flex justify-between items-center">
      <div className="text-4xl">PK</div>
      <SearchBar />
      <CloseButton onClose={onClose} />
    </header>
  );
};

const SearchBar = () => {
  return (
    <div className="flex-grow max-w-4xl w-full px-4">
      <div className="bg-gray-800 flex items-center rounded-lg overflow-hidden shadow-lg w-full">
        <div className="px-4 text-gray-400">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 8h16M4 16h16"/>
          </svg>
        </div>
        <input
          type="text"
          value="parthportfolioprojects.com"
          readOnly
          className="bg-transparent text-white p-2 w-full focus:outline-none"
        />
        <div className="px-4">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const CloseButton = ({ onClose }) => {
  return (
    <button onClick={onClose} className="p-2">
      <span className="text-2xl">&times;</span>
    </button>
  );
};

const Main = () => {
  return (
    <main className='mt-10'>
      <ProjectShowcase />
    </main>
  );
};

const Projects = ({ onClose }) => {
  return (
    <div className="flex flex-col bg-black text-white w-screen h-screen">
      <Header onClose={onClose} />
      <div className="flex-grow overflow-y-auto">
        <ProjectShowcase />
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    // Add mx-auto to center the div and w-4/5 to set the width to 80%
    <div className="w-4/5 mx-auto flex flex-col flex-grow overflow-y-auto scrollbar-hide">
      <h1 className="text-6xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 py-3">
        Project Showcase.
      </h1>
      <p className="text-xl mb-5 text-left text-gray-300 font-light leading-loose">
      Here, I'm showcasing a selection of my most accomplished and award-winning work. Each project is a testament to my dedication to excellence in software development and design. I'm continually working on new ideas and innovative solutions, so stay tuned for more exciting projects in the future. To observe the evolution of my work or to follow along with my progress, visit my <a href="https://github.com/eqedos" target="_blank" className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out">GitHub profile</a>. New contributions and repositories will be added regularly, showcasing my commitment to growth and learning in the field of technology.        {/* The rest of your paragraph here */}
      </p>
      <div className="space-y-6 mb-10">
        {/* Repeat the Project component for each project in the dummy data */}
        <ProjectVoluntr/>
        <ProjectReelReview/>
        <ProjectPortfolio/>
        <ProjectEcode/>
        <ProjectSW/>
      </div>
    </div>
  );
};



export default Projects;
