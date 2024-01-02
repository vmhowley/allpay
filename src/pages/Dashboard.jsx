import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Actions from "../components/Actions";
import Services from "../components/Services";
import Bottombar from "../components/Bottombar";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'


function Dashboard() {

  const [loading, setLoading] = React.useState(false);

   React.useEffect(() => {
     setTimeout(() => {
       setLoading(false);
      }, 1000);
    });
    
    return (
       
       <div className="">
{loading ? ( <Skeleton className="h-40 flex-1"/> ):(
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
            {<Navbar /> || <Skeleton />}
            <div className="gap-6 grid mb-20 p-2 sm:p-0 ">
            {<Cards /> || <Skeleton />}
            <Actions />
            <div className="flex justify-between tablet:w-full tablet:pr-2 font-bold">
                <h1 className="text-xl leading-6">Services</h1>
                <Link to='/services' className="text-[#246BFD] ">See All</Link>
            </div>
            <Services />
            </div>
            <Bottombar />
            </motion.div>
            )}
            
</div>);
}

export default Dashboard;
