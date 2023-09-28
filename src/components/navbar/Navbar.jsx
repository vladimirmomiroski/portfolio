import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import { Context } from '../../context/Context';

export default function Navbar() {
    const { container, navDark } = styles;
    const { theme } = useContext(Context);
    const whichTheme = theme ? navDark : ""
  return (
    <nav className={whichTheme}>
    <div className={container}>
      <Logo/>
      <NavLinks/>
    </div>
    </nav>
  )
}
