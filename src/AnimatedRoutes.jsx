/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
import propType from 'prop-types'

const  AnimatedRoutes = ({isVisible}) => {
  const location = useLocation();
  return (
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
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      )
  }
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
