//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [currentDir, setCurrentDir] = useState("/");
  const inputRef = useRef(null);
  const executeHobbies = () => {
    const hobbies = [
      'Reading',
      'Writing',
      'Coding',
      'Gaming',
      'Music, Movies, TV Shows',
      'Sports'
    ];
    return `Hobbies:\n${hobbies.map(hobby => `- ${hobby}`).join('\n')}`;
  };
  
  // Define the function to execute and return skills as a string
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
    return `Skills:\n${skills.map(skill => `- ${skill}`).join('\n')}`;
  };
  
  // Define the function to execute and return education as a string
  const executeEducation = () => {
    const education = [
      'Singapore University of Technology and Design',
      'Computer Science and Design',
      '· Expected graduation: April 2025'
    ];
    return `Education:\n${education.map(edu => `- ${edu}`).join('\n')}`;
  };

  // Define the file system with directories and special "files" that contain your contact details
  const fileSystem = {
    "/": ["About-Me", "Contact"],
    "/Contact": ["sendEmail", "LinkedIn", "GitHub"],
    "/About-Me": [
      "name",
      "age",
      "location",
      "education",
      "skills",
    ],
    "/Contact/sendEmail": <span>Email: <a href="mailto:parthkumarj117@gmail.com" className="text-blue-500 hover:text-blue-700">parthkumarj117@gmail.com</a></span>,
    "/Contact/LinkedIn": <span>LinkedIn: <a href="https://www.linkedin.com/in/parth-kumar-j117" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">parth-kumar-j117</a></span>,
    "/Contact/GitHub": <span>GitHub: <a href="https://www.github.com/eqedos" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">eqedos</a></span>,
    "/About-Me/name": "Name: Parth Kumar",
    "/About-Me/hobbies": executeHobbies(),
    "/About-Me/skills": executeSkills(),
    "/About-Me/education": executeEducation(),
    "/About-Me/age": "20",
    "/About-Me/location": "Singapore",

  };
  

  // Define the commands 'ls', 'cd', 'pwd', and 'clear'
  const commands = {
    ls: () => {
      return <span style={{ color: "#FFEB3B" }}>{fileSystem[currentDir]?.join("    ") || "No files in this directory."}</span>;
    },
    cd: (directory) => {
      if (directory === "..") {
        if (currentDir === "/") return <span style={{ color: "#F44336" }}>No parent directory.</span>;
        const paths = currentDir.split("/").filter(Boolean);
        paths.pop();
        const newPath = `/${paths.join("/")}`;
        setCurrentDir(newPath);
        return <span style={{ color: "#8BC34A" }}>Changed directory to {newPath}</span>;
      }

      const path = directory.startsWith("/") ? directory : `${currentDir}/${directory}`.replace("//", "/");
      // Check if path is a special "file" with contact details
      if (path in fileSystem) {
        const content = fileSystem[path];
        if (typeof content === 'string' || React.isValidElement(content)) {
          // Print the details from the "file"
          return <span style={{ color: "#8BC34A" }}>{content}</span>;
        } else {
          setCurrentDir(path);
          return <span style={{ color: "#8BC34A" }}>Changed directory to {path}</span>;
        }
      } else {
        return <span style={{ color: "#F44336" }}>Directory not found: {directory}</span>;
      }
    },
    help: () => {
      return (
        <div>
          <p style={{ color: "#FFEB3B" }}>Available Commands:</p>
          <ul>
            <li style={{ color: "#4CAF50" }}>ls - List directory contents</li>
            <li style={{ color: "#4CAF50" }}>cd - Change the directory</li>
            <li style={{ color: "#4CAF50" }}>pwd - Print name of current/working directory</li>
            <li style={{ color: "#4CAF50" }}>clear - Clear the terminal screen</li>
            <li style={{ color: "#4CAF50" }}>help - Display help for built-in commands</li>
          </ul>
        </div>
      );
    },
    pwd: () => {
      return <span style={{ color: "#8BC34A" }}>{currentDir}</span>;
    },
    clear: () => {
      setOutput([]);
      return ''; // No output for clear
    },
  };

  // Handle the execution of commands
  const executeCommand = (input) => {
    const [command, ...args] = input.split(" ");
    if (commands[command]) {
      const result = commands[command](...args);
      return result;
    } else {
      return <span style={{ color: "#F44336" }}>Command not found: {command}</span>;
    }
  };

  // Handle the key down event for input field
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const commandResponse = executeCommand(input);
      let newOutput = commandResponse === '' ? [] : [...output, <span style={{ color: "#4CAF50" }}>root@localhost:{currentDir}$ {input}</span>, commandResponse];
      const maxLines = 100; // Limit the number of lines in the output

      if (newOutput.length > maxLines) {
        newOutput = newOutput.slice(newOutput.length - maxLines);
      }

      setOutput(newOutput);
      setInput('');
      // Scroll to bottom to ensure the latest output is visible
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Automatically focus the input on render
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Render the terminal UI
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.div
        className="bg-gray-800 text-white p-4 rounded-lg w-1/2 h-1/2"
        drag
        dragElastic={0.5}
        dragMomentum={false}
      >
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.3 }} className="bg-red-500 rounded-full w-3 h-3 mr-2 cursor-pointer" onClick={onClose}></motion.div>
            <motion.div whileHover={{ scale: 1.3 }} className="bg-yellow-500 rounded-full w-3 h-3 mr-2"></motion.div>
            <motion.div whileHover={{ scale: 1.3 }} className="bg-green-500 rounded-full w-3 h-3 mr-2"></motion.div>
            <span style={{ color: "#4CAF50" }}>root@localhost:~$</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200 focus:outline-none">
            &times;
          </button>
        </div>
        <div className="scrollable-terminal-area scrollbar-hide" style={{ maxHeight: 'calc(100% - 25px)', overflowY: 'auto' }}>
          <div className="mt-4 text-white">
            {output.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <div className="mt-4 flex items-center">
              <span style={{ color: "#4CAF50" }}>root@localhost:{currentDir}$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-white outline-none w-full"
                autoFocus
                placeholder="Type your command here..."
              />
            </div>
          </div>
          <div ref={inputRef} /> {/* Ensure this is at the bottom of your scrollable content */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Terminal;
