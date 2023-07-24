import React from 'react'
import './services.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What i offer</h5>
      <h2>My Services</h2>
     

      <div className="container services__container">
        <article className='service'>
        <div className="service__head">
          <h3> Web Development</h3>
        </div>

        <ul className='service__list'>
          <li>
            <HiBadgeCheck 
            className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck

            className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
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
          <h3> Ul/UX Designing</h3>
        </div>

        <ul className='service__list'>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>
          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>

          <li>
            <HiBadgeCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
          </li>         
        </ul>
        </article>
        {/* Ul/Ux Design */}
      </div>
    </section>
  )
}

export default Services