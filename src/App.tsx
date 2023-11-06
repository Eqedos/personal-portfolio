//@ts-nocheck
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FolderIcon } from '@heroicons/react/24/outline';
import { FaUserAlt, FaPhoneAlt, FaReact, FaNodeJs, FaGitAlt, FaTerminal } from 'react-icons/fa';
import { DiJavascript1, DiHtml5, DiCss3, DiMongodb, DiPython } from 'react-icons/di';
import Icon from './components/Icon';
import StatusBarElement from './components/StatusBarElement';
import Clock from './components/Clock';
import ColorPickerModal from './components/ColorPickerModal';
import CenteredText from './components/CenteredText';
import Terminal from './components/Terminal';
import { useHotkeys } from 'react-hotkeys-hook';

const statusBarIcons = [
  { id: 'js', icon: DiJavascript1, color: "yellow" },
  { id: 'html', icon: DiHtml5, color: "blue" },
  { id: 'css', icon: DiCss3, color: "purple" },
  { id: 'react', icon: FaReact, color: "cyan" },
  { id: 'node', icon: FaNodeJs, color: "green" },
  { id: 'mongo', icon: DiMongodb, color: "green" },
  { id: 'git', icon: FaGitAlt, color: "orange" },
  { id: 'python', icon: DiPython, color: "blue" },
];

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#000"); // Default color set to dark grey
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false); // State for Terminal visibility

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const toggleTerminal = () => { // Function to toggle Terminal visibility
    setShowTerminal(!showTerminal);
  };

  useHotkeys('t', toggleTerminal); // Bind Ctrl+T to toggleTerminal

  const colorPickerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <main className="flex-grow p-4 relative z-10">
        <div className="flex flex-col justify-start items-start h-full">
          <div className="z-20">
            <Icon text="About Me" onClick={() => {}} icon={FaUserAlt} />
            <Icon text="Projects" onClick={() => {}} icon={FolderIcon} />
            <Icon text="Contact" onClick={() => {}} icon={FaPhoneAlt} />
          </div>
          <CenteredText
            mainText="Parth Kumar"
            subText="Student | Software Engineer"
            instruction="I make things work."
          />
        </div>
      </main>
      <footer className="p-4 bg-black text-white flex items-center justify-center z-10">
        {statusBarIcons.map(iconData => (
          <StatusBarElement key={iconData.id} onClick={() => {}} icon={iconData.icon} color={iconData.color} />
        ))}
      </footer>
      <div className="absolute left-0 bottom-0 p-4 flex items-center z-20">
        <FaTerminal className="text-white w-6 h-6 cursor-pointer" onClick={toggleTerminal} />
      </div>
      <div className="absolute right-0 bottom-0 p-4 flex items-center z-20">
        <motion.div
          onClick={toggleColorPicker}
          className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-500 shadow cursor-pointer mr-2"
          aria-label="Color picker"
          initial="hidden"
          animate="visible"
          variants={colorPickerVariants}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <Clock />
      </div>
      {showColorPicker && (
        <ColorPickerModal
          color={backgroundColor}
          setColor={setBackgroundColor}
          showModal={showColorPicker}
          setShowModal={setShowColorPicker}
        />
      )}
      {showTerminal && <Terminal onClose={toggleTerminal} />} {/* Pass toggleTerminal as onClose prop */}
    </div>
  );
};

export default App;
