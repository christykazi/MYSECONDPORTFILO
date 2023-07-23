import React from 'react'
import "./nav.css"
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiSolidBookmarkAltPlus,BiMessageDetail} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {useState} from 'react'


const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
  <nav>
    <a href='#' onClick={() => setActiveNav("#") } className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

    <a href="#start" onClick={() => setActiveNav("#start")} className={activeNav === "#start" ? "active" : ""}><BiMessageDetail/></a>

    <a href="#expericence"  onClick={() => setActiveNav("#expericence")} className={activeNav === "#expericence" ? "active" : ""} ><BiSolidBookmarkAltPlus/></a>

    <a href="#services"  onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceFill/></a>
    
    <a href="#contact"  onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineUser/></a>
  </nav>
  )
}

export default Nav