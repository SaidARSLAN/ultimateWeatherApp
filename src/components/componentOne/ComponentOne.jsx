import React from 'react'
import { cloud, explore, logo, settings,location } from '../../contains'
import './one.css'

const ComponentOne = () => {
  return (
    <div className='componentOne'>
      <div>
          <img src={logo} />
      </div>
      <div className='navbar'>
      <div className='item'>
          <img src={cloud} />
          <p className='typography'>weather</p>
      </div>
      <div className='item'>
          <img src={explore} />
          <p className='typography'>explore</p>
      </div>
      <div className='item'>
          <img src={location} />
          <p className='typography'>cities</p>
      </div>
      <div className='item'>
          <img src={settings} />
          <p className='typography'>settings</p>
      </div>
    </div>
      </div>
  )
}

export default ComponentOne