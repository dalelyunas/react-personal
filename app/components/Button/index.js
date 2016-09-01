/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes } from 'react';
import styles from './styles.css';

const Button = (props) => {
  const className = props.className ? props.className : styles.button;

  let button = (
    <a className={className} href={props.href} onClick={props.onClick}>{props.text}</a>
  );

  if (props.handleRoute) {
    button = (
      <button className={className} onClick={props.handleRoute}>{props.text}</button>
    );
  }

  return (
    <div className={styles.buttonWrapper}>
    {button}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
