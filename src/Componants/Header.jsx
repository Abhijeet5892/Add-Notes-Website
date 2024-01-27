import React from 'react'
import './Style.css'
import img1 from '../Images/img1.png'

const Header = () => {
  return (
    <div className="header-container">
      <img src={img1} alt='img1' height='90px' width='90px' />
      <h1>NOTES</h1>
    </div>
  )
}

export default Header
