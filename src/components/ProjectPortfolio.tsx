//@ts-nocheck
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from 'react-icons/fa';
import Port1 from '../assets/port1.png'
import Port2 from '../assets/port2.png'
import Port3 from '../assets/port3.png'

const ProjectPortfolio = () => {
    const primaryColor = '#78DEC7'; // A unique mint green color for vibrant contrast
    const secondaryColor = '#D896FF'; // A soft purple for accents
    const tertiaryColor = '#FFC482'; // A warm peach color for additional accents

    return (
        <div className="w-full rounded overflow-hidden shadow-lg text-white"
             style={{ 
                 background: 'linear-gradient(to right, #121212, #2D2D2D)', // Dark gradient background
                 border: '1px solid #333333' // Slightly lighter border for subtle contrast
             }}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 p-6">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>Portfolio</h3>
                            <p className="text-gray-300 text-lg mb-4">
                                Enter the creative space of my portfolio. This site, reminiscent of an OS interface, highlights sophisticated React.js applications and customizable features.
                            </p>
                            <div className="mb-4">
                                {/* Unique-colored technology tags */}
                                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{ backgroundColor: secondaryColor, color: '#2D2D2D' }}>React</span>
                                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2" style={{ backgroundColor: tertiaryColor, color: '#2D2D2D' }}>JavaScript</span>
                                {/* Add more technology tags with unique colors */}
                            </div>
                            <p className="text-gray-400 text-sm">
                                Explore the detailed projects and technical skills featured within.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Eqedos/personal-portfolio" target='_blank' className="hover:text-primaryColor">
                                <FaGithub className="inline-block" size="2em" style={{ color: secondaryColor }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6">
                    <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src={Port1} alt="Vmain5" style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src={Port2} alt="Vmain5" style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }} />
                    </div>
                    <div>
                        <img src={Port3} alt="Vmain5" style={{ maxWidth: '100%', height: '50vh', objectFit: 'contain' }} />
                    </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ProjectPortfolio;
