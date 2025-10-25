import React from 'react'
import './Aboutus.css'
import photo from '../../assets/Photo.jpg'
import Bio from '../Bio/Bio'

const AboutUs = () => {
  return (
    <section className='aboutus'>
      <div class="section9">
        <div className='content'>
          <h1>ABOUT US</h1>
        </div>

        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1"
            d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,160C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L0,320Z">
          </path>

        </svg>

      </div>
      <div className='WhatDo'>
        <div className='imgWhat'> <img src={photo} alt="" /></div>
        <div className='UsText'>
          <h2>WHAT WE DO </h2>
          <p className='Pfirst'>We capture the beauty of the world through our lens — from breathtaking landscapes to authentic cultural moments. Our passion lies in exploring hidden corners of the globe and turning every journey into a story told through photographs.</p>
          <p className='Psecond'>Whether it’s documenting untamed nature, city life, or human emotions, we aim to preserve memories that inspire wanderlust and connect people to places they’ve never been.</p>
        </div>
      </div>
      <div className='team1'>
       <h3 className='team14'>OUR TEAM</h3>
        <p>The best team works with unity, trust, and passion — turning challenges into achievements. Together, they make success inevitable.</p>
        
      </div>

      <div className='team'>
        <Bio work="Photographer,videographer" name="Bishow Shrestha" image="https://alchetron.com/cdn/gyanendra-of-nepal-57555065-1b6c-453e-9304-7834ea27460-resize-750.jpeg"/>
        <Bio work="Vlogger,Guide" name="Dishant Giri" image="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/GQ2YGZKLORKTXBOKV5N4N645TE.jpg" />
                <Bio name="Aaron KC" work="Photographer,Traveller" image="https://images.hindustantimes.com/img/2022/12/25/1600x900/NEPAL-GOVERNMENT--0_1671979250816_1671979250816_1671979283611_1671979283611.JPG" />
        <Bio name="Dipesh Acharya" work="Traveller,Director" image="https://tse2.mm.bing.net/th/id/OIP.3vU_DokvZVdXflq17qsXmQHaEc?rs=1&pid=ImgDetMain&o=7&rm=3" />

      </div>
    </section>

  )
}

export default AboutUs
