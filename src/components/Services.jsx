import React from 'react'
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import DicountIcon from '../assets/discount.svg'
function Services() {
  return (
<div className='grid grid-cols-4 gap-6 justify-center content-center items-center font-bold'>
        <div onClick={() => {navigate('/transfer')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#FFD300] bg-opacity-20 p-4 rounded-full'>
            <ElectricBoltRoundedIcon className='text-[#FFD300]' />
            </div>
            <p>Electricity</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#FF981F] bg-opacity-20 p-4 rounded-full'>
            <WifiRoundedIcon className='text-[#FF981F]' />
            </div>
            <p>Internet</p>
        </div>
        <div onClick={() => {navigate('/inout')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#1A96F0] bg-opacity-20  p-4 rounded-full'>
            <WaterDropRoundedIcon className='text-[#1A96F0]' />
            </div>
            <p>Water</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#673AB3] bg-opacity-20 p-4 rounded-full'>
            <WalletRoundedIcon className='text-[#673AB3]' />
            </div>
            <p>E-Wallet</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#4AAF57] bg-opacity-20 p-4 rounded-full'>
            <MedicalServicesRoundedIcon className='text-[#4AAF57]' />
            </div>
            <p>Assurance</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#FFC02D] bg-opacity-20 p-4 rounded-full'>
            <ShoppingBagRoundedIcon className='text-[#FFC02D]' />
            </div>
            <p>Shopping</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </div>



        
    </div>
  )
}

export default Services