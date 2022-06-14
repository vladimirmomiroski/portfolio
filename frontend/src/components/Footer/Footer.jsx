import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const { container, icons } = styles;
  return (
    <div className={container}>
           <a
        href="https://www.linkedin.com/in/vladimir-momiroski-893081231/"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
        <i className="fab fa-linkedin-in f-icons"></i>
      </a>
      <a
        href="https://github.com/vladimirmomiroski"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
        <i className="fab fa-github f-icons"></i>
      </a>
      <a
        href="https://www.instagram.com/vladimirmomiroski/"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
        <i className="fab fa-instagram f-icons"></i>
      </a>
      <a
        href="https://www.facebook.com/vladimir.momiroski"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
        <i className="fab fa-facebook-f f-icons"></i>
      </a>
   
 
    
    </div>
  );
}
