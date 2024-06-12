import React, { useState } from 'react'
import "./Header.css"
import logo from "../Pic/logo.png"

const Header = () => {

// when scroll header at top
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header")
        header.classList.toggle("active",window.scrollY >100)
    })

    const [Mobile ,setMoble] = useState(false)
  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                </div>
                <div className='navlink'>
                      
                      <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={()=> setMoble(false)}>
                        <li><a href='#home'>home</a></li>
                        <li><a href='#abou'>about</a></li>
                        <li><a href='#service'>service</a></li>
                        <li><a href='#protfolio'>protfolio</a></li>
                        <li><a href='#contact'>contact</a></li>
                        <li><button className='home-btn'>BUY NOW</button></li>
                      </ul>
                      <button className='toggle' onClick={()=> setMoble(!Mobile)}>
                        {Mobile ?
                        <i className='fas fa-times close home-btn'></i> :
                        <i className='fas fa-bars open'></i>
                        }
                        

                      </button>
                </div>
            </div>
           
        </header>
        <section className='demo'></section>
    </>
  )
}

export default Header