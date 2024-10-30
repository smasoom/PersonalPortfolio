"use client";  
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
  const [resumeLink] = useState("https://drive.google.com/file/d/1zPP5HxbkxQbIFQtWEk4wfp83yK7FQYqu/view?usp=sharing");

  return (
    <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-gray-300 py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Section */}
        <div className="md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Little About Me
          </h1>
          <p className="leading-relaxed text-justify mb-8 max-w-lg mx-auto md:mx-0">
            I am Masoom Sahu, a final year Civil Engineering student at NIT Silchar, originally from Sivasagar, Assam, with roots in the Ahom Dynasty. I have a passion for full-stack development, specializing in React JS, Next JS, SQL, Node JS, and MongoDB. 
            <br /><br />
            Currently, I am a Core Member of the Google Developers Student Club and have a strong background in hackathons and project management. My journey includes participating in hackathons like DPBH 2023, Flipkart Grid, and organizing technical events on campus. 
            I am driven by my commitment to learning, leading, and developing solutions that make a difference.
          </p>
          {/* Enhanced Resume Button */}
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-2 border-red-700 hover:border-white-500">
  View My Resume
</button>
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 p-1">
            <Image
              src="/m3.jpg"
              alt="About"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
