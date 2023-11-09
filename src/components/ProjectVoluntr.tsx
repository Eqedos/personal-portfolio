import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';
import Vlogo from '../assets/vlogo.png';
import Vmain from '../assets/vmain1.png';
import Vmain2 from '../assets/vmain2.png';
import Vmain3 from '../assets/vmain3.png';
import Vmain4 from '../assets/vmain4.png';
import Vmain5 from '../assets/vmain5.png';

const ProjectVoluntr = () => {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg text-white"
             style={{ 
                 background: 'linear-gradient(to right, #121212, #1e1e1e)', 
                 border: '1px solid #2c2c2c' 
             }}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 p-6">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-3xl font-bold mb-4" style={{ color: '#4ADE80' }}>Voluntr</h3>
                            <p className="text-gray-300 text-lg mb-4">
                                Voluntr is a Tinder-like platform for altruistic engagement, designed to seamlessly connect organizations with enthusiastic volunteers. Crafted with Java and Firebase, it's a school project aimed at making volunteerism more accessible and engaging.
                            </p>
                            <div className="mb-4">
                                <span className="inline-block bg-teal-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Java</span>
                                <span className="inline-block bg-teal-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Firebase</span>
                            </div>
                            <p className="text-gray-300 text-lg mb-4">
                                User Profiles, Matching System, Badges, and more features enable users to connect and earn rewards for volunteering.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Note: Firebase key is expired, configure your own to use this app.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Eqedos/Voluntr1D" target='_blank' className="text-teal-300 hover:text-teal-200">
                                <FaGithub className="inline-block" size="2em" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6">
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Vlogo} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Vmain} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Vmain2} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Vmain3} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Vmain4} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Vmain5} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
            </Carousel>


                </div>
            </div>
        </div>
    )
}

export default ProjectVoluntr;
