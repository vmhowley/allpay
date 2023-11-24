import React from "react";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafetyRounded";
import TrendingUpIcon from "@mui/icons-material/TrendingUpRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartRounded";
import DicountIcon from "../assets/discount.svg";
import PhoneIphoneRounded from "@mui/icons-material/PhoneIphoneRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import { Link } from "react-router-dom";
function Services() {
  const serviceList = [
    {
      name: "Electricity",
      class1: "bg-[#FFD300] bg-opacity-20 p-4 rounded-full",
      icon: <ElectricBoltRoundedIcon className="text-[#FFD300]" />,
      path: "electricity-bill",
    },
    {
      name: "Internet",
      class1: "bg-[#FF981F] bg-opacity-20 p-4 rounded-full",
      icon: <WifiRoundedIcon className="text-[#FF981F]" />,
      path: "internet-bill",
    },
    {
      name: "Water",
      class1: "bg-[#1A96F0] bg-opacity-20  p-4 rounded-full",
      icon: <WaterDropRoundedIcon className="text-[#1A96F0]" />,
      path: "water-bill",
    },
    {
      name: "E-Wallet",
      class1: "bg-[#673AB3] bg-opacity-20 p-4 rounded-full",
      icon: <WalletRoundedIcon className="text-[#673AB3]" />,
      path: "e-wallet",
    },
    {
      name: "Assurance",
      class1: "bg-[#4AAF57] bg-opacity-20  p-4 rounded-full",
      icon: <MedicalServicesRoundedIcon className="text-[#4AAF57]" />,
      path: "Assurance-bill",
    },
    {
      name: "Shopping",
      class1: "bg-[#FFC02D] bg-opacity-20  p-4 rounded-full",
      icon: <ShoppingBagRoundedIcon className="text-[#FFC02D]" />,
      path: "shopping-bill",
    },
    {
      name: "Deals",
      class1: "bg-[#EA1E61] bg-opacity-20  p-4 rounded-full",
      icon: <img src={DicountIcon} className="text-[#EA1E61]" />,
      path: "deals",
    },
    {
      name: "Health",
      class1: "bg-[#8BC255] bg-opacity-20  p-4 rounded-full",
      icon: <HealthAndSafetyIcon className="text-[#8BC255]" />,
      path: "health-bill",
    },
    {
      name: "Invest",
      class1: "bg-[#009689] bg-opacity-20  p-4 rounded-full",
      icon: <TrendingUpIcon className="text-[#009689]" />,
      path: "invest",
    },
    {
      name: "Mobile",
      class1: "bg-[#00BCD3] bg-opacity-20  p-4 rounded-full",
      icon: <PhoneIphoneRounded className="text-[#00BCD3]" />,
      path: "mobile-bill",
    },
    {
      name: "Merchant",
      class1: "bg-[#9D28AC] bg-opacity-20  p-4 rounded-full",
      icon: <ShoppingCartIcon className="text-[#9D28AC]" />,
      path: "merchant",
    },
    {
      name: "Games",
      class1: "bg-[#F54336] bg-opacity-20  p-4 rounded-full",
      icon: <SportsEsportsRoundedIcon className="text-[#F54336]" />,
      path: "games",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-6 justify-center content-center items-center font-bold">
      {serviceList.map((service) => (
        <Link
          key={service.name}
          to={service.path}
          className="flex flex-col justify-center items-center gap-2 flex-1  h-[80px] "
        >
          <div className={service.class1}>{service.icon}</div>
          <p>{service.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Services;
