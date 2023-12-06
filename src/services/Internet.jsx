import React from "react";
import Avatar from "../images/avatar.png";
import Back from "../components/Back";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import { motion } from 'framer-motion';



function clicked () {

  let but = document.getElementById("but");
  let video = document.getElementById("vid");
  let mediaDevices = navigator.mediaDevices;
  video.muted = true;
  
  
  
  // Accessing the user camera and video.
  mediaDevices
  .getUserMedia({
              video: true,
              audio: true,
          })
          .then((stream) => {

              // Changing the source of video to current stream.
              video.srcObject = stream;
              video.addEventListener("loadedmetadata", () => {
                  video.play();
                });
          })
          .catch(alert);
       }

function Internet() {
  
  
  
  function handleClick() {
    setClick(click + 1);

  }

  const [click, setClick] = React.useState(0);

  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition:{duration: 0.1} }}
     className="grid gap-4 mb-10">
      <Back name="Internet Bill" />
      <div className="grid  mt-8 flex-col justify-center items-center gap-2 flex-1   ">
        <div className="bg-[#FF981F] bg-opacity-10 p-10 rounded-full text-[#FF981F]">
          <WifiRoundedIcon sx={{ fontSize: 60 }} />
        </div>
      </div>
      <div className="grid gap-2">
        <h1 className="font-bold text-2xl">Pay Internet Bill</h1>
        <p>
          Pay Internet bill safely, conveniently & easily.
        </p>
          <p>You can pay anytime and anywhere!</p>
      </div>
      {click === 0 ? (
        <div className="p-6">
          <form action="" className="grid text-left gap-2">
            <label htmlFor="cid" className="font-bold text-[18px]">
              Customer ID
            </label>
            <input
              name="cid"
              type="number"
              placeholder="Enter your ID"
              className="h-[56px] rounded-xl text-[#212121] bg-[#e9e9e9] font-bold ps-5"
            />
          </form>
          <button
            onClick={handleClick}
            className="bg-[#246BFD] p-4 w-full rounded-full mt-4"
          >
            Continue
          </button>
          <div>
            <video id="vid"></video>
          </div>
          <button onClick={clicked}>Open cam</button>
        </div>
        
      ) : (
        <div className="grid gap-4 justify-center">
          <div className="w-96 h-96 p-7 bg-white rounded-3xl shadow flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <img
                className="w-20 h-20 left-0 top-0 absolute rounded-full"
                src={Avatar}
              />
            </div>
            <div className="w-80 h-px relative">
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
          <div className="w-96 h-14 px-4 py-4 bg-blue-600 rounded-full shadow justify-center items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-5 text-center text-white text-base font-bold font-['Urbanist'] leading-snug tracking-tight">
              Confirm Payment
            </div>
          </div>
      
        </div>
        
      )}
    </motion.div>
  );
}

export default Internet;
