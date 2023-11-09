import React from 'react';
import { FaAndroid, FaDatabase, FaGithub } from 'react-icons/fa';
import Sus1 from '../assets/sweb1.png'
import Sus2 from '../assets/sweb2.png'
import { Carousel } from 'react-responsive-carousel';

const ProjectSW = () => {
  // Placeholder images for the app demonstration

  const googleGreen = '#0f9d58'; // Google's green color for the 'Download APK' button

  return (
    <div className="w-full rounded overflow-hidden shadow-lg text-white"
         style={{ 
             background: 'linear-gradient(to right, #000, #121212)', // Themed gradient for SustainWebable
             border: '1px solid #2c2c2c' 
         }}>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-6">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-3xl font-bold mb-4" style={{ color: googleGreen }}>SustainWebable</h3>
                        <p className="text-gray-300 text-lg mb-4">
                            SustainWebable is an initiative to raise environmental awareness among web users and developers, providing insights into the carbon footprint of web activities.
                        </p>
                        <div className="mb-4">
                            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2" style={{ backgroundColor: googleGreen }}>Java</span>
                            <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2" style={{ backgroundColor: googleGreen }}>Firebase</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Note: Ensure the latest APK is installed for updated features.
                        </p>
                    </div>
                    <div className="mt-4">
                        <a href="https://github.com/Eqedos/SustainWebable" target='_blank' className="text-green-500 hover:text-green-400">
                            <FaGithub className="inline-block" size="2em" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className="h-50vh md:h-auto">
                    <img 
                    src={Sus1} 
                    alt="Vlogo" 
                    className="max-w-full h-auto object-contain md:w-1/4 md:h-screen" 
                    />
                </div>
                <div className="h-50vh md:h-auto">
                    <img 
                    src={Sus2} 
                    alt="Vlogo" 
                    className="max-w-full h-auto object-contain md:w-1/4 md:h-screen" 
                    />
                </div>
            </Carousel>
            </div>
        </div>
    </div>
  );
}

export default ProjectSW;
