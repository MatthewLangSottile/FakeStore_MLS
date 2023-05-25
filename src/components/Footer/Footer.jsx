import React from 'react'
import "./Footer.css"
import {FaHeart} from 'react-icons/fa'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-left">Made with <FaHeart /> by MLS</p>
      <Link to="/contactus" className="footer-right" >Contact Us</Link>
    </div>
  )
}

export default Footer
