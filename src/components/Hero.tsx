// @ts-nocheck
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue, AnimatePresence } from "framer-motion";
import { DiJavascript, DiAndroid, DiMysql, DiNodejsSmall, DiGit, DiCss3Full } from 'react-icons/di';
import { FaReact, FaDocker, FaLinux, FaPython } from 'react-icons/fa';
import ParthImage from "../assets/parth.png"; // Replace with the correct path to your image file

const TypingText = ({ text, className }) => {
    const characters = Array.from(text);
    return (
        <div className={className}>
            {characters.map((char, index) => {
                const opacity = useMotionValue(0);
                useEffect(() => {
                    setTimeout(() => {
                        opacity.set(1);
                    }, index * 100);
                }, []);
                return (
                    <div style={{ display: 'inline-block' }}>
                        <motion.div
                            key={index}
                            style={{ opacity }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -10, scale: 1.2, color: "#ffff00" }} // This makes the text rise up and turn yellow when hovered over
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

const Tooltip = ({ isVisible, children }) => {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'absolute',
            backgroundColor: '#000',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            color: '#0f0', // Set the text color to green
            bottom: '70%', // Position the tooltip above the image
            left: '60%', // Center the tooltip
            transform: 'translateX(-50%)', // Center the tooltip
            fontFamily: 'Courier, monospace', // Use a monospace font
            width: '270px', // Set a fixed width
          }}
        >
          <div style={{ backgroundColor: '#555', color: '#0f0', padding: '2px 5px', borderRadius: '5px 5px 0 0', border: '0.5px solid #fff', borderBottom: 'none' }}>
            Terminal - {currentTime}
          </div>
          <div style={{ padding: '10px', color: '#0f0', border: '0.5px solid #fff', borderRadius: '0 0 5px 5px' }}>
            {children.map((line, index) => (
              <div key={index}>
                <span style={{ color: '#0f0' }}>$</span> {line}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};




const ImageWithTooltip = ({ src, alt, className, initial, whileHover, transition, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="relative">
      <motion.img 
        src={src} 
        alt={alt} 
        className={className} 
        initial={initial}
        whileHover={whileHover}
        transition={transition}
        onHoverStart={() => setTooltipVisible(true)}
        onHoverEnd={() => setTooltipVisible(false)}
      />
      <Tooltip isVisible={isTooltipVisible}>{children}</Tooltip>
    </div>
  );
};

const Hero = () => {
    const icons = [
        { component: <DiJavascript size={50} color="#F0DB4F" />, name: 'JavaScript' },
        { component: <DiAndroid size={50} color="#3DDC84" />, name: 'Android' },
        { component: <DiMysql size={50} color="#00758F" />, name: 'MySQL' },
        { component: <DiNodejsSmall size={50} color="#68A063" />, name: 'Node.js' },
        { component: <DiGit size={50} color="#F34F29" />, name: 'Git' },
        { component: <DiCss3Full size={50} color="#1572B6" />, name: 'CSS3' },
        { component: <FaReact size={50} color="#61DBFB" />, name: 'React' },
        { component: <FaDocker size={50} color="#2496ED" />, name: 'Docker' },
        { component: <FaLinux size={50} color="#FCC624" />, name: 'Linux' },
        { component: <FaPython size={50} color="#3776AB" />, name: 'Python' }
    ];

    const iconControls = icons.map(() => useAnimation());

    useEffect(() => {
        icons.forEach((_, index) => {
            const controls = iconControls[index];
            const sequence = async () => {
                while (true) {
                    for (let i = 0; i < 360; i++) {
                        const angle = (2 * Math.PI * (i + index * 360 / icons.length)) / 360;
                        await controls.start({
                            x: 250 * Math.cos(angle),
                            y: 200 * Math.sin(angle),
                            transition: { duration: 0.1, ease: "linear" }
                        });
                    }
                }
            };
            sequence();
        });
    }, [iconControls]);

    const handleIconClick = iconName => {
        alert(`${iconName} was clicked`);
    };

    const handleScroll = () => {
        window.scrollTo({
            top: document.querySelector("#projects").offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <section className="h-screen flex items-center justify-center bg-black text-white relative">
            <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
                    <TypingText text="Parth Kumar" className="text-5xl font-bold mb-4"/>
                    <motion.p
                        className="text-2xl mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1.2, duration: 1 } }}
                    >
                        I make things <span style={{ textDecoration: 'underline' }}>work.</span>
                    </motion.p>
                    {icons.map((icon, index) => (
                        <motion.div 
                            key={icon.name}
                            animate={iconControls[index]}
                            initial={{ x: 0, y: 0 }}
                            whileHover={{ scale: 1.5, filter: 'brightness(1.5)' }} // Adjusted brightness here
                            className="absolute"
                            style={{ 
                                display: 'inline-flex', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                width: '50px', 
                                height: '50px' 
                            }}
                            onClick={() => handleIconClick(icon.name)}
                            drag // This makes the icon draggable
                        >
                            {icon.component}
                        </motion.div>
                    ))}
                    <motion.button 
                        onClick={handleScroll}
                        className="inline-block bg-white text-black px-8 py-3 text-lgfont-semibold rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                        whileHover={{ backgroundColor: "black", color: "white", border: "2px solid white", transition: { duration: 0.5 } }}
                        whileTap={{ backgroundColor: "white", color: "black", transition: { duration: 1 } }}
                        transition={{ duration: 0.2 }}
                    >
                        View Projects
                    </motion.button>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center">
                   <ImageWithTooltip
                        src={ParthImage}
                        alt="Parth Kumar"
                        className="w-full max-w-md h-auto object-cover rounded-lg"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {["Hi, I'm Parth Kumar", "I'm a software engineer", "I'm a full-stack developer with a keen interest in ML"]}
                    </ImageWithTooltip>
                </div>
            </div>
        </section>
    );
};

export default Hero;

