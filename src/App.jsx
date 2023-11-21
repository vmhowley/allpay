import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Signin from "./login/Signin";





export default function App() {

  return (
    <BrowserRouter>
      
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Signin />} />
        <Route path="*" element={ <h1>Page Not Found</h1> } />
      </Routes>
    </BrowserRouter>
  );
  
 
}
