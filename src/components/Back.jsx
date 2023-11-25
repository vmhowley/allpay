import React from 'react'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";


function Back() {
  return (
    <div>
      <div 
          onClick={() => {
            navigate(-1, { replace: false });
          }}
          className="flex cursor-pointer h-6 w-6 pl-6 pr-6"
        >
          <ArrowBackRoundedIcon />
        </div>
    </div>
  )
}

export default Back
