import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
   <section id='portfolio'>
<h5>My Recent Work</h5>
<h2>Portfolio</h2>

<div className="container portfolio__container">
  <article className='portfolio__item'>
    <div className="portfolio__item image">
    <img src={IMG2} alt="" />
    </div>
      <h3>This is my Portfolio item title</h3>
      <a href="https://github.com/christykazi/MYSECONDPORTFILO.git" className='btn' target='_blank' >GIT-HUB</a>
      <a href={IMG1} className='btn btn primary' target='_blank'>LIVE DEMO</a>
  </article>
  <article className='portfolio__item'>
    <div className="portfolio__item image">
    <img src={IMG4} alt="" />
    </div>
      <h3>This is my Portfolio item title</h3>
      <a href="https://github.com/christykazi/MYSECONDPORTFILO.git" className='btn'>GIT-HUB</a>
      <a href="https://dribble.com/Alien_pixels" className='btn btn primary' target='_blank'>LIVE DEMO</a>
  </article>
  <article className='portfolio__item'>
    <div className="portfolio__item- image">
    <img src={IMG3} alt="" />
    </div>
      <h3>This is my Portfolio item title</h3>
      <a href="https://github.com/christykazi/MYSECONDPORTFILO.git" className='btn'>GIT-HUB</a>
      <a href="https://dribble.com/Alien_pixels" className='btn btn primary' target='_blank'>LIVE DEMO</a>
  </article>
  <article className='portfolio__item'>
    <div className="portfolio__item image">
    <img src={IMG5} alt="" />
    </div>
      <h3>This is my Portfolio item title</h3>
      <a href="https://github.com/christykazi/MYSECONDPORTFILO.git" className='btn'>GIT-HUB</a>
      <a href="https://dribble.com/Alien_pixels" className='btn btn primary' target='_blank'>LIVE DEMO</a>
  </article>
  <article className='portfolio__item'>
    <div className="portfolio__item image">
    <img src={IMG6} alt="" />
    </div>
      <h3>This is my Portfolio item title</h3>
      <a href="https://github.com/christykazi/MYSECONDPORTFILO.git" className='btn'>GIT-HUB</a>
      <a href="https://dribble.com/Alien_pixels" className='btn btn primary' target='_blank'>LIVE DEMO</a>
  </article>
  <article className='portfolio__item'>
    <div className="portfolio__item image">
    <img src="https://cdn.dribbble.com/userupload/4399910/file/original-932e7c673c1013ae79c5c38368f16e31.png?resize=320x240&vertical=center" alt="" />
    </div>
      <h3>This is my Portfolio item title</h3>
      <a href="https://github.com/christykazi/MYSECONDPORTFILO.git" className='btn'>GIT-HUB</a>
      <a href="https://dribble.com/Alien_pixels" className='btn btn primary' target='_blank'>LIVE DEMO</a>
  </article>
</div>
   </section>
  )
}

export default Portfolio