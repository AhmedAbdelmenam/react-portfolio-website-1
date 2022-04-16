import React from 'react'
import './Header.css'
import Cta from './Cta'
import Me from '../../assets/1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
<header>
  <div className='container header_container'>
<h5>Hello I'm</h5>
<h1>Ahmed Abdelmenam</h1>
<h5 className='text-light'>Fullstack Developer</h5>
<Cta/>
        <HeaderSocials/>

<div className='me'>
  <img src={Me} alt="me" />
</div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>


  </div>
</header>  
)
}

export default Header