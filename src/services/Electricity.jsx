import React from "react";
import Avatar from "../images/avatar.png";
import Back from "../components/Back";
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";
import { motion } from "framer-motion";

function Electricity() {
  function handleClick() {
    setClick(click + 1);
  }

  const [click, setClick] = React.useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid gap-4 mb-10"
    >
      <Back name="Electricity Bill" />
      <div className="grid  mt-8 flex-col justify-center items-center gap-2 flex-1   ">
        <div className="bg-[#FFD300] bg-opacity-10 p-10 rounded-full text-[#FFD300]">
          <ElectricBoltRoundedIcon sx={{ fontSize: 60 }} />
        </div>
      </div>
      <div className="grid gap-4">
        <h1 className="font-bold text-2xl">Pay Electricity Bill</h1>
        <p>Pay electricity bill safely, conveniently & easily.</p>
        <p>You can pay anytime and anywhere!</p>
      </div>
      {click === 0 ? (
        <div className="p-6">
          <form action="" className="grid text-left gap-2">
            <label htmlFor="cid" className="font-bold text-[18px]">
              Customer ID
            </label>
            <input
              id="cid"
              name="cid"
              type="number"
              placeholder="Enter your ID"
              className="h-[56px] rounded-xl text-[#212121] bg-[#e9e9e9] dark:bg-[#1F222A] font-bold ps-5"
            />
          </form>
          <button
            onClick={handleClick}
            className="bg-[#246BFD] p-4 w-full rounded-full mt-4"
          >
            Continue
          </button>
        </div>
      ) : (
        
        <div className="grid gap-2 place-items-center ">
          <div className="p-7 bg-white rounded-3xl  flex-col  items-center gap-6 inline-flex  shadow-rose-500  shadow  ">
            <div className="w-20 h-20 relative">
              <img
                className="w-20 h-20 left-0 top-0 absolute rounded-full"
                src={Avatar}
              />
            </div>
            <div className="w-80   relative">
              <div className="w-80 h-px left-0 top-0 absolute border border-zinc-100"></div>
            </div>
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Urbanist'] leading-snug tracking-tight text-left">
                Bill (USD)
              </div>
              <div className="text-right text-neutral-800 text-lg font-semibold font-['Urbanist'] leading-relaxed tracking-tight">
                $115.50
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Urbanist'] leading-snug tracking-tight text-left">
                Name
              </div>
              <div className="text-right text-neutral-800 text-lg font-semibold font-['Urbanist'] leading-relaxed tracking-tight">
                Andrew Ainsley
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Urbanist'] leading-snug tracking-tight text-left">
                Customer ID
              </div>
              <div className="text-right text-neutral-800 text-lg font-semibold font-['Urbanist'] leading-relaxed tracking-tight">
                37173838939
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-zinc-600 text-base font-medium font-['Urbanist'] leading-snug tracking-tight text-left">
                Status
              </div>
              <div className="px-2.5 py-1.5 bg-rose-500 rounded-md justify-center items-center gap-2 flex">
                <div className="text-white text-xs font-semibold font-['Urbanist'] tracking-tight">
                  Unpaid
                </div>
              </div>
            </div>
          </div>
          <button className="w-full h-14 px-4 py-4 bg-blue-600 rounded-full shadow justify-center items-center gap-2.5 inline-flex text-white">
              Confirm Payment
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Electricity;
