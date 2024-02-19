import React from 'react'
import './Nav.css'
import { Outlet } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Services</h4>
            <h4></h4>
            <h4></h4>
            <h4></h4>

        </div>
        <Outlet/>
    </div>
  )
}
