//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import { IoClose, IoMail, IoSend, IoLogoLinkedin, IoLogoGithub, IoMoonSharp } from 'react-icons/io5';
import { useForm, ValidationError } from '@formspree/react';
import 'react-resizable/css/styles.css';

const Contact = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [state, handleSubmit] = useForm("xeqbdpjb");

  useEffect(() => {
    if (state.succeeded) {
      showNotification('Message sent successfully!', 'success');
    } else if (Array.isArray(state.errors) && state.errors.length > 0) {
      showNotification('Failed to send message. Please try again.', 'error');
    }
  }, [state.succeeded, state.errors]);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    const timer = setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 2000);
    return () => clearTimeout(timer);
  };

  const onResizeStart = () => setDisabled(true);
  const onResizeStop = () => setDisabled(false);

  const handleCloseClick = () => {
    if (onClose) onClose();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
    exit: { opacity: 0, y: 50 },
  };

  const notificationVariants = {
    hidden: { opacity: 0, x: '-50%', y: -50 },
    visible: { opacity: 1, x: '-50%', y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: '-50%', y: -50, transition: { duration: 0.5 } }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
    pressed: { scale: 0.98, transition: { duration: 0.3 } },
  };

  return (
    <div className={`relative ${darkMode ? 'dark' : ''}`}>
      
      <AnimatePresence>
        {notification.show && (
          <motion.div
            className={`absolute top-0 left-1/2 -translate-x-1/2 mt-4 p-3 rounded z-50 ${
              notification.type === 'success' ? 'bg-green-100 dark:bg-green-800 border-green-400 text-green-700' : 'bg-red-100 dark:bg-red-800 border-red-400 text-red-700'
            }`}
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
      <Draggable handle=".handle" disabled={disabled}>
        <ResizableBox
          width={600}
          height={350}
          minConstraints={[600, 400]}
          onResizeStart={onResizeStart}
          onResizeStop={onResizeStop}
          resizeHandles={['se', 'sw', 'ne', 'nw', 'e', 'w']}
          className="shadow-lg font-mono text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700"
        >          
          <motion.div
            className="flex items-center justify-between handle p-5 bg-gray-200 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 cursor-move relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center space-x-2">
              <IoMail className="text-blue-500 dark:text-blue-300" />
              <span className="font-semibold text-lg">New Message</span>
            </div>

            <button onClick={toggleDarkMode} className="absolute left-1/2 transform -translate-x-1/2">
              <IoMoonSharp className="text-gray-700 dark:text-gray-300 cursor-pointer" />
            </button>

            {/* Spacer div */}
            <div className="flex-grow"></div>

            <IoClose className="cursor-pointer text-red-500 dark:text-red-300" onClick={handleCloseClick} />
          </motion.div>

          <div className="p-5 overflow-auto" style={{ height: 'calc(100% - 50px)' }}>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <label htmlFor="email" className="hidden">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                placeholder="Your Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 dark:text-red-300"
              />
              <label htmlFor="message" className="hidden">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                rows="5"
                placeholder="Compose email"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 dark:text-red-300"
              />
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="pressed"
              >
                <IoSend className="mr-2" />
                Send
              </motion.button>
            </form>
          </div>
          <div className="flex justify-center items-center space-x-4 pb-4">
            <a href="https://www.linkedin.com/in/parth-kumar-j117" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin className="text-blue-600 hover:text-blue-400 dark:text-blue-300 dark:hover:text-blue-200 cursor-pointer" size={30} />
            </a>
            <a href="https://github.com/eqedos" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub className="text-gray-700 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-200 cursor-pointer" size={30} />
            </a>
            <a href="mailto:parthkumarj117@gmail.com">
              <IoMail className="text-red-500 hover:text-red-300 dark:text-red-300 dark:hover:text-red-200 cursor-pointer" size={30} />
            </a>
          </div>
        </ResizableBox>
      </Draggable>
    </div>
  );
};

export default Contact;
