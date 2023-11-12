import React from 'react'

const NavItem = ({ link }) => {
    return (
        <div className='navItem'>
            <img src={link.icon} />
            <p className='navTypography'>{link.name}</p>
        </div>
    )
}

export default NavItem