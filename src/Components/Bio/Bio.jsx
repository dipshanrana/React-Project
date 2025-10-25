import React from 'react'
import photo from '../../assets/Photo.jpg'
import './Bio.css'

const Bio = (props) => {
  return (
     <div className='info'>
            <img className='sphoto' src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.work}</p>
            <div className='social'>
              <a href=""><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg" alt="Facebook" /></a>
              <a href=""><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Facebook" /></a>
              <a href=""><img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg" alt="Facebook" /></a>
            </div>
        </div>
  )
}

export default Bio
