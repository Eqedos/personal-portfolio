//@ts-nocheck
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { FolderIcon } from '@heroicons/react/24/outline';
import { FaUserAlt, FaPhoneAlt, FaReact, FaNodeJs, FaGitAlt, FaTerminal, FaBriefcase } from 'react-icons/fa';
import { DiJavascript1, DiHtml5, DiCss3, DiMongodb, DiPython } from 'react-icons/di';
import Icon from './components/Icon';
import StatusBarElement from './components/StatusBarElement';
import Clock from './components/Clock';
import ColorPickerModal from './components/ColorPickerModal';
import CenteredText from './components/CenteredText';
import Terminal from './components/Terminal';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Help from './components/Help';
import { useMediaQuery } from 'react-responsive';
import { useHotkeys } from 'react-hotkeys-hook';
import { Analytics } from '@vercel/analytics/react';

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
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const toggleColorPicker = () => setShowColorPicker(!showColorPicker);
  const toggleTerminal = () => setShowTerminal(!showTerminal);
  const toggleAboutMe = () => setShowAboutMe(!showAboutMe);
  const toggleContact = () => setShowContact(!showContact);
  const toggleProjects = () => setShowProjects(!showProjects);
  const toggleExperience = () => setShowExperience(!showExperience);
  const toggleHelp = () => setShowHelp(!showHelp);

  const terminalToggles = {
    toggleColorPicker,
    toggleTerminal,
    toggleAboutMe,
    toggleContact,
    toggleProjects,
    toggleExperience,
  };
  useHotkeys('t', toggleTerminal);
  useHotkeys('h', toggleHelp);

  const colorPickerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col h-screen justify-center items-center bg-black">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          PK
        </h1>
        <h2 className="mt-2 text-2xl font-light text-gray-300">
          Coming Soon!
        </h2>
        <p className="mt-4 text-gray-400 max-w-xs text-center">
          My portfolio website is not yet available for mobile devices, but I'm on it!
        </p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col h-screen overflow-hidden relative">
      <div className="absolute top-4 right-4 text-gray-400 text-xs opacity-50">
        Press <kbd className="p-1 bg-gray-700">h</kbd> for help | Press <kbd className="p-1 bg-gray-700">t</kbd> for terminal
      </div>
      <main className="flex-grow p-4 relative z-10 flex justify-start items-start">
        <div className="flex flex-col items-start z-30">
          <div className="text-gray-200 text-sm opacity-90 font-semibold mb-2">
            DOUBLE CLICK.
          </div>
          <Icon text="About Me" onClick={toggleAboutMe} icon={FaUserAlt} className="w-12 h-12" />
          <Icon text="Projects" onClick={toggleProjects} icon={FolderIcon} className="w-12 h-12" />
          <Icon text="Contact" onClick={toggleContact} icon={FaPhoneAlt} className="w-12 h-12" />
          <Icon text="Experience" onClick={toggleExperience} icon={FaBriefcase} className="w-12 h-12" />
        </div>
        <CenteredText
          mainText="Parth Kumar"
          subText="Student | Software Engineer"
          instruction="I make things work."
        />
        {showAboutMe && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AboutMe onClose={toggleAboutMe} />
          </motion.div>
        )}
        {showContact && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Contact onClose={toggleContact} />
          </motion.div>
        )}
        {showExperience && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Experience onClose={toggleExperience} />
          </motion.div>
        )}
        {showProjects && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Projects onClose={toggleProjects} />
          </motion.div>
        )}
        {showHelp && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Help onClose={toggleHelp} />
          </motion.div>
        )}
      </main>
      {!showExperience && !showProjects && (
        <footer className="p-4 bg-black text-white flex items-center justify-center z-10">
          {statusBarIcons.map(iconData => (
            <StatusBarElement key={iconData.id} onClick={() => {}} icon={iconData.icon} color={iconData.color} className="w-10 h-10" />
          ))}
        </footer>
      )}
      {!showProjects && !showExperience && (
        <div>
          <div className="absolute left-0 bottom-0 p-4 flex items-center z-30">
            <FaTerminal className="text-white w-8 h-8 cursor-pointer" onClick={toggleTerminal} />
          </div>
          <div className="absolute right-0 bottom-0 p-4 flex items-center z-30">
            <motion.div
              onClick={toggleColorPicker}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-yellow-500 shadow cursor-pointer mr-2"
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
          {showTerminal && <Terminal onClose={toggleTerminal} />}
          <Analytics />
        </div>
      )}
    </div>
  );
}

export default App;
