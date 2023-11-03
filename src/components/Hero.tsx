import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { DiJavascript, DiAndroid, DiMysql, DiNodejsSmall, DiGit, DiCss3Full } from 'react-icons/di';
import { FaReact, FaDocker, FaLinux, FaPython } from 'react-icons/fa';
import Parth from "../assets/parth.png";

const Hero: React.FC = () => {
    const icons = [<DiJavascript size={30} color="yellow" />, <DiAndroid size={30} color="green" />, <DiMysql size={30} color="blue" />, <DiNodejsSmall size={30} color="green" />, <DiGit size={30} color="red" />, <DiCss3Full size={30} color="blue" />, <FaReact size={30} color="blue" />, <FaDocker size={30} color="blue" />, <FaLinux size={30} color="black" />, <FaPython size={30} color="blue" />];

    return (
        <section className="h-screen flex items-center justify-center bg-black text-white relative">
            <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 flex flex-col items-center justify-center text-center relative">
                    <h1 className="text-5xl font-bold mb-4 relative">Parth Kumar</h1>
                    <p className="text-2xl mb-8 relative">Discover My Work and Projects</p>

                    {icons.map((Icon, index) => {
                        const controls = useAnimation();
                        useEffect(() => {
                            const circulate = async () => {
                                for (let i = 0; i < 360; i++) {
                                    await controls.start({
                                        x: 250 * Math.cos(2 * Math.PI * (i + index * 360 / (icons.length - 1)) / 360),
                                        y: 150 * Math.sin(2 * Math.PI * (i + index * 360 / (icons.length - 1)) / 360),
                                        transition: { duration: 0.1, ease: "linear" }
                                    });
                                }
                                circulate();
                            };
                            circulate();
                        }, [controls]);

                        return (
                            <motion.div 
                                key={index} 
                                className="absolute" 
                                animate={controls}
                                style={{
                                    position: 'absolute',
                                }}>
                                {Icon}
                            </motion.div>
                        );
                    })}

                    <a href="#projects" className="inline-block bg-white text-black px-8 py-3 text-lg font-semibold rounded hover:bg-gray-200 transition-colors duration-300 relative">
                        View Projects
                    </a>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center">
                    <img src={Parth} alt="Parth Kumar" className="w-full max-w-md h-auto object-cover rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
