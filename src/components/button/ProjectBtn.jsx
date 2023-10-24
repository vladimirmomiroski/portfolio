import React from 'react'
import styles from './ProjectBtn.module.css'

export default function ProjectBtn({text, style, link }) {

    const {main, secondary} = styles;

    const whichStyle = style === 'main' ? main : secondary;
  return (
    <a className={whichStyle} href={link} target="_blank" rel="noreferrer">{text}</a>
  )
}
