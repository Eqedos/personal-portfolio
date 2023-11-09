//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  { 
    id: 1, 
    title: 'Research Intern', 
    company: 'SIMTech A*STAR', 
    year: '2023', 
    description: 'Developed and deployed a web application using React and Streamlit, with a Flask backend. Focused on usability through direct feedback from energy-system modellers.', 
    duration: 'August 2023 – December 2023'
  },
  { 
    id: 2, 
    title: 'Consultant', 
    company: 'Climate Analytics', 
    year: '2023', 
    description: 'Automated workflows in Python, enhancing efficiency, and prepared data visualizations for UN COP28. Contributed to climate policy discussions.', 
    duration: 'July 2023 – December 2023' 
  },
];

const ExperienceCard = ({ exp, isSelected, onSelect, cardRef }) => (
  <motion.div
    ref={cardRef}
    className={`transition duration-500 ease-in-out cursor-pointer p-4 border-2 ${isSelected ? 'border-white' : 'border-gray-700'} hover:border-white`}
    onClick={() => onSelect(exp)}
    animate={{ scale: isSelected ? 1.1 : 1 }}
  >
    <div className="text-center"> 
      <p className="font-bold text-white text-lg">{exp.title}</p>
      <p className="text-gray-300">{exp.company}</p>
      <p className="text-gray-300">{exp.year}</p>
    </div>
  </motion.div>
);

const ExperiencePopup = ({ exp }) => (
  <motion.div
    className="bg-gray-900 text-white pt-8 pb-5 px-5 rounded-md shadow-2xl transform transition duration-500 hover:scale-105 w-1/2 mx-auto mt-12 mb-8 border border-gray-700 hover:border-gray-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col items-start justify-between">
      <h3 className="text-3xl font-bold text-blue-400 mb-4">{exp.title}</h3>
      <div className="w-full border-t border-gray-600 my-3"></div>
      <p className="text-sm font-light text-gray-400"><strong className="text-gray-300 font-normal">Company:</strong> {exp.company}</p>
      <p className="text-sm font-light text-gray-400"><strong className="text-gray-300 font-normal">Year:</strong> {exp.year}</p>
      <p className="text-sm font-light text-gray-400"><strong className="text-gray-300 font-normal">Duration:</strong> {exp.duration}</p>
      <div className="w-full border-t border-gray-600 my-3"></div>
      <p className="text-sm font-light text-gray-400"><strong className="text-gray-300 font-normal">Description:</strong></p>
      <p className="text-gray-400 text-sm">{exp.description}</p>
    </div>
  </motion.div>
);

const Experience = ({ onClose }) => {
  const [position, setPosition] = useState(0);
  const [selectedExp, setSelectedExp] = useState(experienceData[0]);
  const refs = experienceData.map(() => useRef(null));

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' && position < experienceData.length - 1) {
        setPosition(position + 1);
        setSelectedExp(experienceData[position + 1]);
      } else if (event.key === 'ArrowLeft' && position > 0) {
        setPosition(position - 1);
        setSelectedExp(experienceData[position - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  useEffect(() => {
    refs[position].current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [position]);

  return (
    <div className="relative flex flex-col items-center justify-between w-full h-screen bg-black text-white">
      <button
        className="absolute top-5 right-5 text-3xl leading-none hover:text-gray-300 z-10"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Popup section */}
      <div className="flex justify-center items-center w-full h-1/2">
        <ExperiencePopup exp={selectedExp} />
        </div>

{/* Timeline section */}
<div className="w-full h-1/2 flex justify-center items-end pb-5 px-16">
  <div className="w-full flex justify-between items-center relative">
    <div className="absolute w-full h-1 bg-white opacity-50" style={{ bottom: '100px' }} />

    {experienceData.map((exp, index) => (
      <div className="relative">
        <div className="absolute w-1 h-1 bg-white rounded-full" style={{ bottom: '100px', left: '50%' }} />
        <ExperienceCard
          key={exp.id}
          exp={exp}
          isSelected={index === position}
          onSelect={() => {
            setPosition(index);
            setSelectedExp(exp);
          }}
          cardRef={refs[index]}
        />
      </div>
    ))}
  </div>
</div>
<p className="text-gray-400 absolute bottom-5 left-1/2 transform -translate-x-1/2">Use the left and right arrow keys to move.</p>
</div>
);
};

export default Experience;
