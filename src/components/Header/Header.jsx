import React from 'react'
import './Header.css'
import IMDB from '../../images/imdb.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className='header-container'>  
      <div className='header'>
        <div className="description-box">
          <h1 className="header-title">
            John Wick 3 :<span> Parabellum </span>
          </h1>
          <div className="rating-section">
            <div className="imdb-section">
              <img
              src={IMDB}
              className="img-logo" width='30' height='60'
              alt="logo"
              />
              <span className="rating-number">
                860/100
              </span>
            </div>
            <div className="tomatoes-section">
              <img
              src='https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg'
              className="img-logo" width='30'height='30'
              alt="logo"
              />
              <span className='rating-number'>
                97%
              </span>
            </div>
          </div>
          <div className="desccription-content">
            <p className="description-paragraph">
              John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <div className='button-rating'>
            <div>
              <FontAwesomeIcon icon={faPlay} className='play'/>
            </div>
            <p className='watch'>Watch Trailer</p>
          </div>
        </div>
      </div>
      <div className='header-number'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>
    </div>
  )
}

export default Header
