import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '../images/avatar.png'
import Back from '../components/Back';
import ElectricBoltRoundedIcon from "@mui/icons-material/ElectricBoltRounded";


function Electricity() {
    const navigate = useNavigate();


  return (
    <div className='grid gap-4'>
      <Back name="Electricity Bill"/> 
      <div className='grid  mt-8 flex-col justify-center items-center gap-2 flex-1   '>
        <div className='bg-[#FFD300] bg-opacity-10 p-10 rounded-full text-[#FFD300]'>
            <ElectricBoltRoundedIcon sx={{ fontSize: 60 }}/>
        </div>
        </div>     
        <div className='grid gap-4'>
        <h1 className='font-bold text-2xl'>Pay Electricity Bill</h1>
        <p>Pay electricity bill safely, conveniently & easily.
        <p>You can pay anytime and anywhere!</p>
        </p>
        </div>
        <div className='p-6'>
            <form action="" className='grid text-left gap-2'>
                <label htmlFor="cid" className='font-bold text-[18px]'>Customer ID</label>
                <input name='cid' type="number" placeholder='Enter your ID' className='h-[56px] rounded-xl text-[#212121] bg-[#e9e9e9] font-bold ps-5' />
            </form>
            <button className='bg-[#246BFD] p-4 w-full rounded-full mt-4'>Continue</button>

        </div>
      </div>      
  )
}

export default Electricity
