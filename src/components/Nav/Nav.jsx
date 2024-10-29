import React, { useRef } from 'react'
import navCSS from './../Nav/Nav.module.css'

const Nav = () => {
  const menu = useRef();

  const NavHandler = () => {
    menu.current.classList.toggle(navCSS.activeNav);
  }
  return (
    <div className={navCSS.Nav}>
      <div className={navCSS.logo}>
        <a href="#">FurniGo</a>
      </div>


      <ul ref={menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Designs</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
       
      </ul>

      <i className='ri-menu-4-line' id={navCSS.bars} onClick={NavHandler}></i>
    </div>
  )
}

export default Nav