import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '../images/avatar.png'
import Back from '../components/Back';


function Transfer() {
    const navigate = useNavigate();

    const beneficiaries = [
        {
            id: "1",
            name: "Juan Andres Perez Perez",
            phone: "849-359-3432",
            account_number: "40230403012",
            provider: "Bank",
            fav: true,
        },
        {
            id: "2",
            name: "Jhoe Smith",
            phone: "829-369-6412",
            account_number: "56335473018",
            provider: "E-Wallet",
            fav: true,
        },
        {
            id: "3",
            name: "Marcos corut Smith",
            phone: "829-369-6412",
            account_number: "56335473018",
            provider: "E-Wallet",
            fav: true,
        },
        {
            id: "4",
            name: "Julito manchez Smith",
            phone: "829-369-6412",
            account_number: "56335473018",
            provider: "E-Wallet",
            fav: true,
        },
        {
            id: "5",
            name: "Cristian manuel Smith",
            phone: "829-369-6412",
            account_number: "56335473018",
            provider: "E-Wallet",
            fav: true,
        },
    ]
  return (
    <>
      <Back name="Transfer Money"/> 
      <div className='grid gap-4 mt-8'>
        <div className='flex items-center'>
        <SearchIcon className='relative left-9' />
        <input className='rounded-xl bg-[#F5F5F5] h-[56px]  ps-10 w-[360px]' type="text" placeholder='Search'/>
        </div>
        <div className='flex font-bold text-[#9E9E9E] justify-center gap-3 items-center'>
            <Link className=''>
                <h1 className='w-20 h-10 flex items-center content-center justify-center text-[#246BFD]'>All</h1>
                <hr className='bg-[#246BFD] h-1' />
            </Link>
            <Link>
                <h1 className='w-20 h-10  flex items-center content-center justify-center'>Favorite</h1>
                <hr className=' h-1 ' />
            </Link>
            <Link>
                <h1 className='w-20 h-10 flex items-center content-center justify-center'>Bank</h1>
                <hr className=' h-1 ' />
            </Link>
            <Link>
                <h1 className='w-20 h-10  flex items-center content-center justify-center'>E-Wallet</h1>
                <hr className='h-1 ' />
            </Link>
        </div>
        <div className='grid p-6 gap-4 divide-y'>
            {beneficiaries.map((beneficiarie) => 
            <div key={beneficiarie.id} className='flex gap-4'>
                <img src={Avatar} alt="" />
            <div className='grid text-left'>
            <h1 className='font-bold tracking-wider'>{beneficiarie.name}</h1>
            <p className='text-sm'>{beneficiarie.provider} | {beneficiarie.account_number}</p>
            </div>
            </div>
                )}
        </div>
        <button className='bg-[#246BFD] rounded-full w-14 h-14 text-white font-bold text-2xl absolute bottom-6 right-6'>+</button>
        </div>     
      </>      
  )
}

export default Transfer
