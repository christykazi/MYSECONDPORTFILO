import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// npm install @emailjs/browser --save

const Contact = () => {
  const [message,setMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdrq1pk', 'template_xad8hgo', form.current, 'RIC4x65BxILJraNlf')
/* for disappearing form */
    e.target.reset()
      
  };
  return (
    <section id='contact'>
     <h5>Get in touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
      <div className="contact__options">
      <article className='contact__option'>
      <MdAttachEmail className='contact__option-icon'/>
      <h3>Email</h3>
      <h4>agbaichristiana37
      @gmail.com</h4>
      <a href="mailto:agbaichristiana37@gmail.com" target='_blank' className='btn' >Send me a message</a>
      </article>
      <article className='contact__option'>
      <BsMessenger className='contact__option-icon'/>
      <h3>Messenger</h3>
      <h4>Christiana Agbai</h4>
      <a href="https://m.me/crixianna.kaziokwu/" target='_blank' className=' btn' >Chat me up here</a>
      </article>
      <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h3>Whatsapp</h3>
      <h4>Click below</h4>
      <a href="https://api.whatsapp.com/send?phone=+2347010917437" target='_blank' className='btn' >Send me a DM</a>
      </article>

      </div>
  {/*     end of contact option */}
  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type="email" name='email' placeholder='Your Email' />
    <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
    {setMessage && <span>Thanks, I'll reply ASAP :) </span> }
 
  </form>
     </div> 
    </section>
  )
}

export default Contact