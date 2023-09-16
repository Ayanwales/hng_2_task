import React from 'react'
import './Footer.css'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-icons'>
      <Link to="/">
          <AiFillFacebook className='icon'/>
        </Link>
        <Link to ="/">
          <AiOutlineInstagram className='icon'/>
        </Link>
        <Link to="/">
          <AiOutlineTwitter className='icon'/>
        </Link>
        <Link to="/">
          <AiFillYoutube className='icon'/>
        </Link>
      </div>
      <div className='social-links'>
        <Link to='/'>Conditions of Use</Link>
        <Link to='/'>Privacy & Policy </Link>
        <Link to = '/'>Press Room</Link>
      </div>
      <p className='footer-paragraph'>&copy; 2021 Movies by Adriana Eka Prayudha</p>
    </div>
  )
}
export default Footer
