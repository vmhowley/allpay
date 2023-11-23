import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartOutlined';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import WalletRoundedIcon from '@mui/icons-material/WalletOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonOutlined';

function Bottombar() {
  return (
    
        <nav className='flex justify-between  h-[60px] rounded-t-md fixed bottom-0 w-96 bg-white font-bold pt-2  text-[#9E9E9E]'>
            <div className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <HomeRoundedIcon />
            Home
            </div>
            <div className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <InsertChartRoundedIcon />
            Statistic
            </div>
            <div className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <QrCodeScannerRoundedIcon />
            
            </div>
            <div className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <WalletRoundedIcon />
            Wallet
            </div>
            <div className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <PersonRoundedIcon />
            Profile
            </div>

        </nav>

  )
}

export default Bottombar