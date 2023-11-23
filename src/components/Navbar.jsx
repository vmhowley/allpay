import React from 'react'
import Avatar from '../images/avatar.png'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
function Navbar() {
  return (
            <nav>
                <div className='flex  gap-[16px] w-[380px] items-center '>
                <img src={Avatar} alt="" />
                <div className='w-72 grid place-content-start text-left tracking-wide'>
                    <p className='text-neutral-600'>Good Morning 👋</p>
                    <h1 className='font-bold text-xl leading-6'>Adrew Ainsley</h1>
                </div>
                <div className='gap-3 flex items'>
                    <DiscountOutlinedIcon />
                    <NotificationsNoneOutlinedIcon  />

                </div>
                </div>
            </nav>
    )
}

export default Navbar