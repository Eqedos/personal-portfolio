import React, { useRef } from 'react';
import 'tailwindcss/tailwind.css';
import { FolderIcon } from '@heroicons/react/24/outline';
import { FaUserAlt, FaPhoneAlt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'; // Added more FontAwesome icons
import { DiJavascript1, DiHtml5, DiCss3, DiMongodb, DiPython } from 'react-icons/di'; // Added Devicons for MongoDB and Python
import Icon from './components/Icon';
import StatusBarElement from './components/StatusBarElement';

const App = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="flex flex-col h-screen bg-black overflow-hidden">
      <main className="flex-grow p-4">
        <div className="flex flex-col h-full justify-start items-start"
          style={{ position: 'relative', width: '100%', height: '100%' }}
          ref={constraintsRef}
        >
          <Icon text="About Me" onClick={() => {}} icon={FaUserAlt} constraintsRef={constraintsRef} />
          <Icon text="Projects" onClick={() => {}} icon={FolderIcon} constraintsRef={constraintsRef} />
          <Icon text="Contact" onClick={() => {}} icon={FaPhoneAlt} constraintsRef={constraintsRef} />
        </div>
      </main>
      <footer className="p-4 bg-black text-white flex items-center justify-center">
        <StatusBarElement onClick={() => {}} icon={DiJavascript1} color="yellow" />
        <StatusBarElement onClick={() => {}} icon={DiHtml5} color="blue" />
        <StatusBarElement onClick={() => {}} icon={DiCss3} color="purple" />
        <StatusBarElement onClick={() => {}} icon={FaReact} color="cyan" />
        <StatusBarElement onClick={() => {}} icon={FaNodeJs} color="green" />
        <StatusBarElement onClick={() => {}} icon={DiMongodb} color="green" />
        <StatusBarElement onClick={() => {}} icon={FaGitAlt} color="orange" />
        <StatusBarElement onClick={() => {}} icon={DiPython} color="blue" />
      </footer>
    </div>
  );
};

export default App;
