//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Icon = ({ text, onClick, icon: IconComponent, constraintsRef }) => {
  const [selected, setSelected] = useState(false);
  const [opacity, setOpacity] = useState('bg-transparent');
  const [isSpinning, setIsSpinning] = useState(false);
  const iconRef = useRef(null);
  let clickTimeout = null;

  const handleOutsideClick = (event) => {
    if (iconRef.current && !iconRef.current.contains(event.target)) {
      setSelected(false);
      setOpacity('bg-transparent');
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
      setOpacity(selected ? 'bg-transparent' : 'bg-white bg-opacity-50');
      clickTimeout = null;
    }, 300);
  };

  const handleDoubleClick = () => {
    clearTimeout(clickTimeout);
    clickTimeout = null;
    setSelected(true);
    setOpacity('bg-white bg-opacity-75');
    setIsSpinning(true);
    onClick();
    setTimeout(() => setIsSpinning(false), 500);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={constraintsRef}
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
      className="m-1"
      ref={iconRef}
    >
      <div
        onClick={handleSingleClick}
        onDoubleClick={handleDoubleClick}
        className={`flex flex-col items-center justify-center p-2 text-center ${isSpinning ? 'cursor-wait' : 'cursor-pointer'} ${opacity} w-16 h-16`}
      >
        <IconComponent className="w-8 h-8 text-white" />
        <p className="text-xs mt-1 text-white truncate">{text}</p>
      </div>
    </motion.div>
  );
};

export default Icon;
