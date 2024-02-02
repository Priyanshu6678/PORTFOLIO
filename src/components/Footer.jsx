import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className="text-xl font-bold mb-2">Priyanshu.in</h1>
          <p className="text-sm">Wish you have a nice day</p>
        </div>
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li><a href="*" className="hover:text-gray-500"><FaFacebookF className="w-6 h-6" /></a></li>
            <li><a href="https://twitter.com/Priyans88220105" className="hover:text-gray-500"><FaTwitter className="w-6 h-6" /></a></li>
            <li><a href="https://www.instagram.com/priaynshu_6858/" className="hover:text-gray-500"><FaInstagram className="w-6 h-6" /></a></li>
            <li><a href="https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav" className="hover:text-gray-500"><FaLinkedinIn className="w-6 h-6" /></a></li>
            <li><a href="https://github.com/Priyanshu6678" className="hover:text-gray-500"><FaGithub className="w-6 h-6" /></a></li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <ul className="flex space-y-2 flex-col items-center justify-center">
            <li className="flex items-center justify-center space-x-1"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
<a href="tel:+917431095841" className="hover:text-gray-500"><p>+91 7431095841</p></a></li>
           
            <li className="flex items-center justify-center space-x-1">
             <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
<a href="mailto:feysayan090@gmail.com" className="hover:text-gray-500"><p>feysayan090@gmail.com</p></a></li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
