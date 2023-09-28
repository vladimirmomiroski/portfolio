import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTvAlt, faXmark, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import styles from './ProjectItemSource.module.css';

export default function ProjectItemSource({ host, github }) {

    const { container, tvHost, xMark, codeContainer, codeIcon, actionTitle } = styles;

  const isItHosted = () => {
    const isHosted = host ? (
      <a className={tvHost} rel="noreferrer" href={host} target="_blank">
        <FontAwesomeIcon icon={faTvAlt} />
      </a>
    ) : (
      <span className={xMark}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    );
    return isHosted;
  };

  return (
    <div className={container}>
       <div className={codeContainer}>
      <span className={actionTitle}>code:</span>
      <a href={github} rel="noreferrer" target="_blank" className={codeIcon}><FontAwesomeIcon icon={faCodeBranch}/></a>
      </div>
      <div className={codeContainer}><span className={actionTitle}>host:</span> {isItHosted()}</div>
    </div>
  );
}
