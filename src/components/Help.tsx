
//@ts-nocheck
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import Draggable from 'react-draggable';

const Help = ({ onClose }) => {
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  const handleResize = (event, { element, size, handle }) => {
    setDimensions({ width: size.width, height: size.height });
  };

  return (
    <Draggable handle=".drag-handle">
      <Resizable width={dimensions.width} height={dimensions.height} onResize={handleResize}>
        <div
          className={`overflow-hidden shadow-lg border-2 border-gray-200 bg-white
                      transition-all ease-in-out duration-300`}
          style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        >
          {/* Top bar, which is the draggable area */}
          <div className="flex justify-between items-center bg-gray-200 p-2 drag-handle">
            <div className="flex space-x-2">
              {/* Close button */}
              <button onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full focus:outline-none" />
              {/* Other buttons */}
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
          </div>
          {/* Scrollable content area, should not be draggable */}
          {/* Make sure to subtract the height of the top bar from the total height to set the content area height */}
          <div className="p-4 text-sm text-gray-700 overflow-auto" style={{ height: `calc(${dimensions.height}px - 2rem)` }}>
            <p>
              To open and view items on your desktop, simply double-click on the icons located on the left side of the screen. Each double-click will launch the corresponding application, allowing you to access and interact with your content efficiently.
            </p>
            <p className="mt-2">
              You can close any open application by clicking the cross or red dot at the top of the application window. This action will terminate the application and remove it from the screen.
            </p>
            <p className="mt-2">
              For a list of all available terminal commands, type 'help' in the terminal. This will display a comprehensive list of commands that you can use to interact with the terminal application.
            </p>
            <p className="mt-2">
              There are various features scattered throughout the interface. We encourage you to explore and discover all the functionalities available. You might find handy tools and shortcuts that can enhance your productivity and overall experience.
            </p>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Help;
