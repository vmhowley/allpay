import React from 'react'

import { Link  } from 'react-router-dom'
import {Home} from 'react-iconly'
import {Chart} from 'react-iconly'
import {Scan} from 'react-iconly'
import {User} from 'react-iconly'
import {Wallet} from 'react-iconly'

function Bottombar() {
  return (    
        <nav id='bottom-bar' className='pb-1 text-sm flex justify-between items-center h-[82px] rounded-t-md fixed bottom-0 left-0 bg-white dark:bg-[#181A20D9]  backdrop-blur-xl  w-full  text-[#9E9E9E]'>
            <Link to='/' className='flex flex-col  place-items-center gap-[2px] flex-1 text-[#246BFD]'>
            <Home />
              Home
            </Link>
            <Link to='/statistics' className='flex flex-col  place-items-center gap-[2px] flex-1'>
              <Chart />
              Statistic
            </Link>
            <Link to='/qrcode' className='flex place-items-center gap-[2px]  bg-[#246BFD] h-9 w-9  justify-center rounded-full text-white transform rotate-90 '>
            <Scan className='transform rotate-90'  stroke='bold' />
            </Link >
            <Link to='/wallet' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <Wallet />
            My Card
            </Link>
            <Link to='/profile' className='flex flex-col  place-items-center gap-[2px] flex-1'>
            <User />
            Profile
            </Link>

        </nav>

  )
}

export default Bottombar