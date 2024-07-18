import React from "react"
import logo from "./Pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo} alt='' />
          </div>
          <p>© 2024. All rights reserved by Sajika Dilshan.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer