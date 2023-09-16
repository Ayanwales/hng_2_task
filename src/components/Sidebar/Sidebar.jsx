import React from 'react'
import './Sidebar.css'
import { AiOutlineHome } from "react-icons/ai"
import { BiVideoRecording } from "react-icons/bi"
import { PiTelevisionBold } from "react-icons/pi"
import { GrSchedulePlay, GrLogout } from "react-icons/gr"
import sidebarLogo from '../../images/tv.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className='sidebar-logo'>
        <img src={sidebarLogo} alt=''/>
        <span className='logo-header'>MovieBox</span>
      </Link>
      <Link to='/' className='home-icon'>
        <AiOutlineHome className='icon'/>
        <span className='Home'>Home</span>
      </Link>
      <Link to='/' className='movie-icon'>
        <BiVideoRecording className='icon'/>
        <span className='Movie'>Movies</span>
      </Link>
      <Link to='/' className='Tv Series'>
        <PiTelevisionBold className='icon'/>
        <span className='TV Series'>TV Series</span>
      </Link>
      <Link className='Upcoming'>
        <GrSchedulePlay  className='icon'/>
        <span className='Upcoming'>Upcoming</span>
      </Link>
      <div className='movie-projector'>
        <h4 className='projector-header'>play movie quizes and earn free tickets</h4>
        <p className='projector-paragraph'>50k people are playing now</p>
        <Link  to ='/'className='side-button'>start playing</Link>
      </div>
      <div className='logout-icon'>
        <GrLogout className='icon'/>
        <h3 className='logout'>Log out</h3>
      </div>
    </div>
  )
}

export default Sidebar
