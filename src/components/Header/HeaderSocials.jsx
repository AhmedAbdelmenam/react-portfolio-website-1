import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

        <a href="http://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" rel="noreferrer" target="_blank"><FaGithub/></a>
        <a href="http://dribble.com" rel="noreferrer" target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials