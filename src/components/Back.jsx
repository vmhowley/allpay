import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from 'react-router-dom';

function Back(props) {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen gap-4 items-center">
   
      <div 
          onClick={() => {
            navigate(-1, { replace: false });
          }}
          className="flex cursor-pointer h-6 w-6 pl-6 pr-6">
          <ArrowBackRoundedIcon />
        </div>
          <h1 className='font-bold text-2xl '>{props.name}</h1>
        
    </div>
  )
}

export default Back
