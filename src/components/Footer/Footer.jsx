import React from 'react'
import "./Footer.css"
import {FaHeart} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-left">Made with <FaHeart /> by MLS</p>
      <a className="footer-right" href="/contact">Contact Us</a>
    </div>
  )
}

export default Footer
