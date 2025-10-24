import React from 'react'
import './Footer.css'
import insta from "../../assets/instagram.png"
import twit from "../../assets/twitter.png"
import facebook from "../../assets/facebook.webp"


const Footer = () => {
  return (
    <div className='footer'>
           <div className="text">
            <p>&copy; Copyright 2025 - Nepal Travels and Exploration</p>
           </div>
           <div className="links">
            <a href="https://instagram.com" target='_blank'><img src={insta} alt=""  /> </a>
            <a href="https://twitter.com" target='_blank'><img src={twit} alt=""  /> </a>
            <a href="https://facebook.com" target='_blank'> <img src={facebook} alt=""  /> </a> 
           </div>
    </div>
 
    
  )
}

export default Footer
