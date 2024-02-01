import React from 'react'
import './FooterStyle.css'

const Footer = ({theme, settheme}) => {
  return (
    <div className={`lineFormat d-flex justify-content-center  align-items-center mx-auto ${theme} `}>
      <p className='PMapFormat'>© All copyrights are reserved. B-World 2022. </p>
    </div>
  )
}

export default Footer