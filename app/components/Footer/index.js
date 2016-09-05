/*
 * Footer
 *
 * The footer for the website
 */

import React from 'react';
import styles from './styles.css';
import GithubImg from 'img/github.png';

const Footer = () => (
  <footer className={styles.footerWrapper}>
    <section className={styles.footerSection}>
      <p>© 2016 David Alelyunas</p>
    </section>
    <section className={styles.footerSection}>
      <p>alelyunas.d@husky.neu.edu</p>
    </section>
    <section className={styles.footerSection}>
      <a href="https://github.com/dalelyunas"><img role="presentation" src={GithubImg} /></a>
    </section>
  </footer>
);

export default Footer;
