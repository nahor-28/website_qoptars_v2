import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { HiX, HiMenu } from 'react-icons/hi'
import logo from '../../assets/images/logo_main_white.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <nav className='navbar container'>
        <div className='navbar_logo'><Link to="/"><img src={logo} alt='logo'/></Link></div> {/* <img src={logo} alt='logo'/> */}
        <div className={isOpen ? 'navbar_contents_div navbar_mobile' : 'navbar_contents_div'}>
          <ul className='menu_contents'>
            <li><Link to="/specs">Specs</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        <div className='navbar_button'>Buy Now</div>
        </div>
        <div className='navbar_hamburger' onClick={handleClick}>
          { isOpen ? <HiX size={32}/> : <HiMenu size={32}/> }
        </div>
      </nav>
    </header>
  )
}

export default Navbar