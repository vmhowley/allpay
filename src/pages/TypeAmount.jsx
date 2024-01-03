import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Transfer from './Transfer'


function TypeAmount(props) {

  const [person, setPerson] = React.useState({});
  
  return (
    <>
      <Transfer person={person} setPerson={setPerson} />
    </>
  )
}

export default TypeAmount