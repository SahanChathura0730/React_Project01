import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
   const [click , setClick] = useState (false);
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => (false);
  return (
    <>
      <nav className="navbar">
         <div className="navbar-container">
            <Link to="/" className='navbar-logo'>
               TRVLE <i className='fab fa-typo3' />
            </Link> 
            <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nave-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                  <Link to="/" className='nav-links' onclick={closeMobileMenu}>
                     Home
                  </Link>
               </li>
               <li className='nav-item'>
                  <Link to="/" className='nav-links' onclick={closeMobileMenu}>
                     Services
                  </Link>
               </li>
               <li className='nav-item'>
                  <Link to="/" className='nav-links' onclick={closeMobileMenu}>
                     Products
                  </Link>
               </li>
               <li className='nav-item'>
                  <Link to="/" className='nav-links-mobile' onclick={closeMobileMenu}>
                     Sign Up
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
    </>
  )
}

export default Navbar
