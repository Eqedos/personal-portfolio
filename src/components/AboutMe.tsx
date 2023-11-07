//@ts-nocheck
import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import { IoPlayCircle, IoReloadCircle, IoEyeOff, IoEye } from 'react-icons/io5';
import 'react-resizable/css/styles.css';
import 'tailwindcss/tailwind.css';
import Parth from '../assets/parth.png';

const Cell = ({ sequenceNumber, codeDescription, execute }) => {
  const [output, setOutput] = useState('');
  const [timeTaken, setTimeTaken] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);

  const runCode = () => {
    setIsRunning(true);
    const startTime = performance.now();

    setTimeout(() => {
      const result = execute();
      const endTime = performance.now();
      setOutput(result);
      setTimeTaken((endTime - startTime).toFixed(2));
      setIsRunning(false);
    }, 20);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center text-sm bg-gray-100 border-l-4 border-blue-600 p-3 rounded shadow-sm">
        <button
          onClick={runCode}
          className="flex-shrink-0 mr-2 p-1 rounded hover:bg-gray-200 focus:outline-none"
          title="Run Code"
          disabled={isRunning}
        >
          {isRunning ? (
            <IoReloadCircle className="h-6 w-6 text-blue-600 animate-spin" />
          ) : (
            <IoPlayCircle className="h-6 w-6 text-blue-600" />
          )}
        </button>
        <div className="flex-grow">
          <p className="text-blue-600">Cell [{sequenceNumber}]:</p>
          <pre className="text-black">{codeDescription}</pre>
        </div>
        <button
          onClick={() => setShowOutput(!showOutput)}
          className="text-gray-600 hover:text-gray-800 focus:outline-none text-xs"
          title={showOutput ? 'Hide Output' : 'Show Output'}
        >
          {showOutput ? <IoEyeOff /> : <IoEye />}
        </button>
      </div>
      {showOutput && (
        <div className="text-sm pl-8 mt-2">
          {isRunning ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="flex justify-between">
              <pre className="text-black">{output}</pre>
              {timeTaken && <span className="text-gray-500">(Time taken: {timeTaken} ms)</span>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AboutMe = ({ onClose }) => {
  const [disabled, setDisabled] = useState(false);

  const onResizeStart = () => setDisabled(true);
  const onResizeStop = () => setDisabled(false);
  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  const executeName = () => "Parth Kumar";
  const executeHobbies = () => {
    const hobbies = ['Reading', 'Writing', 'Coding', 'Gaming', 'Music, Movies, TV Shows', 'Sports'];
    return 'Hobbies:\n' + hobbies.map(hobby => `- ${hobby}`).join('\n');
  };
  const executeEducation = () => {
    const education = ['Singapore University of Technology and Design', 'Computer Science and Design', '· Expected graduation: April 2025'];
    return 'Education:\n' + education.map(edu => `- ${edu}`).join('\n');
  }
const executeSkills = () => {
  const skills = [
    'Programming Languages: Python, C/C++, Java, JavaScript, TypeScript, Kotlin',
    'Tools: Linux (Mint & Ubuntu), Windows, VS Code, Android Studio, GitHub',
    'Frameworks & Technologies:',
    '· Frontend: HTML, CSS, React, React Native, Svelte',
    '· Backend: Express, Node.js, Flask, Next.js, Django',
    '· Database: MongoDB, MySQL, Firebase',
    '· Other: tRPC, Vite, Tailwind, Prisma, Docker',
    'ML/Data Science Libraries: TensorFlow, scikit-learn',
    'Certifications: Machine Learning Specialization'
  ];
  return 'Skills:\n' + skills.map(skill => `- ${skill}`).join('\n');
};

  
  
  const executeProfilePic = () => (
    <div style={{ textAlign: 'center' }}>
      <img src={Parth} alt="Profile" style={{ maxWidth: '100px', borderRadius: '50%' }} />
    </div>
  );

  return (
    <Draggable handle=".handle" disabled={disabled}>
      <ResizableBox
        width={620}
        height={400}
        minConstraints={[0, 0]}
        maxConstraints={[window.innerWidth, window.innerHeight]}
        onResizeStart={onResizeStart}
        onResizeStop={onResizeStop}
        resizeHandles={['se', 'sw', 'ne', 'nw', 'e', 'w']}
        className="overflow-hidden shadow-lg font-mono text-gray-700 bg-[#F5F5F5] rounded-md border border-gray-300"
      >
        <div className="flex justify-between items-center handle p-5 bg-gray-200 border-b border-gray-300">
          <h1 className="text-xl font-bold text-gray-700">about.me</h1>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-1 cursor-pointer" onClick={handleCloseClick}></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="overflow-auto p-5" style={{ height: 'calc(100% - 50px)' }}>
          <Cell sequenceNumber={1} codeDescription="Display name" execute={executeName} />
          <Cell sequenceNumber={2} codeDescription="Display profile picture" execute={executeProfilePic} />
          <Cell sequenceNumber={3} codeDescription="List hobbies" execute={executeHobbies} />
          <Cell sequenceNumber={4} codeDescription="List skills" execute={executeSkills} />
          <Cell sequenceNumber={5} codeDescription="List education" execute={executeEducation} />
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default AboutMe;
