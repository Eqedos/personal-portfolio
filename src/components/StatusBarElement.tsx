//@ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";

const StatusBarElement = ({ onClick, icon: IconComponent, color }) => {
    return (
      <IconContext.Provider value={{className: "w-8 h-8 mr-2 hover:w-12 hover:h-12 transition-all duration-200 ease-in-out" }}>
        <motion.div whileHover={{ scale: 1.5, color: color }}>
          <IconComponent onClick={onClick} />
        </motion.div>
      </IconContext.Provider>
    );
};

export default StatusBarElement;
