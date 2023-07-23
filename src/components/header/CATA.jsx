import React from 'react'
 import YESCV from "../../assets/yescv.pdf" 

const CATA = () => {
  return (
    <div className='cata'>
<a href= {YESCV}download className='btn'>Download CV</a>
<a href="#contact"  className='btn btn-primary'>Let's Talk</a>  
    </div>
  )
}

export default CATA