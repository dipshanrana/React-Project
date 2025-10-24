import React from 'react'
import './Footer.css'
import insta from "../../assets/instagram.png"
import twit from "../../assets/twitter.png"
import facebook from "../../assets/facebook.webp"
import { Link } from 'react-router-dom'
import image from '../../assets/mustang.jpg'
import map from '../../assets/map2.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerfirst'>

        <h3>Explore</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo libero nostrum sit rerum doloribus.</p>

        <div className="links">
          <a href="https://instagram.com" target='_blank'><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Facebook" /></a>
          <a href="https://twitter.com" target='_blank'><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg" alt="Facebook" /></a>
          <a href="https://facebook.com" target='_blank'><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg" alt="Facebook" /> </a>
        </div>
      </div>
      <div className='footersecond'>
      <p style={{marginBottom:"25px", fontSize:"15px",fontWeight:600, fontSize:"14px"}}>Useful Links</p>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Explore" >Explore</Link></li>
          <li><Link to="/AboutUs" >About Us</Link></li>
          <li><Link to="/Contact" >Contact</Link></li>
        </ul>
      </div>
      <div className='footerthird'>
        <p >Gallery</p>
        <div className='footerimages'>
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        </div>
      </div>
      <div className='footerfourth'>
          <p style={{marginTop:"33px",marginBottom:"17px", fontWeight:600, fontSize:"14px"}}>Whole Nepal Tour</p>
          <img src={map}a lt="" />
      </div>
    </div>


  )
}

export default Footer
