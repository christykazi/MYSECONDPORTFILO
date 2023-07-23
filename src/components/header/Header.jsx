import React from 'react'
import "./header.css"
 import CATA from './CATA'
 import GIRLIE from "../../assets/girlie.jpg" 
 import HeaderSocials from './HeaderSocials'
  

 
const Header = () => {
  return (
   <header>
    <div className="container header_container">
    <h4>Hello I'm</h4>
    <h1>Chris<span>T</span>iana Agbai</h1>
    <h4>A</h4>
    <h5 className="text-light">
FullStack  Web Developer
    </h5>
     <CATA/> 
     <HeaderSocials/>
    <div className="girlie">
      <img src={GIRLIE} alt="girlie" />
    </div>
     <a href="#contact" className='scroll__down'>Scroll down</a> 

    </div>
   
   </header>
  )
}

export default Header