"use client";
import { Tabs } from "keep-react";
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '../images/avatar.png'
import Back from '../components/Back';
import { motion } from 'framer-motion';
import { useNavigate, useHistory } from 'react-router-dom';


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


function Transfer( {person, setPerson}) {
    const navigate = useNavigate();
   
    function handleTransfer (e) {
        const name = e.currentTarget.querySelector('#name').innerHTML
        const account = e.currentTarget.querySelector('#account').innerHTML;
        setPerson({...orderData, sender_name: 'hola'});
        navigate('/type_amount', {state: {name:'name', account:'account'}});
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
        <Tabs aria-label="Tabs" style="underline" >
            <Tabs.Item active={true} title="All">
        <div  className='grid p-6 gap-4 '>
      {all.map((beneficiarie) => 
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
                </div>
      </Tabs.Item>
      <Tabs.Item title="Favorite">Dashboard content</Tabs.Item>
      <Tabs.Item title="Bank">Settings content</Tabs.Item>
      <Tabs.Item title="E-wallet">Contacts content</Tabs.Item>
      
    </Tabs>

            
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
