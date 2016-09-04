/*
 * Project Image Box
 *
 * The image layout that appears at the top of each project section

   props are image and title
 */

import React, { PropTypes } from 'react';
import styles from './styles.css';

import H1 from 'components/H1/index.js';

const ProjectImageBox = (props) => {
  return (
    <div>
      <div className={styles.boxHeader}>
        <h1 className={styles.boxText}>{props.title}</h1>
      </div>
      <img role="presentation" className={styles.boxImage} src={props.img} />
    </div>
  );
};

ProjectImageBox.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};

export default ProjectImageBox;
