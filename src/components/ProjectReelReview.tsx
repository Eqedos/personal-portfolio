import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';
import Tmain from '../assets/tmain.png';
import Tmain2 from '../assets/tmain2.png';
import Tmain3 from '../assets/tmain3.png';
import Tmain4 from '../assets/tmain4.png';
import Tmain5 from '../assets/tmain5.png';

const ProjectReelReview = () => {
    // Placeholder images for the carousel
    const images = ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'];

    const tiktokPurple = '#69c9d0'; // TikTok's purple color for the 'Learn More' link

    return (
        <div className="w-full rounded overflow-hidden shadow-lg text-white"
             style={{ 
                 background: 'linear-gradient(to right, #000, #121212)', // TikTok themed gradient
                 border: '1px solid #2c2c2c' 
             }}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 p-6">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-3xl font-bold mb-4" style={{ color: '#fe2c55' }}>ReelReview</h3> {/* TikTok red color */}
                            <p className="text-gray-300 text-lg mb-4">
                                ReelReview integrates with TikTok Shop to offer a platform for sharing TikTok video reviews, transforming the e-commerce experience.
                            </p>
                            <div className="mb-4">
                                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2" style={{ backgroundColor: '#fe2c55' }}>React Native</span> {/* TikTok red color */}
                                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2" style={{ backgroundColor: '#fe2c55' }}>TypeScript</span> {/* TikTok red color */}
                                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2" style={{ backgroundColor: '#fe2c55' }}>Firebase</span> {/* TikTok red color */}
                            </div>
                            <p className="text-gray-400 text-sm">
                                Note: Firebase key is expired, configure your own to use this app.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="https://github.com/Eqedos/TikTok-Shop" target='_blank' className="text-purple-500 hover:text-purple-400">
                                <FaGithub className="inline-block" size="2em" />
                            </a> {/* TikTok purple color */}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6">
                    {/* Image carousel */}
                    <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Tmain} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Tmain2} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Tmain3} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Tmain4} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="h-50vh lg-monitor:h-25vh">
                    <img 
                    src={Tmain5} 
                    alt="Vlogo"
                    style={{ maxWidth: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
            </Carousel>
                </div>
            </div>
        </div>
    );
}

export default ProjectReelReview;
