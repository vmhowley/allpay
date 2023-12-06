import React from "react";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AnimatedRoutes from "./AnimatedRoutes";




export default function App() {

  return (
    <BrowserRouter>  
      <AnimatedRoutes />
    </BrowserRouter>
  );
  
 
}
