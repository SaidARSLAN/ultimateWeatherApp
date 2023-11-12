import React from 'react'
import {logo,navLinks} from '../contains'
import NavItem from '../components/NavItem'

const Nav = () => {
  return (
    <nav>
        <div className='navItem'>
            <img src={logo} />
        </div>
        {navLinks.map( link =>  <NavItem link={link} /> )}
    </nav>
  )
}

export default Nav