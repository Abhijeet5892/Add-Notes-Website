import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className='footer-container'>Copywrite by Abhi {year} </footer>
    </div>
  )
}

export default Footer
