import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendRounded';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadRounded';
import { useNavigate } from 'react-router-dom';
import ImportExport from '@mui/icons-material/ImportExportRounded';


function Actions() {

const navigate = useNavigate ();    
    return (
    <div className='flex justify-center content-center items-center text-[#246BFD] z-10'>
        <div onClick={() => {navigate('/transfer')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#E9F0FF] dark:bg-[#35383F] p-4 rounded-full'>
            <SendOutlinedIcon className='  transform -rotate-45 ' />
            </div>
            <p>Transfer</p>
        </div>
        <div onClick={() => {navigate('/request')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#E9F0FF] dark:bg-[#35383F] p-4 rounded-full'>
            <FileDownloadOutlinedIcon  />
            </div>
            <p>Request</p>
        </div>
        <div onClick={() => {navigate('/inout')}} className='flex flex-col justify-center items-center gap-2 flex-1  h-[80px] '>
            <div className='bg-[#E9F0FF] dark:bg-[#35383F] p-4 rounded-full'>
            <ImportExport  />
            </div>
            <p>In & Out</p>
        </div>
        
    </div>
  )
}

export default Actions