//@ts-nocheck
import React from 'react';
import { HexColorPicker } from "react-colorful";
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.3 } }
};

const ColorPickerModal = ({ color, setColor, showModal, setShowModal }) => {
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 10
            }}
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          {/* Modal */}
          <motion.div
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              backgroundColor: 'white',
              zIndex: 9999,
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <HexColorPicker color={color} onChange={handleColorChange} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ColorPickerModal;
