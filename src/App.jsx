import { BrowserRouter , Routes , Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import About from "./pages/About";
import { ImOpt } from "react-icons/im";
import { useState } from "react";


function App() {
  const [isOpen, setIsOpen]= useState(false);
  return (
    <BrowserRouter>
     <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     
    
    </BrowserRouter>
  )
}

export default App; 