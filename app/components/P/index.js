/*
 * P
 *
 * Standard paragraph for the website
 */

import React from 'react';
import styles from './styles.css';

const P = (props) => {
  return (
    <p className={styles.paragraph} {...props} />
  );
};

export default P;
