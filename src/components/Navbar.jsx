import React from "react";
import Avatar from "../images/avatar.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import { motion, useScroll } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Navbar() {
  const [user, setUser] = React.useState({});

  const makeAPICall = async () => {
    try {
      const response = await fetch("http://localhost:9000/1", { mode: "cors" });
      const data = await response.json();
      setUser(...data)
    } catch (e) {
      console.log(e); 
    }
  };

  
  const { scrollY } = useScroll();
  /** add useState hook to manage state **/
  const [hidden, setHidden] = React.useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 10 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }


  
  
  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };
  const message = {
    name: "Welcome",
    message: "Good Morning  👋",
  };

  React.useEffect(() => {
    
    scrollY.on("change", () => update());
    makeAPICall();
  }, []);

  return (
    
    <motion.nav
      className="flex  items-center w-screen "
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <img
        className="w-14 h-14 rounded-full"
        src={user.img + user.name || <Skeleton />}
        alt="assdas"
      />
      <div className="w-screen grid place-content-start text-left tracking-wide">
        <p className="text-neutral-600">{message.message || <Skeleton />} </p>
        <h1 className="font-bold text-xl leading-6">
          {user.name || <Skeleton />}
        </h1>
      </div>
      <div className="gap-3 flex">
        <DiscountOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
      </div>
    </motion.nav>
  );
}

export default Navbar;
