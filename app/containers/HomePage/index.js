/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Button from 'components/Button/index.js';
import H1 from 'components/H1/index.js';
import P from 'components/P/index.js';
import styles from './styles.css';
import HeroLogo from 'hero-logo.svg';

const HomePage = () => (
  <div>
    <div className={styles.logoSection}>
      <img className={styles.heroLogo} src={HeroLogo} />
      <h1 className={styles.heroText}>INSPIRING QUOTE</h1>
    </div>
    <div className={styles.aboutSection}>
      <H1 text="HI, I'M DAVID." />
      <P text="I am a 20 year old developer, student, and sometimes designer living in Boston. I currently attend Northeastern University in pursuit of a BS in Computer Science. Check out my Résumé." />
    </div>
    <Button text="MY PROJECTS" />
  </div>
);

export default HomePage;
