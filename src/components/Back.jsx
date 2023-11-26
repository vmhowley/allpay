import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from 'react-router-dom';

function Back() {
  const navigate = useNavigate();

  return (
    <div>
      <div 
          onClick={() => {
            navigate(-1, { replace: false });
          }}
          className="flex cursor-pointer h-6 w-6 pl-6 pr-6">
          <ArrowBackRoundedIcon />
        </div>
    </div>
  )
}

export default Back
