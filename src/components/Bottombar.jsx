import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartOutlined';
import WalletRoundedIcon from '@mui/icons-material/WalletOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonOutlined';
import FlipIcon from '@mui/icons-material/FlipRounded';
import { Link  } from 'react-router-dom'


function Bottombar() {
  return (    
        <nav id='bottom-bar' className='flex justify-between h-[60px] rounded-t-md fixed bottom-0 left-0 bg-white dark:bg-[#181A20D9]  backdrop-blur-xl  font-bold w-screen pt-2  text-[#929292]'>
            <Link to='/' className='flex flex-col  place-items-center gap-[2px] flex-1 text-[#246BFD]'>
            <HomeRoundedIcon  />
            Home
            </Link>
            <Link to='/statistics' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <InsertChartRoundedIcon />
            Statistic
            </Link>
            <Link to='/qrcode' className='flex place-items-center gap-[2px]  bg-[#246BFD] h-9 w-9  justify-center rounded-full text-white transform rotate-90 '>
            <FlipIcon fontSize='' />
            </Link >
            <Link to='/wallet' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <WalletRoundedIcon />
            Wallet
            </Link>
            <Link to='/profile' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <PersonRoundedIcon />
            Profile
            </Link>

        </nav>

  )
}

export default Bottombar