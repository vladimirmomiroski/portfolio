import React from 'react';
import styles from './Logo.module.css';
import { useNavigate } from 'react-router-dom';

export default function Logo() {

  const navigate = useNavigate()

  const goHomePage = () => {
    navigate("/");
  }

  const { logo } = styles;
  return (
    <>
    <img onClick={goHomePage} className={logo} src="/assets/images/vmLogo.png"  />
    </>
  )
}
