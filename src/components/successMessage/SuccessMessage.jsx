import React from "react";
import styles from './SuccessMessage.module.css';

export default function SuccessMessage() {


  return (
        <p className={styles['success-message']}>
          <p>Thank you for your Message!</p>
        </p>
 
  );
}
