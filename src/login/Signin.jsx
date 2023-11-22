import React from "react";
import SignLogo from "../images/signimg.png";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import FbLogo from "../images/Fbicon.png";
import { Button } from "../components/Button.jsx";

function Signin() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/", { replace: false });

  return (
    <div className="grid">
      <div onClick={handleBack} className="flex cursor-pointer">
        <ArrowBackRoundedIcon />
      </div>
      <div className="grid gap-4 place-content-center place-items-center">
        <img src={SignLogo} alt="logoSign" className="mt-8 " />
        <h1 className="font-bold text-5xl text-center  text-gray-700 ">Let&apos;s you in</h1>
        <div className="grid font-semibold gap-2 w-[380px] ">
          <button className="border bg-white rounded-xl  flex justify-center items-center gap-3 p-2 h-[60px]  font-light">
            <img src={FbLogo} alt="asds" className="h-6" /> Continue With
            Facebook
          </button>
          <button className="border bg-white rounded-xl flex justify-center items-center gap-3 p-2 h-14  font-light ">
            <img src={FbLogo} alt="asds" className="h-6" /> Continue With
            Facebook
          </button>
          <button className="border bg-white rounded-xl flex justify-center items-center gap-3 p-2 h-14  font-light ">
            <img src={FbLogo} alt="asds" className="h-6" /> Continue With
            Facebook
          </button>

        </div>
        <div className="w-screen flex justify-between items-center content-center gap-4">
        <hr className="w-full text-black" />
        <p className="font-bold text-lg text-neutral-500">or</p>
        <hr className="w-full text-black" />
        </div>
        <button className="bg-blue-600 "> Sign in with Password</button>
        <Button 
          text="Sign in with password"
          component="button"
          state="active"
          autoLayoutClassName=""
          style="default"
          theme="default"
          type="button"
          type2="primary"
          type3="rounded"

        />
      </div>
    </div>
  );
}

export default Signin;
