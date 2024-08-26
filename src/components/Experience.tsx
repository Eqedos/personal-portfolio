//@ts-nocheck
import React, { useState, useRef } from 'react';
import stealthLogo from '../assets/stealth_final.png';
import aStarLogo from '../assets/A_STAR_logo.png';
import climateAnalyticsLogo from '../assets/climate-analytics-logo-vector.png';

const experienceData = [
  { 
    id: 1, 
    title: 'Software Developer', 
    company: 'Stealth Tech Startup', 
    logo: stealthLogo, // Imported image
    year: '2024', 
    duration: 'August 2024 – Present',
    location: 'Singapore · On-site',
    responsibilities: [
      'Developed a web application using Next.js and PostgreSQL, implementing user authentication and data security by encrypting data at rest.',
      'Engineered a system to securely handle input files from multiple users, integrating them through linker markers, resulting in a 30% reduction in processing time.',
      'Implemented a disaggregation feature that ensured users received only relevant data, improving data confidentiality and compliance by 100%.'
    ],
    techStack: 'Next.js, PostgreSQL, Authentication, Data Encryption'
  },
  { 
    id: 2, 
    title: 'Software Engineer Intern', 
    company: 'SIMTech, A*STAR', 
    logo: aStarLogo, // Imported image
    year: '2024', 
    duration: 'May 2024 – Sep 2024',
    location: 'Singapore · On-site',
    responsibilities: [
      'Developed the backend for an energy systems optimization tool using Python, with CVXPY for optimization and FastAPI for API endpoints.',
      'Crafted adaptable JSON schemas tailored for seamless future integration with AWS services, including Batch, SQS, and S3.',
      'Created unit tests for system reliability and configured support for multiple convex optimization solvers, significantly boosting performance by up to 150%.'
    ],
    techStack: 'Python, CVXPY, FastAPI, AWS'
  },
  { 
    id: 3, 
    title: 'Software Engineer Intern', 
    company: 'SIMTech, A*STAR', 
    logo: aStarLogo, // Reuse the same imported image
    year: '2023', 
    duration: 'August 2023 – December 2023',
    location: 'Singapore · On-site',
    responsibilities: [
      'Developed a POC web application for an optimization tool with React and Streamlit, and established Flask endpoints for local data processing and testing.',
      'Leveraged Python libraries for interactive maps and graphs, enhancing data presentation and accessibility in energy system modeling.',
      'Managed the web app’s development cycle from concept to Docker containerization, prioritizing user experience and project alignment.'
    ],
    techStack: 'React, Streamlit, Python, Flask'
  },
  { 
    id: 4, 
    title: 'Software Consultant', 
    company: 'Climate Analytics', 
    logo: climateAnalyticsLogo, // Imported image
    year: '2023', 
    duration: 'July 2023 – Dec 2023',
    location: 'Remote',
    responsibilities: [
      'Collaborated on climate initiatives, automated workflows with Python and Snakemake, enhancing workflow efficiency by 270%.',
      'Adapted energy modelling tools for CBC and GLPK optimization solvers.',
      'Developed detailed Python visualizations to highlight complex data patterns. Prepared insights for UN COP28 showcase.'
    ],
    techStack: 'Python, Snakemake, Data Visualization'
  },
];

const Experience = ({ onClose }) => {
  const sectionRefs = useRef(experienceData.map(() => React.createRef()));

  const scrollToSection = (index) => {
    sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex h-screen w-screen bg-white">
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-3xl leading-none hover:text-gray-300 z-50"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Left Sidebar - Timeline */}
      <div className="w-1/4 h-full bg-gray-100 overflow-y-auto">
        <div className="relative p-4">
          <h3 className="text-lg font-semibold mb-8">Work Experience</h3>
          <div className="absolute left-10 top-16 bottom-0 w-1 bg-gray-300"></div>
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-8 pl-12 cursor-pointer ${exp.id === experienceData[index].id ? 'text-blue-500 font-semibold' : 'text-black'}`}
              onClick={() => scrollToSection(index)}
            >
              <div className={`absolute left-5 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500`}></div>
              <p className="text-sm">{exp.year}</p>
              <p className="text-md">{exp.title}</p>
              <p className="text-xs text-gray-500">{exp.company}</p>
              <p className="text-xs text-gray-500">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Area with All Experiences */}
      <div className="w-3/4 h-full overflow-y-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p className="text-lg text-gray-600 mt-2">i am a software engineer, i am a software engineer, i am a software engineer.</p>
          <hr className="mt-6 border-t-2 border-gray-200" />
        </div>

        {experienceData.map((exp, index) => (
          <div key={exp.id} ref={sectionRefs.current[index]} className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{exp.title}</h2>
            <div className="flex items-start mb-4">
              {exp.logo && (
                <img src={exp.logo} className="mr-4" style={{ maxWidth: '300px', height: '100px' }} />
              )}
              <div className="flex-1">
                <p className="text-lg text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration} | {exp.location}</p>
                <ul className="list-disc ml-5 text-sm text-gray-600 leading-relaxed">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="mt-2">{item}</li>
                  ))}
                </ul>
                {exp.techStack && (
                  <p className="text-sm text-gray-500 mt-3"><strong>Tech Stack:</strong> {exp.techStack}</p>
                )}
              </div>
            </div>
            <hr className="mt-6 border-t-2 border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
