import React from 'react';
import styles from './ScrollToTop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';

export default function ScrollToTop() {

    const { container, scrollIcon } = styles;

    const scrollToTopHandler = () => {
           window.scrollTo({
            top:0,
            behavior: "smooth"
           })
    }
  return (

    <div className={container} onClick={scrollToTopHandler}>
        <FontAwesomeIcon className={scrollIcon} icon={faCaretSquareUp} />
    </div>
  )
}
