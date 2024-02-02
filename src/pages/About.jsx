import { FaExternalLinkAlt } from 'react-icons/fa';
import Myself from '../assets/Myself.jpg';
import resumePDF from '../assets/Priyanshu_Resume.pdf';
import AboutImg from '../assets/about.svg';
import Timeline from '../components/Timeline';
import React from 'react';

const AboutUs = () => {
 const handleDownload = () => {
    window.open(resumePDF);
  };
  return (
   <>
    <div className="bg-green-400 min-h-screen text-gray-800">
      <div className="container mx-auto py-8 px-4 flex flex-col lg:px-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center border-4 border-transparent p-2 rounded-lg bg-green-900 text-white lg:text-left">About Me</h1>

  
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-8">
            <img src={Myself} alt="Priyanshu" className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out" />


          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <p className="text-lg mb-4">
              Hey! I'm a skilled web developer with experience in multiple frameworks. I create awesome websites that look great and work even better. Let's work together and make something amazing!
            </p>
           <div className="space-x-4 w-max flex items-center">
<button id="hire" className='bg-slate-950 text-white pl-4 pr-4 pt-2 pb-2 flex items-center space-x-2 rounded'><p><a href="/Contact">Hire Me </a></p><FaExternalLinkAlt /></button>
           <button id="resumeBtn" className='bg-slate-950 text-white pl-4 pr-4 pt-2 pb-2 rounded' onClick={handleDownload}>Resume</button>
           </div>
           
           
          </div>
        
        </div>
       <div className="mt-12">
        
            <Timeline/>
        
           </div>
      </div>
     
    </div>
    
    
   </>
  );
};

export default AboutUs;