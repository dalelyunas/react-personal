/*
 * H1
 *
 * Standard H1 header for the website
 *
 */

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H1 = (props) => {
  return (
    <h1 className={styles.heading1}>
      {props.text}
    </h1>
  );
};

H1.propTypes = {
  text: PropTypes.string,
};

export default H1;
