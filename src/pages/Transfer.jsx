import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '../images/avatar.png'
import Back from '../components/Back';
import { motion } from 'framer-motion';

const all = [
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
        provider: "Favorite",
        fav: true,
    },
]
const favorite = [
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
        name: "Cristian manuel Smith",
        phone: "829-369-6412",
        account_number: "56335473018",
        provider: "Bank",
        fav: true,
    },
]

const bank = [
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
        name: "Cristian manuel Smith",
        phone: "829-369-6412",
        account_number: "56335473018",
        provider: "Bank",
        fav: true,
    },
]

const wallet = [
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
]


function Transfer() {
    const [tab, setTab] = React.useState('all');
    const navigate = useNavigate();
    function handleTab (e) {
        setTab(e)
    }

    function handleTransfer (e) {
        const name = e.currentTarget.querySelector('#name').innerHTML
        const account = e.currentTarget.querySelector('#account').innerHTML;
        navigate('/type_amount');
        console.log(name +' account: '+ account)
    }

  

  return (
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
      <Back name="Transfer Money"/> 
      <div className='grid gap-4 mt-8'>
        <div className='flex items-center'>
        <SearchIcon className='relative left-9' />
        <input className='rounded-xl dark:bg-[#1F222A] bg-[#F5F5F5] h-[56px]  ps-10 w-[360px]' type="text" placeholder='Search'/>
        </div>
        <div className='flex font-bold text-[#9E9E9E] justify-center gap-3 items-center'>
            <div onClick={() => {handleTab('all'); }} >
                <h1  className={tab === 'all' ?  'w-20 h-10 flex items-center content-center justify-center text-[#246BFD]': 'w-20 h-10 flex items-center content-center justify-center' } >All</h1>
                <hr className={tab === 'all' ?  'h-1 bg-[#246BFD]': '' } />
            </div>
            <div onClick={() => {handleTab('favorite'); }} >
                <h1 className={tab === 'favorite' ?  'w-20 h-10 flex items-center content-center justify-center text-[#246BFD]': 'w-20 h-10 flex items-center content-center justify-center' }>Favorite</h1>
                <hr className={tab === 'favorite' ?  'h-1 bg-[#246BFD]': '' } />
            </div>
            <div onClick={() => {handleTab('bank'); }}>
                <h1 className={tab === 'bank' ?  'w-20 h-10 flex items-center content-center justify-center text-[#246BFD]': 'w-20 h-10 flex items-center content-center justify-center' }>Bank</h1>
                <hr className={tab === 'bank' ?  'h-1 bg-[#246BFD]': '' } />
            </div>
            <div onClick={() => {handleTab('e-wallet'); }}>
                <h1 className={tab === 'e-wallet' ?  'w-20 h-10 flex items-center content-center justify-center text-[#246BFD]': 'w-20 h-10 flex items-center content-center justify-center' }>E-Wallet</h1>
                <hr className={tab === 'e-wallet' ?  'h-1 bg-[#246BFD]': '' } />
            </div>
        </div>
        <div  className='grid p-6 gap-4 divide-y'>

            {tab === 'all' && all.map((beneficiarie) => 
            <div onClick={(e) => {handleTransfer(e)}}  key={beneficiarie.id} className='flex gap-4'>
                <img src={Avatar} alt="" />
            <div className='grid text-left'>
            <h1 id='name' className='font-bold tracking-wider '>{beneficiarie.name}</h1>
            <div className='flex gap-1 items-center '>
            <p  className='text-sm'>{beneficiarie.provider} |</p> 
            <p id='account' className='text-sm'>{beneficiarie.account_number}</p>
            </div>
            </div>
            </div>
                )}
                {tab === 'favorite' && favorite.map(( beneficiarie) => 
                
                <div key={ beneficiarie.id} className='flex gap-4'>
                <img src={Avatar} alt="" />
            <div className='grid text-left'>
            <h1 className='font-bold tracking-wider'>{beneficiarie.name}</h1>
            <p className='text-sm'>{beneficiarie.provider} | {beneficiarie.account_number}</p>
            </div>
            </div>
                )
            }
                {tab === 'bank' && bank.map(( beneficiarie) => 
                
                <div key={ beneficiarie.id} className='flex gap-4'>
                <img src={Avatar} alt="" />
            <div className='grid text-left'>
            <h1 className='font-bold tracking-wider'>{beneficiarie.name}</h1>
            <p className='text-sm'>{beneficiarie.provider} | {beneficiarie.account_number}</p>
            </div>
            </div>
                )
            }
                {tab === 'e-wallet' && wallet.map(( beneficiarie) => 
                
                <div key={ beneficiarie.id} className='flex gap-4'>
                <img src={Avatar} alt="" />
            <div className='grid text-left'>
            <h1 className='font-bold tracking-wider'>{beneficiarie.name}</h1>
            <p className='text-sm'>{beneficiarie.provider} | {beneficiarie.account_number}</p>
            </div>
            </div>
                )
            }
                </div>
                <button className='bg-[#246BFD] rounded-full w-14 h-14 text-white font-bold text-2xl absolute bottom-6 right-6'>+</button>
                </div>     
                </motion.div>      
  )
}

export default Transfer
