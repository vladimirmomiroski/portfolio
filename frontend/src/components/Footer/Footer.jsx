import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub, faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  const { container, icons, textBox, text, portfolioIcon } = styles;
  return (
    <div className={container}>
     <div className={textBox}>
      <p className={text}>
      developed using MERN stack
      </p>
      <a href="https://github.com/vladimirmomiroski/portfolio" target="_blank" rel="noreferrer" className={portfolioIcon}>
      <FontAwesomeIcon icon={faGithubAlt} />
      </a>
     </div>
      <div>
           <a
        href="https://www.linkedin.com/in/vladimir-momiroski-893081231/"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
       <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
      </a>
      <a
        href="https://github.com/vladimirmomiroski"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a
        href="https://www.instagram.com/vladimirmomiroski/"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
       <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
      <a
        href="https://www.facebook.com/vladimir.momiroski"
        target="_blank"
        rel="noopener noreferrer"
        className={icons}
      >
        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
      </a>
      </div>
    </div>
  );
}
