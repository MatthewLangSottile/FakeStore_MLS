import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className="contact-container">
        <div className="contact-box">
        <h2>Contact Us</h2>
        <form className="contact-form">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <textarea rows="5" placeholder="Write your message here"></textarea>
        <button>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
