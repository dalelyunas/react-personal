/*
 * Projects Page
 *
 * This is the page containing all of my projects
 */

import React from 'react';
import Button from 'components/Button/index.js';
import H1 from 'components/H1/index.js';
import P from 'components/P/index.js';
import ProjectImageBox from 'components/ProjectImageBox/index.js';
import styles from './styles.css';

import LogoImg from 'img/hero-logo.svg';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsWrapper}>
      <H1>MY PROJECTS</H1>
      <div className={styles.project}>
        <ProjectImageBox title="HOT+COLD" img={LogoImg} />
      </div>
    </div>
  );
};

export default ProjectsPage;
