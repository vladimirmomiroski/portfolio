import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub, faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function Footer() {
  const { container, icons, textBox, text, portfolioIcon, iconsBox, colorLight, colorDark} = styles;
  const { theme } = useContext(Context);
  const whichTheme = theme ? colorDark : colorLight;
  return (
    <footer className={whichTheme}>
    <div className={`${container} ${whichTheme}`}>
     <div className={textBox}>
      <p className={text}>
      developed using MERN stack
      </p>
      <a href="https://github.com/vladimirmomiroski/portfolio" target="_blank" rel="noreferrer" className={portfolioIcon}>
      <FontAwesomeIcon className={whichTheme} icon={faGithubAlt} />
      </a>
     </div>
      <div className={iconsBox}>
           <a
        href="https://www.linkedin.com/in/vladimir-momiroski-893081231/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${icons} ${whichTheme}`}
      >
       <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
      </a>
      <a
        href="https://github.com/vladimirmomiroski"
        target="_blank"
        rel="noopener noreferrer"
        className={`${icons} ${whichTheme}`}
      >
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </a>
      <a
        href="https://www.instagram.com/vladimirmomiroski/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${icons} ${whichTheme}`}
      >
       <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
      </a>
      <a
        href="https://www.facebook.com/vladimir.momiroski"
        target="_blank"
        rel="noopener noreferrer"
        className={`${icons} ${whichTheme}`}
      >
        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
      </a>
      </div>
    </div>
    </footer>
  );
}
