/*
 * P
 *
 * Standard paragraph for the website
 */

import React from 'react';
import styles from './styles.css';

const P = (props) => (
  <p className={styles.paragraph} {...props} />
);

export default P;
