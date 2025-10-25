import React from 'react'
import Navbar from '../Navbar/Navbar'
import BackgroundImage from '../../assets/mustang.jpg'
import './Home.css'
import Footer from '../Footer/Footer'

const Home = () => {
  return (


    <div className='home-container' >
      <div className='top'>
        <h1>
        Explore With Us To Beauty OF life
        </h1>
        </div>
      <div className="hero">
        <div className="words">
          <span>Discover your next adventure with us</span>
          <span>Nepal Travels & Expedition is a leading, full-service trekking, tour, mountaineering, scenic, cultural and spiritual tours, wilderness expedition, and overland adventure agency, offering a variety of experiences for every type of traveler. Start by searching your dream trip.</span>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f0e8e8ff" fill="none">
              <path d="M17 17L21 21" stroke="#e8ebf5ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="#d6d9e4ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Explore 
            </button>
        </div>

        <div className="image"><img src="https://www.kevmrc.com/wp-content/uploads/2022/12/snow-leopard-768x513.jpeg" alt="" /></div>
      </div>

    </div>

)

}

export default Home
