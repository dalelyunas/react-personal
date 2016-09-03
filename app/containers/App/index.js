/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Footer from 'components/Footer/index.js';
import Navbar from 'components/Navbar/index.js';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    changeRoute: React.PropTypes.func,
  };

  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  openAbout = () => {
    this.openRoute('/about');
  };

  openProjects = () => {
    this.openRoute('/projects');
  };

  render() {
    return (
      <div>
        <Navbar
          items={
            [
              { title: 'PROJECTS', handleRoute: this.openProjects },
              { title: 'ABOUT', handleRoute: this.openAbout },
            ]
                }
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(App);
