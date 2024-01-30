import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
 return(
 <BrowserRouter>
  <Header isActive={true} />
 <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
 </Routes>
  <Footer/>
  
 </BrowserRouter>
  )
}