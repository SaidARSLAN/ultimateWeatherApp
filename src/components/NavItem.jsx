import React from 'react'

const NavItem = ({link}) => {
  return (
    <div className='navItem navTypography'>
                    <img src={link.icon} />
                    <p>{link.name}</p>
            </div>
  )
}

export default NavItem