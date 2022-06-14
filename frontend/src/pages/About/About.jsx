import React from 'react';
import styles from './About.module.css';

const aboutMe = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa iure ipsam, distinctio voluptatem, eligendi beatae quidem a corporis repudiandae doloremque veniam amet repellendus exercitationem vel odio natus nostrum facilis.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa iure ipsam, distinctio voluptatem, eligendi beatae quidem a corporis repudiandae doloremque veniam amet repellendus exercitationem vel odio natus nostrum facilis.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa iure ipsam, distinctio voluptatem, eligendi beatae quidem a corporis repudiandae doloremque veniam amet repellendus exercitationem vel odio natus nostrum facilis.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa iure ipsam, distinctio voluptatem, eligendi beatae quidem a corporis repudiandae doloremque veniam amet repellendus exercitationem vel odio natus nostrum facilis veniam amet repellendus exercitationem vel odio natus nostrum facilis.."]

export default function About() {

  const { container, paper, box, leftGlue, rightGlue, text, title } = styles;
  return (
    <div className={container}>
      <div className={box}>
      <div className={leftGlue}></div>
      <div className={rightGlue}></div>
      <div className={paper}>
      <p className={title}>My Journey</p>
        {aboutMe.map(el => (
          <p className={text}>{el}</p>
        ))}
      </div>
      </div>
     
    </div>
  )
}
