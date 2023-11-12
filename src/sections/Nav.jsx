import React from 'react'
import {logo,navLinks} from '../contains'

const Nav = () => {
  return (
    <nav>
        <div className='navItem'>
            <img src={logo} />
        </div>
        {navLinks.map((link) => {
            return (
            <div className='navItem navTypography'>
                    <img src={link.icon} />
                    <p>{link.name}</p>
            </div>
        )
        })}
    </nav>
  )
}

export default Nav