//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const colorMapping = {
  "About Me": "text-indigo-500 ring-indigo-500", // Indigo is professional and trustworthy
  "Contact": "text-teal-500 ring-teal-500",      // Teal is inviting and associated with communication
  "Projects": "text-yellow-500 ring-yellow-500",  // Yellow is energetic and sparks creativity
  "Experience": "text-amber-900 ring-amber-900"   // Brick is bold and confident
};


const Icon = ({ text, onClick, icon: IconComponent, constraintsRef }) => {
  const [selected, setSelected] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const iconRef = useRef(null);
  let clickTimeout = null;

  const handleOutsideClick = (event) => {
    if (iconRef.current && !iconRef.current.contains(event.target)) {
      setSelected(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleSingleClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      clickTimeout = null;
      return;
    }

    clickTimeout = setTimeout(() => {
      setSelected(!selected);
      clickTimeout = null;
    }, 300);
  };

  const handleDoubleClick = () => {
    clearTimeout(clickTimeout);
    clickTimeout = null;
    setSelected(true);
    setIsSpinning(true);
    onClick();
    setTimeout(() => setIsSpinning(false), 500);
  };

  // Get the appropriate color from the mapping, defaulting to blue if not found
  const iconColorClass = colorMapping[text] || "text-blue-500 ring-blue-500";
  const selectedStyle = selected ? `ring-2 ring-offset-2 ${iconColorClass}` : '';

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={constraintsRef}
      whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)' }}
      className={`m-1 ${selectedStyle}`}
      ref={iconRef}
    >
      <div
        onClick={handleSingleClick}
        onDoubleClick={handleDoubleClick}
        className={`flex flex-col items-center justify-center p-2 text-center ${isSpinning ? 'cursor-wait' : 'cursor-pointer'} w-16 h-16 rounded`}
      >
        <IconComponent className={`w-8 h-8 ${selected ? iconColorClass.split(' ')[0] : 'text-gray-300'}`} />
        <p className={`text-xs mt-1 truncate ${selected ? iconColorClass.split(' ')[0] : 'text-white'}`}>{text}</p>
      </div>
    </motion.div>
  );
};

export default Icon;
