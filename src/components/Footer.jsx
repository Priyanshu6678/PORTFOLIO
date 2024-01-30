import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h1 className="text-xl font-bold mb-2">Priyanshu.in</h1>
          <p className="text-sm">Wish you have a nice day</p>
        </div>
        <div className="flex justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-500"><FaFacebookF className="w-6 h-6" /></a></li>
            <li><a href="#" className="hover:text-gray-500"><FaTwitter className="w-6 h-6" /></a></li>
            <li><a href="#" className="hover:text-gray-500"><FaInstagram className="w-6 h-6" /></a></li>
            <li><a href="#" className="hover:text-gray-500"><FaLinkedinIn className="w-6 h-6" /></a></li>

           <li><a href="#" className="hover:text-gray-500"><FaGithub className="w-6 h-6" /></a></li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-500">Contact</a></li>
            <li><a href="#" className="hover:text-gray-500">About</a></li>
            <li><a href="#" className="hover:text-gray-500">Services</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
