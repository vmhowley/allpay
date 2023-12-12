import React from 'react'
import Avatar from '../images/avatar.png'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import { motion, useScroll  } from 'framer-motion';
function Navbar() {

    const { scrollY } = useScroll();
/** add useState hook to manage state **/
const [hidden, setHidden] = React.useState(false);

/** this onUpdate function will be called in the `scrollY.onChange` callback **/
function update() {
  if (scrollY?.current < scrollY?.prev) {
    setHidden(false);
    console.log("visible");
  } else if (scrollY?.current > 10 && scrollY?.current > scrollY?.prev) {
    setHidden(true);
    console.log("hidden");
  }
}

    React.useEffect(() => {
        return scrollY.on("change", (() => update()));
      });

      const variants = {
        /** this is the "visible" key and it's respective style object **/
        visible: { opacity: 1, y: 0 },
        /** this is the "hidden" key and it's respective style object **/
        hidden: { opacity: 0, y: -25 }
      };


  return (
            <motion.nav className='flex  gap-[16px] w-[380px] items-center '
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
            >
                <img src={Avatar} alt="" />
                <div className='w-full grid place-content-start text-left tracking-wide'>
                    <p className='text-neutral-600'>Good Morning 👋</p>
                    <h1 className='font-bold text-xl leading-6'>Adrew Ainsley</h1>
                </div>
                <div className='gap-3 flex items'>
                    <DiscountOutlinedIcon />
                    <NotificationsNoneOutlinedIcon  />

                </div>
            </motion.nav>
    )
}

export default Navbar