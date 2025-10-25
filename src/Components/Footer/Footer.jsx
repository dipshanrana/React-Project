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
        <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/11/29060029/red-panda-2.jpg" alt="" />
        <img src="https://tse2.mm.bing.net/th/id/OIP.RVS7A90AUbKJPG0scgW7NQHaFz?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <img src="https://visitnepal2017blog.files.wordpress.com/2017/01/swayambhu-stupa.jpg?w=1024" alt="" />
        <img src="https://th.bing.com/th/id/OIP.gGVWlOaVDyCg7CVytqqiRwHaEs?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <img src="https://i.ytimg.com/vi/6kmFiiLghDA/maxresdefault.jpg" alt="" />
        <img src="https://img.freepik.com/premium-photo/trekking-himalaya-mountains-nepal-with-beautiful-green-hills-river-waterfalls_723123-494.jpg" alt="" />
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
