import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import Signin from "./login/Signin";
import Signup from "./login/Signup";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Electricity from "./services/Electricity";
import Internet from "./services/Internet";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import InOut from "./pages/InOut";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./AnimatedRoutes";
import { appBarClasses } from "@mui/material";
import TypeAmount from "./pages/TypeAmount";




const App = (isVisible) =>  {

  return (
    
    <BrowserRouter>  

<AnimatePresence>
      {isVisible &&(
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route index element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/electricity-bill" element={<Electricity />} />
        <Route path="/internet-bill" element={<Internet />} />
        <Route path="/inout" element={<InOut />} />
        <Route path="/type_amount" element={<TypeAmount />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      )
  }
    </AnimatePresence>   
     </BrowserRouter>
  );
  
 
}

export default App