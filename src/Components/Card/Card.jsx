import React from 'react'
import './Card.css'
import img from '../../assets/mustang.jpg'

const Card = (props) => {
  return (
    <div className='box'>
        <div className='imgSection2'><img src={props.image} alt="" /></div>
        <div className='textSection2'>
          <p>
            {props.desc}
          </p>
          <button>
            Explore More
          </button>
        </div>
      </div>

  )
}

export default Card
