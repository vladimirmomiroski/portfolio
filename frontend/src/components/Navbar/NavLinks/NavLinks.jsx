import React from 'react'
import { NavLink, useLocation} from 'react-router-dom';
import Btn from '../../Button/Btn';
import styles from './NavLinks.module.css'
import Theme from '../Theme/Theme';

export default function NavLinks() {

  const { container, list, listItem, active } = styles;

  const location = useLocation()

  const activeClass = (whichLocation) => {
    const loc = location.pathname.split("/")[1]
    return loc === whichLocation ? active : ""
  }

  return (
    <div className={container}>
      <Theme/>
        <ul className={list}>
            <NavLink className={`${listItem} ${activeClass('')}`} to='/'>Home</NavLink>
            <NavLink className={`${listItem} ${activeClass('about')}`} to='/about'>About Me</NavLink>
            <NavLink className={`${listItem} ${activeClass('projects')}`} to='/projects'>Projects</NavLink>
        </ul>
        <Btn text={'Contact Me'}/>
    </div>
  )
}
