import { Link } from "react-router-dom";
import React from "react";

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <nav className="relative bg-amber-900 text-white z-50">
     
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold">☕ Coffee Shop</h1>

      
        <ul className="hidden md:flex gap-8 font-medium items-center">
          <li><Link to="/home" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-300">Menu</Link></li>
          <li><Link to="/About" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/Contact" className="hover:text-yellow-300">Contact</Link></li>
          <li><Link to="/login" className="rounded-lg bg-yellow-500 px-5 py-2 text-black transition hover:bg-yellow-400">Login</Link></li>
        </ul>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-2xl focus:outline-none hover:text-yellow-300"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

       
      {isOpen && (
        <div className="absolute top-full left-0 w-full  bg-amber-950 shadow-xl md:hidden block">
          <ul className="flex flex-col font-medium">
            <li><Link to="/home" onClick={() => setIsOpen(false)} className="block border-b border-amber-900 px-8 py-3 hover:bg-amber-900">Home</Link></li>
            <li><Link to="/menu" onClick={() => setIsOpen(false)} className="block border-b border-amber-900 px-8 py-3 hover:bg-amber-900">Menu</Link></li>
            <li><Link to="/About" onClick={() => setIsOpen(false)} className="block border-b border-amber-900 px-8 py-3 hover:bg-amber-900">About</Link></li>
            <li><Link to="/Contact" onClick={() => setIsOpen(false)} className="block border-b border-amber-900 px-8 py-3 hover:bg-amber-900">Contact</Link></li>
            <li><Link to="/login" onClick={() => setIsOpen(false)} className="block px-8 py-4 bg-yellow-600 text-black font-bold text-center hover:bg-yellow-500">Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;