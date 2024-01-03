import { useNavigate } from "react-router-dom";
import {User, Lock} from "react-iconly"
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
        <User set='bulk' className="relative top-10 left-2 h-6 w-6 text-neutral-500" />
        <input
          className="ps-10 border h-[60px] w-[340px] rounded-xl text-black font-semibold"
          type="text"
          placeholder="User Name"
        />
        <Lock set='bulk' className="relative top-10 left-2 h-6 w-6 text-neutral-500" />
        <input
          className="ps-10 border h-[60px] w-[340px] rounded-xl text-black font-semibold"
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
          Sign Up
        </button>
      </div>
      
        <p className="font-light tracking-wide text-sm mt-6">Already have an Account? <a className="text-blue-600 font-bold" onClick={() => {navigate("/login", { replace: false });}}>Sign in</a></p>
    </>
  );
}

export default Signup;
