import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import EmailOutlinedIcon from "@mui/icons-material/Email";
import FbLogo from "../images/Fbicon.png";
import GoogleIcon from "../images/google.png";
import AppleIcon from "../images/apple.png";
import Back from "../components/Back";
function Signup() {
  const navigate = useNavigate();
  return (
    <>
        <Back name='Sing Up' />
        <div className="flex justify-center items-center mt-20 ">
          <p className=" text-[50px] font-bold  ">
            Create your Accout
          </p>
      </div>
      <div className="grid mt-12 justify-center">
        <EmailOutlinedIcon className="relative top-10 left-2 h-6 w-6 text-neutral-500" />
        <input
          className="ps-10 border h-[60px] w-[340px] rounded-xl"
          type="text"
          placeholder="Email"
        />
        <LockIcon className="relative top-10 left-2 h-6 w-6 text-neutral-500" />
        <input
          className="ps-10 border h-[60px] w-[340px] rounded-xl"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-center gap-2 items-center mt-2 content-center mb-4">
          <input
            className="appearance- w-4 h-4 border-2 border-blue-500 rounded-sm bg-white"
            type="checkbox"
            name="remember"
            id="remember"
          />
          <label htmlFor="remember" className="font-bold tracking-wider">Remember me</label>
        </div>
        <button className="bg-blue-600 rounded-full  w-[340px] h-[58px] text-white font-bold tracking-widest text-base ">
          {" "}
          Sign in with Password
        </button>
      </div>
      <div className="flex justify-center-center content-center gap-4 mt-6">
        <hr className="w-[120px] text-black"/>
        <p className="font-bold text-lg text-neutral-500">or continue with</p>
        <hr className="w-[120px] text-black" />
      </div>
      <div className="flex justify-center gap-3 mt-4">
        <button className=" border w-[88px] h-[60px] flex justify-center items-center rounded-xl"><img src={FbLogo} alt="" className="h-6 w-6" /></button>
        <button className=" border w-[88px] h-[60px] flex justify-center items-center rounded-xl"><img src={GoogleIcon} alt="" className="h-6 w-6" /></button>
        <button className=" border w-[88px] h-[60px] flex justify-center items-center rounded-xl"><img src={AppleIcon} alt="" className="h-6 w-6" /></button>
      </div>
      <div>
        <p className="font-light tracking-wide text-sm mt-6">Already have an Account? <a className="text-blue-600 font-bold" onClick={() => {navigate("/login", { replace: false });}}>Sign in</a></p>
      </div>
    </>
  );
}

export default Signup;
