//@ts-nocheck
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';
import Ecode from '../assets/ecode.png';

const ProjectEcode = () => {
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
                            <h3 className="text-3xl font-bold mb-4" style={{ color: '#22c55e' }}>Ecode</h3>
                            <p className="text-gray-300 text-lg mb-4">
                                Building a Sustainable Code Revolution, Ecode transforms coding practices with a focus on environmental sustainability by harnessing the power of an LLM API for code analysis.
                            </p>
                            <p className="text-gray-300 text-lg mb-4">
                                We faced the challenge of adapting LLM API for code analysis, creating a database of sustainable guidelines, and aligning them with real-world practices.
                            </p>
                            <div className="mb-4">
                                <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">React</span>
                                <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Node.js</span>
                                <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">Vite</span>
                            </div>
                            <p className="text-gray-300 text-lg mb-4">
                                Features include Carbon Footprint Tracking and a GPT Chatbot to provide insights and sustainable optimization suggestions for your projects.
                            </p>
                            <p className="text-gray-400 text-sm">
                                Note: To set up locally, clone the repository, install dependencies, and start the development server.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Eqedos/WTHFinal" target='_blank' className="text-green-300 hover:text-green-200">
                                <FaGithub className="inline-block" size="2em" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6">
                    <Carousel autoPlay infiniteLoop>
                        <div>
                            <img src={Ecode} alt="Parth" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default ProjectEcode;
