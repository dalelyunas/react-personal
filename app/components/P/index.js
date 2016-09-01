/*
 * P
 *
 * Standard paragraph for the website
 */

import React, { PropTypes } from 'react';
import styles from './styles.css';

const P = (props) => {
  return (
    <p className={styles.paragraph}>
      {props.text}
    </p>
  );
};

P.propTypes = {
  text: PropTypes.string,
};

export default P;
