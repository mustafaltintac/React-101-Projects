import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navHome'>
        <Link to={"/"}> HOME</Link>  
        <Link to={"/aboutUs"}> AboutUs</Link>  
        <Link to={"/history"}>  History</Link>

    </nav>
  )
}
