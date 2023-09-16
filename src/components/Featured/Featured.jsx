import React from 'react'
import './Featured.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Featured = () => {
  return (
    <>
    <div className='featured'>
      <h1 className='featured-movie'>Featured Movie</h1>
      <div className='see-more'>
        <p className='see-more'>See more</p>
        <FontAwesomeIcon icon={faAngleRight} className='angle'/>
      </div>
    </div>
  </>
  )
}
export default Featured
