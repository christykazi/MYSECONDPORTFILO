import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> 
      CriXianna</a>

      <ul className='permlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#start">Start</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#"></a></li> 
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; CriXianna Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer