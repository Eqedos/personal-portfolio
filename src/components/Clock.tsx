// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Clock = ({ constraintsRef }) => {
    const [date, setDate] = useState(new Date());
    const [is24HourFormat, setIs24HourFormat] = useState(false);
  
    useEffect(() => {
      var timerID = setInterval(() => tick(), 1000);
  
      return function cleanup() {
          clearInterval(timerID);
        };
     });
  
    function tick() {
      setDate(new Date());
     }

    function toggleFormat() {
      setIs24HourFormat(!is24HourFormat);
    }
  
    return (
      <motion.div 
        className="text-white" 
        style={{ fontSize: '12px' }} 
        drag 
        dragConstraints={constraintsRef}
        onClick={toggleFormat}
      >
        <p>{is24HourFormat ? date.toISOString().substr(11, 8) : date.toLocaleTimeString()}</p>
        <p>{date.toLocaleDateString()}</p>
      </motion.div>
    );
}

export default Clock;
