import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



// import Swiper core and required modules

// import { Pagination } from 'swiper';

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);



const data=[
  {
  avatar: AVTR1,
  name: 'Miss Jane Agbai',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptate quos ullam praesentium, necessitatibus dolor numquam, voluptatem aliquam voluptatibus dicta ipsum! Cumque unde nemo nostrum excepturi iste ani?',
},
{
  avatar: AVTR2,
  name: 'Mr. Joshua Calvin',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptate quos ullam praesentium, necessitatibus dolor numquam, voluptatem aliquam voluptatibus dicta ipsum! Cumque unde nemo nostrum excepturi iste ani?',
},
{
  avatar: AVTR3,
  name: 'Mr. James NNanqwu',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptate quos ullam praesentium, necessitatibus dolor numquam, voluptatem aliquam voluptatibus dicta ipsum! Cumque unde nemo nostrum excepturi iste ani?',
},
{
  avatar: AVTR4,
  name: 'Mrs Dorcas John',
  review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptate quos ullam praesentium, necessitatibus dolor numquam, voluptatem aliquam voluptatibus dicta ipsum! Cumque unde nemo nostrum excepturi iste ani?',
}
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

     {/*  Swiper  */}
      < Swiper pagination ={true}
      className="container testimonials__container">
{/* 
      install Swiper modules  */}
   {/*  modules={[Pagination]} */}

       spaceBetween={40}
       slidesPerView={1} 
      pagination={{ clickable: true }}  
       
       {
        data.map(({ avatar, name, review}, index) => { 
        return (
            <SwiperSlide key={index }className='testimonial'>
        <div className="client__avatar">
          <img src={avatar}/>
          </div>
          <h5 className='client__name'> {name}</h5>
          <small className='client__review'> {review}</small> 
          </SwiperSlide>      
      /*  </SwiperSlide> */
          )
          })
       } 
      </Swiper>
    </section>
  )
}

export default Testimonials