import React from "react";
import SignLogo from "../images/signimg.png";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";


function Signin() {

    const navigate = useNavigate();
    const handleBack = () => (
        navigate('/', {replace: false})
    )
   
  return (
    <div>
      <div onClick={handleBack} className="flex cursor-pointer">
        <ArrowBackRoundedIcon />
      </div>
        <div>
            <img src={SignLogo} alt="logoSign" className="mt-8" />
            <h1>Let's you in</h1>
        </div>
        <div className="grid font-semibold">
            <button className="rounded-md font-bold bg-white h-8 ">Continue With Facebook</button>

        </div>
    </div>
  );
}

export default Signin;
