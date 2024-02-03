import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react';
import resumePDF from '../assets/Priyanshu_Resume.pdf';

export default function Header({isActive}) {
  const [isOpen, setOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  const handleDownload = () => {
    window.open(resumePDF);
  };
 
  return (
    <>
      <div className={`w-full flex justify-between items-center pl-2 text-gray-800 z-50 bg-green-400 sticky top-0 md:h-16 md:pr-6 md:pl-6 lg:h-20 lg:pr-8 lg:pl-8 ${hasShadow ? 'shadow-md' : ''}`}>
        <div className="flex items-center space-x-1">
          <h1 className="text-xl font-bold">Priyanshu</h1>
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-1.5"></div>
        </div>
       <div className="md:hidden lg:hidden">
        <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
       </div>
        <nav className={`absolute top-full right-0 left-0 ${isOpen ? 'block' : 'hidden z-50'} bg-gray-200 p-4 text-gray-800 space-y-2 md:hidden lg:hidden`}>
          <ul className="flex flex-col space-y-2">
            <li><NavLink to="/" >Home</NavLink></li>
            <span className="w-auto h-[1px] bg-gray-700"></span>
            <li><NavLink to="/About">About</NavLink></li>
            <span className="w-auto h-[1px] bg-gray-700"></span>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <span className="w-auto h-[1px] bg-gray-700"></span>
      <li><button id="resumeBtn" onClick={handleDownload}> Resume</button>
      </li>
          </ul>
        
        </nav>

       <nav className="hidden lg:flex justify-center items-center space-x-4 md:flex justify-center items-center space-x-4">
        <ul className="lg:flex justify-center items-center md:flex justify-center items-center space-x-4">
            <li className='hover:underline'><NavLink to="/" >Home</NavLink></li>
        <li className='hover:underline'><NavLink to="/About" >About</NavLink></li>
        <li className='hover:underline'><NavLink to="/Contact">Contact</NavLink></li> 
      <li className='hover:underline'><button id="resumeBtn" onClick={handleDownload}> Resume</button>
      </li>
          </ul>
          
        
       </nav>
      </div>
    </>
  );
}
