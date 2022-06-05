import React from 'react'
import ImagePart from './imagePart/ImagePart'
import Introduction from './introduction/Introduction'
import styles from './Header.module.css'

export default function Header() {
    const { container } = styles;
  return (
    <div className={container}>
        <Introduction/>
        <ImagePart/>
    </div>
  )
}
