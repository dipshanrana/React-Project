import React from 'react'
import './Explore.css'
import himalaya from '../../assets/Explore1.jpg'
import Card from '../Card/Card'


const Explore = () => {


  return <>
  <div className='explore'>
    <div className="section section1 firstsection">

      <h1>Welcome to Nepal</h1>
    
      <div className='first contentExplore'>
        <img src={himalaya} alt="" />
        <div className="textExplore">
          <p>Lush Lanscapes</p>
          <p>Nepal’s fertile southern plains with lush forests, wildlife, and cultural towns, including Chitwan, Lumbini, and Koshi Tappu.</p>
        </div>
      </div>


      <div className='second contentExplore'>
        <div className="textExplore">
          <p>Serene Hills</p>
          <p>Explore Nepal’s fertile plains and vibrant ecosystems, with dense forests, rivers, and wildlife sanctuaries perfect for nature lovers and adventure seekers alike.</p>
        </div>
        <img src={himalaya} alt="" />


      </div>
      <div className='third contentExplore'>
        <img src={himalaya} alt="" />
        <div className="textExplore">
          <p>Majestic Peaks</p>
          <p>Snow-capped peaks, including Mount Everest, home to world-famous trekking routes such as Everest Base Camp, Annapurna Circuit, Langtang Valley, and Mustang.</p>
        </div>


      </div>

    </div>

    <div className="section section2">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>

    <div className="section section3">
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>
   
    </div>
  </>


}

export default Explore
