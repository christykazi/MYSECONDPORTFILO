import React from 'react'
import './start.css'
import MY from '../../assets/girliee.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const Start = () => {
  return (
   <section id='start'>
    <h5 className='get'>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container start__container">
      <div className="start__girliee">
      <div className="start__girliee-image">
       <img src={MY} alt="start Image" />
      </div>
      </div>
      
      <div className="start__content">
      <div className="start__cards">
        <article className='start__card'>
        <FaAward className ='start__icon'/>
        <h5>Experience</h5>
        <small> 3+ years Working</small>
        </article>

        <article className='start__card'>
        <FiUsers className ='start__icon'/>
        <h5>Clients</h5>
        <small> 300+ WorldWide</small>
        </article>
        

        <article className='start__card'>
        <VscFolderLibrary className ='start__icon'/>
        <h5>Projects</h5>
        <small> 90+ Completed</small>
        </article>
      </div>
<p>Hello, Dear. Welcome to my profile, I am a well grounded FullStack Website Developer. I always deliver the best. You can contact me for all projects. rerum nemo, accusamus architecto distinctio quas? Accusantium, nostrum.</p>
{/* <a href="#contact" id='cont' className='btn btn-primary'>Let's Chat</a> */}

      </div>

    </div>
   </section>
  )
}

export default Start