import React from 'react'
import './Footer.scss'
import {AiFillFacebook,AiFillLinkedin,AiFillGithub,AiFillTwitterSquare,AiFillRedditSquare} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a className='logo' href="#"> SURYA PRAKASH</a>
      <div className="footer_socials">
        <a href=""><AiFillGithub/></a>
        <a href=""><AiFillLinkedin/></a>
        <a href=""><AiFillTwitterSquare/></a>
        <a href=""><AiFillRedditSquare/></a>
        <a href=""><AiFillFacebook/></a>
       
      </div>
      <div className="copyright">
        <small>&copy; Surya Prakash. All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer
