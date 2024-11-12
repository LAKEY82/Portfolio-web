import React from 'react';
import Image from '../assets/lk.png'; // Make sure this path points to the correct location of your image
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'; // Import Ant Design icons

const Home = () => {
  return (
    <div className="bg-custom-gradient min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6">
        <div className="text-white text-3xl font-bold font-poppins">LAK3Y</div>

        <ul className="flex pl-[700px] space-x-8 text-white items-end text-2xl font-poppins bg-blend-saturation">
          <li>
            <a href="#home" className="hover:text-[#9EC8B9]">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#9EC8B9]">About</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-[#9EC8B9]">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#9EC8B9]">Contact</a>
          </li>
        </ul>

        <button className="text-[#9EC8B9] font-semibold py-2 px-4 rounded border border-[#9EC8B9] hover:bg-white hover:text-teal-600 transition-colors duration-200">
          Hire Me
        </button>
      </nav>

      {/* UX/UI DESIGNER Text */}
      <div className="flex flex-col justify-center items-center mt-5 px-4 relative">
        {/* Outlined UX/UI Designer */}
        <h1 className="text-transparent font-bold text-center w-full text-8xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight" style={{ WebkitTextStroke: "2px white" }}>
          UX/UI DESIGNER
        </h1>

        {/* Filled Lakindu Perera */}
        <h2 className="text-white font-bold text-center w-full text-8xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mt-4">
          LAKINDU PERERA
        </h2>

        {/* Image of Lakindu Perera */}
        <div className="absolute w-full flex justify-center mt-4">
          <img 
            src={Image} 
            alt="Lakindu Perera" 
            className="w-full max-w-2xl h-auto pt-[400px]" // Increased max width for larger image
          />
        </div>

        {/* Social Media Icons */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 text-white text-2xl items-center border-white pt-[600px] pl-[200px] bg-blend-saturation ">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9EC8B9] transition-colors duration-300">
            <FacebookOutlined />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9EC8B9] transition-colors duration-300">
            <InstagramOutlined />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#9EC8B9] transition-colors duration-300">
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
