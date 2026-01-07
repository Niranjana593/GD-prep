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
      <nav className="flex justify-between items-center border-2 roboto text-[18px]">
        <div className="logo w-full flex justify-between">
          <img width={50} onClick={handleclick} className='ml-3 md:hidden' src="menu.png" alt="" />
          <Link to="/"><img className={`${show} ? 'ml-20':''`} width={80} height={80} src="logo4.png" alt="" /></Link>
        </div>
        <ul className={`${show ? 'translate-x-0 bg-white' : '-translate-x-full'} absolute top-0 left-0 w-50 h-screen z-10 flex flex-col gap-3 p-4 text-black transform transition-transform duration-300 md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:translate-x-0 md:flex-row md:gap-20 md:p-0 md:text-inherit`}>
          <div className='flex'>
          <li className='w-full'><Link to="/">Home</Link></li>
            <img onClick={handleclick} className={`${show ? 'block':'hidden'}`} src="close.png" alt="" />
          </div>
          <li className='w-full'><Link to="/about">About</Link></li>
          <li className='w-full'><Link to="/services">Services</Link></li>
          <li className='pr-10'><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
