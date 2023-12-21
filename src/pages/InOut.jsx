import React from "react";
import Back from "../components/Back";
import Avatar from "../images/avatar.png";
import Mcdonald from "../images/mcdonald.svg";
import AirBnb from "../images/airbnb.svg";
import Darron from "../images/Darron.svg";
import Netflix from "../images/netflix.svg";
import {ArrowUpSquare} from 'react-iconly'
import {ArrowDownSquare} from 'react-iconly'

function InOut() {
  const transactions = [
    {
      id: "1",
      name: "McDonald's",
      description: "Orders",
      date: "Dec 24 2023",
      time: "14:24:29 PM",
      type: "Expense",
      amount: "$25",
      img: Mcdonald,
    },
    {
      id: "2",
      name: "AirBNB",
      description: "Royalty",
      date: "Dec 24 2023",
      time: "9:24:29 AM",
      type: "Income",
      amount: "$1225",
      img: AirBnb,
    },
    {
      id: "3",
      name: "Darron Kulikowski",
      description: "",
      date: "Dec 28 2023",
      time: "10:34:59 AM",
      type: "Income",
      amount: "$550",
      img: Darron,
    },
    {
      id: "4",
      name: "Netflix",
      description: "Subscription",
      date: "Dec 28 2023",
      time: "10:34:59 AM",
      type: "Expense",
      amount: "$32",
      img: Netflix,
    },
  ];
  
  return (
    <>
      <Back name="In & Out Payment" />
      <div className="top-actions">
        <div className="flex gap-[12px] justify-center p-2">
          <button className="bg-[#246BFD] w-[118.67px] h-[45px] rounded-full text-white">
            History
          </button>
          <button className="bg-[#246BFD] w-[118.67px] h-[45px] rounded-full text-white">
            Scheduled
          </button>
          <button className="bg-[#246BFD] w-[118.67px] h-[45px] rounded-full text-white">
            Requested
          </button>
        </div>
        <div className="flex justify-between p-6">
          <h1 className="font-bold">Showing 25 of 849</h1>
          <p className="text-[#246BFD] font-semibold">Download</p>
        </div>
        <div className="grid p-4 gap-4 ">
          {transactions.map((trans) => (
            <div
              key={trans.id}
              className="flex gap-4  dark:bg-[#1F222A] bg-white items-center rounded-3xl h-[98px] shadow-md  p-2 after:animate-pulse"
            >
              <div className="grid items-center">
                <img className="rounded w-20" src={trans.img} alt="comercio" />
              </div>
              <div className="tracking-wider sm:text-center text-left grid gap-2 w-full">
                <h1 className="font-bold text-lg">
                  {trans.name} {trans.description}
                </h1>
                <p className="text-sm">
                  {trans.date} | {trans.time}
                </p>
              </div>
              <div className="text-right">
                <h1
                  className={
                    trans.type === "Expense"
                      ? "font-bold text-red-600"
                      : "font-bold text-[#246BFD]"
                  }
                >
                  {trans.amount}
                </h1>
                <p className="text-neutral-500 dark:text-white flex  text-xs font-extralight">{trans.type == 'Expense' ? <ArrowUpSquare set="two-tone" primaryColor="#FF575C" secondaryColor="#FF8285" size={'small'}/>: <ArrowDownSquare set="two-tone" primaryColor="#246BFD" secondaryColor="#6F9EFF"  size={'small'}/>}{trans.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InOut;
