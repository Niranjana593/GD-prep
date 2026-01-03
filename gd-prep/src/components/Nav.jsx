import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../App.css'
const Nav = () => {
  const [show, setshow] = useState(false)
  function handleclick() {
    setshow(!show)
  }
  return (
    <div>
      <nav className={`${show ? 'flex-col left-0' : 'flex -left-25'} flex justify-between items-center  border-2 roboto text-[14px]`}>
        <div className="logo w-full  flex justify-between">
          <img width={50} onClick={handleclick} className='ml-3 md:hidden' src="menu.png" alt="" />
          <Link to="/"><img className='' width={80} height={80} src="logo4.png" alt="" /></Link>
        </div>
        <ul className={`${show ? 'flex-col gap-3 top-20 left-0' : '-left-25'} absolute transition-all duration-300 md:relative md:left-0 md:flex gap-20 font-bold text-lg `}>
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
