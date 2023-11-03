import React from "react";

const Header: React.FC = () => {
    return (
      <header className="flex items-center justify-between p-5 bg-black">
        <div className="flex items-center">
          {/* Replaced img with a text element */}
          <span className="text-white text-xl font-bold mr-2">PK</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-white px-3 py-1 rounded-full transition-colors duration-300 hover:bg-white hover:text-black">About</a>
            </li>
            <li>
              <a href="#projects" className="text-white px-3 py-1 rounded-full transition-colors duration-300 hover:bg-white hover:text-black">Projects</a>
            </li>
            <li>
              <a href="#skills" className="text-white px-3 py-1 rounded-full transition-colors duration-300 hover:bg-white hover:text-black">Skills</a>
            </li>
            <li>
              <a href="#contact" className="text-white px-3 py-1 rounded-full transition-colors duration-300 hover:bg-white hover:text-black">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;