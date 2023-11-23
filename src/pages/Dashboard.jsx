import React from "react";
import Avatar from "../images/avatar.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Actions from "../components/Actions";
import Services from "../components/Services";
import Bottombar from "../components/Bottombar";
function Dashboard() {
  return <>
            <div className="gap-6 grid">
            <Navbar />
            <Cards />
            <Actions />
            <div className="flex justify-between font-bold">
                <h1 className="text-xl leading-6">Services</h1>
                <p className="text-[#246BFD] ">See All</p>
            </div>
            <Services />
            <Bottombar />
            </div>
</>;
}

export default Dashboard;
