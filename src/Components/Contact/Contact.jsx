import React from 'react'
import './Contact.css'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='Contact'>
      <div>
        <h2>Contact us</h2>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd lke to contact below.</p>
      </div>
      <div className='formbox'>
        <ContactForm/>
      </div>
    </div>

  )
}

export default Contact
