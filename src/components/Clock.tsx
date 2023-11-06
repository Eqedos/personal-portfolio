//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Clock = ({ constraintsRef }) => {
    const [date, setDate] = useState(new Date());
    const [is24HourFormat, setIs24HourFormat] = useState(false);

    useEffect(() => {
        // Store the timer ID to clear it on unmount
        const timerID = setInterval(() => tick(), 1000);
  
        // Cleanup function to clear the interval
        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    function tick() {
        setDate(new Date());
    }

    function toggleFormat() {
        setIs24HourFormat(!is24HourFormat);
    }

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        // Pad the minutes and seconds with leading zeros, if required
        minutes = minutes < 10 ? '0'+minutes : minutes;
        seconds = seconds < 10 ? '0'+seconds : seconds;
        // Format the time as HH:MM:SS
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <motion.div 
            className="text-white" 
            style={{ fontSize: '12px' }} 
            drag 
            dragConstraints={constraintsRef}
            onClick={toggleFormat}
        >
            <p>{is24HourFormat ? formatTime(date) : date.toLocaleTimeString()}</p>
            <p>{date.toLocaleDateString()}</p>
        </motion.div>
    );
}

export default Clock;
