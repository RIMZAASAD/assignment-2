
import React from 'react'
import Link from 'next/link'
import "../styles/Header.css"



const Header = () => {
    
   

  return (

    <header>
        <nav className='header'>
            <ul className='header-links " data-aos="zoom-out-down"'>
                
          <li><Link href="/"> Home</Link></li>
          <li><Link href="/contact"> Contact</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>


        </nav>
    </header>
  )
}

export default Header