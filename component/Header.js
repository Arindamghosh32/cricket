import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import cricketImage from './../assets/cricket-removebg-preview.png'; // Import the image
import './../css/header.css';


export default function Header() {
 
  return (
    <nav>
      <div className="body">
        <img src={cricketImage} alt="Cricket" style={{ width: '100px', height: 'auto' }} /> {/* Use the imported image */}
        <div className="anchor">
          <Link to="/" className='ch'>Home</Link>
          
          <Link to="/register" className='ch'>Register</Link>
        </div>
      </div>
      <div className="light"></div>
    </nav>
  );
}
