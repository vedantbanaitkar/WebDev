import React from 'react'
import { memo } from 'react';



const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar Rendered");
  return (
    <div>
      I am an {adjective} Navbar
      <button onClick={() => {getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
