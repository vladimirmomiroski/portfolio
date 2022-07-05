import React from 'react'
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import Btn from '../../Button/Btn';
import styles from './NavLinks.module.css'
import Theme from '../Theme/Theme';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

export default function NavLinks() {

  const { container, list, listItem, active, lightColor, darkColor } = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? lightColor : darkColor;

  const location = useLocation()
  const navigate = useNavigate()

  const activeClass = (whichLocation) => {
    const loc = location.pathname.split("/")[1]
    return loc === whichLocation ? active : ""
  }

  const goToContactPage = () => {
        navigate("/contact")
  }

  return (
    <div className={container}>
      <Theme/>
        <ul className={list}>
            <NavLink className={`${listItem} ${whichTheme} ${activeClass('')}`} to='/'>Home</NavLink>
            <NavLink className={`${listItem} ${whichTheme} ${activeClass('about')}`} to='/about'>About Me</NavLink>
            <NavLink className={`${listItem} ${whichTheme} ${activeClass('projects')}`} to='/projects'>Projects</NavLink>
        </ul>
        <Btn text={'Contact Me'} func={goToContactPage} />
    </div>
  )
}
