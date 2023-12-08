import React from 'react'
import Back from '../components/Back'
import Avatar from '../images/avatar.png'
function InOut() {
  return (
        <>
        <Back name='In & Out Payment'/>
        <div className='top-actions'>
            <div className='flex gap-[12px] justify-center p-2'>
            <button className='bg-[#246BFD] w-[118.67px] h-[45px] rounded-full text-white'>History</button>
            <button className='bg-[#246BFD] w-[118.67px] h-[45px] rounded-full text-white'>Scheduled</button>
            <button className='bg-[#246BFD] w-[118.67px] h-[45px] rounded-full text-white'>Requested</button>
            </div>
            <div className='flex justify-between p-6'>
                <h1 className='font-bold'>Showing 25 of 849</h1>
                <p className='text-[#246BFD] font-semibold'>Download</p>
            </div>
            <div className='grid p-6 gap-4'>
                <div className='flex gap-4 bg-white items-center rounded h-[98px]'>
                    <div className='grid items-center'>
                    <img src={Avatar} alt="asdas" />
                    </div>
                    <div className='tracking-wider sm:text-center text-left grid gap-2 w-full'>
                        <h1 className='font-bold text-lg'>McDonald&apos;s Orders</h1>
                        <p className='text-sm'>Dec 24, 2023 \ 14:26:34 PM</p>
                    </div>
                    <div className='text-right'>
                        <h1 className='font-bold text-red-600'>$25</h1>
                        <p className='text-neutral-500'>Expense</p>
                    </div>
                </div>
                <div className='flex gap-4  bg-white items-center rounded h-[98px]'>
                    <div className='grid items-center'>
                    <img src={Avatar} alt="asdas" />
                    </div>
                    <div className='tracking-wider sm:text-center text-left grid gap-2 w-full'>
                        <h1 className='font-bold text-lg'>McDonald&apos;s Orders</h1>
                        <p className='text-sm'>Dec 24, 2023 \ 14:26:34 PM</p>
                    </div>
                    <div className='grid  text-right'>
                        <h1 className='font-bold text-red-600'>$25</h1>
                        <p className='text-neutral-500'>Expense</p>
                    </div>
                </div>
                <div className='flex gap-4  bg-white items-center rounded h-[98px]  '>
                    <div className='grid items-center'>
                    <img src={Avatar} alt="asdas" />
                    </div>
                    <div className='tracking-wider sm:text-center text-left grid gap-2 w-full'>
                        <h1 className='font-bold text-lg '>McDonald&apos;s Orders</h1>
                        <p className='text-sm'>Dec 24, 2023 \ 14:26:34 PM</p>
                    </div>
                    <div className='grid  text-right'>
                        <h1 className='font-bold text-red-600'>$25</h1>
                        <p className='text-neutral-500'>Expense</p>
                    </div>
                </div>
                <div className='flex gap-4  bg-white items-center rounded h-[98px]  '>
                    <div className='grid items-center'>
                    <img src={Avatar} alt="asdas" />
                    </div>
                    <div className='tracking-wider sm:text-center text-left grid gap-2 w-full'>
                        <h1 className='font-bold text-lg'>McDonald's Orders</h1>
                        <p className='text-sm'>Dec 24, 2023 \ 14:26:34 PM</p>
                    </div>
                    <div className='grid  text-right'>
                        <h1 className='font-bold text-red-600'>$25</h1>
                        <p className='text-neutral-500'>Expense</p>
                    </div>
                </div>
                <div className='flex gap-4  bg-white items-center rounded h-[98px]  '>
                    <div className='grid items-center'>
                    <img src={Avatar} alt="asdas" />
                    </div>
                    <div className='tracking-wider sm:text-center text-left grid gap-2 w-full'>
                        <h1 className='font-bold text-lg'>McDonald's Orders</h1>
                        <p className='text-sm'>Dec 24, 2023 \ 14:26:34 PM</p>
                    </div>
                    <div className='grid  text-right'>
                        <h1 className='font-bold text-red-600'>$25</h1>
                        <p className='text-neutral-500'>Expense</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default InOut