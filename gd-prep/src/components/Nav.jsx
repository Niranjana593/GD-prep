import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav className='flex justify-between items-center p-4 border-2'>
            <div className="logo">
                Logo
            </div>
            <ul className='flex gap-20 font-bold text-lg'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li className='pr-10'><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
