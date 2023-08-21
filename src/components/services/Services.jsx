import React from 'react'
import './services.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I offer</h5>
      <h2>My Services</h2>
     

      <div className="container services__container">
        <article className='service'>
        <div className="service__head">
        <h3>FullStack Developer</h3>
        </div>

        <ul className='service__list'>
          <li>
            <HiBadgeCheck 
            className='service__list-icon'/>
            <p> I am an experienced software engineer.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>I create, develop and design both client-side</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p> And server-side of the software application.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p> I am knowledgeable about design principles,</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>user experiences and database architecture.</p>
          </li>         
        </ul>
        </article>
        {/* End of frontend */}

        <article className='service'>
        <div className="service__head">
          <h3> Graphic Designing</h3>
        </div>

        <ul className='service__list'>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p> As a graphic designer, I create eye-catching </p>
          </li>

          <li> 
            <HiBadgeCheck

            className='service__list-icon'/>
            <p>visuals contents and imagery products.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p> I transform ideas into creative designs. </p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>I assemble images, typography, art</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>or motion graphics to create a piece of design.</p>
          </li> 

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>         
        </ul>
        </article>
        {/* End of Graphic */}

        <article className='service'>
        <div className="service__head">
          <h3> Cyber Sercurity</h3>
        </div>

        <ul className='service__list'>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>I am an experienced Cyber Security Protector. </p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>I protect internet-connected devices </p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>from malicious attacks by cybercriminals,</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p> phishing or ransomware schemes, Identity theft, </p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>data breaches and financial losses.</p>
          </li>         
        </ul>
        </article>
        {/* Ul/Ux Design */}
      </div>
    </section>
  )
}

export default Services