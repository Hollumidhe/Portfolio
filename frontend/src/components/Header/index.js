import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import './header.css';
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <div className='logo'>
          <h1>Hollumide</h1>
        </div>
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/portfoio" activeStyle>
            Portfolio
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Contact
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar
