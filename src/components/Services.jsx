import React from 'react'
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafetyRounded';
import TrendingUpIcon from '@mui/icons-material/TrendingUpRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartRounded';
import DicountIcon from '../assets/discount.svg'
import PhoneIphoneRounded from '@mui/icons-material/PhoneIphoneRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { Link } from 'react-router-dom'
function Services() {

    const serviceList =[
       {
        name: 'Electricity',
        class1: 'bg-[#FFD300] bg-opacity-20 p-4 rounded-full',
        icon: <ElectricBoltRoundedIcon className='text-[#FFD300]'/>,
        path: 'electricity-bill',
    },
    {
        name: 'Internet',
        class1:'bg-[#FF981F] bg-opacity-20 p-4 rounded-full',
        icon: <ElectricBoltRoundedIcon className='text-[#FF981F]' />,
        path: 'internet-bill',
    },
    {
        name: 'Water',
        class1:'bg-[#1A96F0] bg-opacity-20  p-4 rounded-full',
        icon: <WaterDropRoundedIcon className='text-[#1A96F0]' />,
        path: 'water-bill',
    },

]
  return (
<div className='grid grid-cols-4 gap-6 justify-center content-center items-center font-bold'>
{serviceList.map((service) => 

<Link key={service.name} to='electricity-bill' className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
    <div className={service.class1}>
    {service.icon}
    </div>
    <p>{service.name}</p>
</Link>
)}        
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#FF981F] bg-opacity-20 p-4 rounded-full'>
            <WifiRoundedIcon className='text-[#FF981F]' />
            </div>
            <p>Internet</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#1A96F0] bg-opacity-20  p-4 rounded-full'>
            <WaterDropRoundedIcon className='text-[#1A96F0]' />
            </div>
            <p>Water</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#673AB3] bg-opacity-20 p-4 rounded-full'>
            <WalletRoundedIcon className='text-[#673AB3]' />
            </div>
            <p>E-Wallet</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#4AAF57] bg-opacity-20 p-4 rounded-full'>
            <MedicalServicesRoundedIcon className='text-[#4AAF57]' />
            </div>
            <p>Assurance</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#FFC02D] bg-opacity-20 p-4 rounded-full'>
            <ShoppingBagRoundedIcon className='text-[#FFC02D]' />
            </div>
            <p>Shopping</p>
        </Link>
        <Link className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#EA1E61] bg-opacity-20 p-4 rounded-full'>
            <img src={DicountIcon} className='text-[#EA1E61]' />
            </div>
            <p>Deals</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#8BC255] bg-opacity-20 p-4 rounded-full'>
            <HealthAndSafetyIcon className='text-[#8BC255]' />
            </div>
            <p>Health</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#009689] bg-opacity-20 p-4 rounded-full'>
            <TrendingUpIcon className='text-[#009689]' />
            </div>
            <p>Invest</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#9D28AC] bg-opacity-20 p-4 rounded-full'>
            <ShoppingCartIcon className='text-[#9D28AC]' />
            </div>
            <p>Merchant</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#00BCD3] bg-opacity-20 p-4 rounded-full'>
            <PhoneIphoneRounded className='text-[#00BCD3]' />
            </div>
            <p>Mobile</p>
        </Link>
        <Link  className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#F54336] bg-opacity-20 p-4 rounded-full'>
            <SportsEsportsRoundedIcon className='text-[#F54336]' />
            </div>
            <p>Games</p>
        </Link>




        
    </div>
  )
}

export default Services