/*
 * Navbar
 *
 * The navbar for the website
 */

import React from 'react';
import styles from './styles.css';

import NavLogo from 'img/nav-logo.png';

const Navbar = (props) => {
  let navLinks = (<div></div>);

  if (props.items) {
    navLinks = props.items.map((item, index) => (
      <a key={index} onClick={item.handleRoute} className={styles.navLink}>{item.title}</a>
    ));
  }

  return (
    <header className={styles.navWrapper}>
      <img role="presentation" className={styles.navLogo} src={NavLogo} />
      {navLinks}
    </header>
  );
};

Navbar.propTypes = {
  changeRoute: React.PropTypes.func,
  items: React.PropTypes.array,
};

export default Navbar;
