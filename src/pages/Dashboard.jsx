import React from "react";

import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Actions from "../components/Actions";
import Services from "../components/Services";
import Bottombar from "../components/Bottombar";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

function Dashboard() {
  return <>
            <motion.div className="gap-6 grid mb-20"
            
            initial={{width: 1}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.1} }}
            >
            <Navbar />
            <Cards />
            <Actions />
            <div className="flex justify-between font-bold">
                <h1 className="text-xl leading-6">Services</h1>
                <Link to='/services' className="text-[#246BFD] ">See All</Link>
            </div>
            <Services />
            <Bottombar />
            </motion.div>
</>;
}

export default Dashboard;
