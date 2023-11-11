import React from 'react'
import {logo,explore,location,settings,cloud} from '../contains'

const Nav = () => {
  return (
    <nav>
        <div className='navItem'>
            <img src={logo} />
        </div>
        <div className='navItem navTypography'>
            <img src={cloud} />
            <p>weather</p>
        </div>
        <div className='navItem navTypography'>
            <img src={explore} />
            <p>explore</p>
        </div>
        <div className='navItem navTypography'>
            <img src={location} />
            <p>cities</p>
        </div>
        <div className='navItem navTypography'>
            <img src={settings} />
            <p>settings</p>
        </div>
    </nav>
  )
}

export default Nav