import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartOutlined';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import WalletRoundedIcon from '@mui/icons-material/WalletOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonOutlined';
import { Link  } from 'react-router-dom'

function Bottombar() {
  return (
    
        <nav className='flex justify-between  h-[60px] rounded-t-md fixed bottom-0 w-96 bg-white font-bold pt-2  text-[#929292]'>
            <Link to='/' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <HomeRoundedIcon />
            Home
            </Link>
            <Link to='/statistics' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <InsertChartRoundedIcon />
            Statistic
            </Link>
            <Link to='/qrcode' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <QrCodeScannerRoundedIcon />
            
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