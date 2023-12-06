import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Signin from "./login/Signin";
import Signup from "./login/Signup";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Electricity from "./services/Electricity";
import Internet from "./services/Internet";





export default function App() {

  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route index element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/electricity-bill" element={<Electricity/>} />
        <Route path="/internet-bill" element={<Internet/>} />
        <Route path="*" element={ <h1>Page Not Found</h1> } />
      </Routes>
    </BrowserRouter>
  );
  
 
}
