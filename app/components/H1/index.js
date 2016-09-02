/*
 * H1
 *
 * Standard H1 header for the website
 *
 */

import React from 'react';
import styles from './styles.css';

const H1 = (props) => {
  return (
    <h1 className={styles.heading1} {...props} />
  );
};

export default H1;
