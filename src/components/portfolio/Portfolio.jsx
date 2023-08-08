import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data =[
  {
    id:1,
    image: IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/christykazi/MYSECONDPORTFILO.git',
    demo: 'https://dribbble.com/shots/16673715=Cryptocurrency-dashboard-and'
  },
  {
    id:1,
    image: IMG2,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/christykazi/MYSECONDPORTFILO.git',
    demo: 'https://dribbble.com/shots/16673715=Cryptocurrency-dashboard-and'
  },
  {
    id:1,
    image: IMG4,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/christykazi/MYSECONDPORTFILO.git',
    demo: 'https://dribbble.com/shots/16673715=Cryptocurrency-dashboard-and'
  },
  {
    id:1,
    image: IMG3,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/christykazi/MYSECONDPORTFILO.git',
    demo: 'https://dribbble.com/shots/16673715=Cryptocurrency-dashboard-and'
  },
  {
    id:1,
    image: IMG6,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/christykazi/MYSECONDPORTFILO.git',
    demo: 'https://dribbble.com/shots/16673715=Cryptocurrency-dashboard-and'
  },
  {
    id:1,
    image: IMG5,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com/christykazi/MYSECONDPORTFILO.git',
    demo: 'https://dribbble.com/shots/16673715=Cryptocurrency-dashboard-and'
  }
]


const Portfolio = () => {
  return (
   <section id='portfolio'>
<h5>My Recent Work</h5>
<h2>Portfolio</h2>

<div className="container portfolio__container">
  {
    data.map(({id, image, title, github, demo}) => {
      return (
        <article  key ={id} className='portfolio__item'>
    <div className="portfolio__item-image">
    <img src={image} alt={title} />
    </div>
      <h3>This is my Portfolio item title</h3>
     <div className={title}>
     <a href={github} className='btn' target='_blank' >GIT-HUB</a>
      <a href={demo} className='btn btn primary' target='_blank'>LIVE DEMO</a>
     </div>
  </article>
 
      )
    })
  }
</div>
   </section>
  )
}

export default Portfolio