//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Importing icons from React Icons

// Define gradient presets
const gradients = {
  tealEmerald: 'from-teal-400 to-emerald-500',
  purplePink: 'from-purple-400 to-pink-500',
  orangeYellow: 'from-orange-400 to-yellow-500',
  greyWhite: 'from-gray-400 to-white',
  blueSky: 'from-blue-400 to-sky-700',
};

const GradientDot = ({ gradientClass, isSelected, onClick }) => (
  <div
    className={`h-4 w-4 rounded-full cursor-pointer ring-2 ring-white ${isSelected ? 'ring-offset-2' : ''} bg-gradient-to-r ${gradientClass}`}
    onClick={onClick}
  />
);

const CenteredText = ({ mainText, subText, instruction }) => {
  const [displayText, setDisplayText] = useState('');
  const [gradient, setGradient] = useState(gradients.orangeYellow);

  // Effect for instructions animation
  useEffect(() => {
    if (!instruction) return;
    let formattedInstruction = `${instruction}`.trim().replace(/\s+/g, '-');
    let currentText = '';
    let i = 0;
    const timerId = setInterval(() => {
      currentText += formattedInstruction[i];
      setDisplayText(currentText);
      i++;
      if (i >= formattedInstruction.length) {
        clearInterval(timerId);
      }
    }, 100);
    return () => clearInterval(timerId);
  }, [instruction]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-2 mb-4">
        {Object.entries(gradients).map(([name, gradientClass]) => (
          <GradientDot
            key={name}
            gradientClass={gradientClass}
            isSelected={gradient === gradientClass}
            onClick={() => setGradient(gradientClass)}
          />
        ))}
      </div>
      <motion.h1
        key={gradient} // Key based on gradient to trigger animation
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
      >
        {mainText}
      </motion.h1>
      <div className="mt-4 flex space-x-3">
        <span className="text-sm lg:text-lg font-medium text-gray-400">
          {subText}
        </span>
      </div>
      <p className="text-xs lg:text-sm text-green-300 bg-green-500 bg-opacity-25 rounded-md p-2 font-mono mt-2">
        {displayText}
      </p>
      {/* Social Media Links with updated hover colors */}
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/eqedos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FFFFFF] transition-colors duration-300">
          <FaGithub size={24} />
        </a>
        <a href="mailto:parthkumarj117@gmail.com" className="text-gray-600 hover:text-[#D44638] transition-colors duration-300">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.linkedin.com/in/parth-kumar-j117/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0e76a8] transition-colors duration-300">
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </div>
  );
};

export default CenteredText;
