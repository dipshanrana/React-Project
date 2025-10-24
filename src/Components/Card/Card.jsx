import React from 'react'
import './Card.css'
import img from '../../assets/mustang.jpg'

const Card = () => {
  return (
    <div className='box'>
        <div className='imgSection2'><img src={img} alt="" /></div>
        <div className='textSection2'>
          <p>
            Mustang, a remote and culturally rich district in northern Nepal, lies in the rain shadow of the Himalayas and is often called the “Last Forbidden Kingdom.”
          </p>
          <button>
            Explore More
          </button>
        </div>
      </div>

  )
}

export default Card
