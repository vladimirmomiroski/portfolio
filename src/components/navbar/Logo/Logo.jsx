import React from 'react';
import styles from './Logo.module.css';
import { useContext } from 'react';
import { Context } from '../../../context/Context';

export default function Logo() {

  const { setBurgerActive } = useContext(Context);


  const goHomePage = () => {
    setBurgerActive(false);
  }


  const { logo } = styles;
  const { theme } = useContext(Context);
  let whichLogo = "assets/images/"
  whichLogo += theme ?  "logoDark.png" : "logoLight.png";
  return (
    <>
    <img onClick={goHomePage} className={logo} src={whichLogo} alt="logo" />
    </>
  )
}
