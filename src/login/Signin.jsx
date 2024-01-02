import SignLogo from "../images/signimg.png";
import { useNavigate } from "react-router-dom";
import FbLogo from "../images/Fbicon.png";
import GoogleIcon from "../images/google.png";
import AppleIcon from "../images/apple.png";
import Back from "../components/Back";


function Signin() {
  const navigate = useNavigate();

  return (
    <div className="grid">
      <Back name='Sign In'/>
      <div className="grid gap-4 place-content-center place-items-center">
        <img src={SignLogo} alt="logoSign" className="h-40 sm:h-52 mt-8" />
        <h1 className="font-bold text-5xl text-center  text-gray-700 ">Let&apos;s you in</h1>
        <div className="grid font-semibold gap-2 w-[380px] ">
          <button className="border bg-white rounded-xl  flex justify-center items-center gap-3 p-2 h-[60px]  font-bold">
            <img src={FbLogo} alt="asds" className="h-6" /> Continue With
            Facebook
          </button>
          <button className="border bg-white rounded-xl flex justify-center items-center gap-3 p-2 h-14  font-bold ">
            <img src={GoogleIcon} alt="asds" className="h-6" /> Continue With
            Google
          </button>
          <button className="border bg-white rounded-xl flex justify-center items-center gap-3 p-2 h-14  font-bold ">
            <img src={AppleIcon} alt="asds" className="h-6" /> Continue With
            Apple
          </button>

        </div>
        <div className="w-screen flex justify-between items-center content-center gap-4">
        <hr className="w-full text-black" />
        <p className="font-bold text-lg text-neutral-500">or</p>
        <hr className="w-full text-black" />
        </div>
        <button className="bg-blue-600 rounded-full  w-[380px] h-[58px] text-white font-bold tracking-widest text-base"> Sign in with Password</button>
      </div>
      <div className="mt-4">
        <p>Don't have an account? <a onClick={() => {navigate("/signup", { replace: false });}} className="text-blue-600 font-bold">Sign Up</a> </p>
      </div>
    </div>
  );
}

export default Signin;
