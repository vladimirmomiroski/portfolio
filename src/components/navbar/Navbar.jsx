import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

export default function Navbar() {
    const { container } = styles;
  return (
    <nav>
    <div className={container}>
      <Logo/>
      <NavLinks/>
    </div>
    </nav>
  )
}
