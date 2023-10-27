import React from 'react'
import styles from './ProjectBtn.module.css'

export default function ProjectBtn({text, link }) {

    const {main } = styles;

  return (
    <a className={main} href={link} target="_blank" rel="noreferrer">{text}</a>
  )
}
