import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {

  return (
      

    <footer className="footer">
      <div className="footer-content">
        <span className="footer-copyright">
          © 2247 bswlganesh™. All Rights Reserved.
        </span>
        <ul className="footer-links">
          <li>
           <Link to="/"> About
           </Link>
          </li>
          <li>
          <a href="mailto:baswalganesh1@gmail.com"> Contact</a>


          </li>
        </ul>
      </div>
    </footer>

    
  )
}
