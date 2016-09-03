/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Button from 'components/Button/index.js';
import H1 from 'components/H1/index.js';
import P from 'components/P/index.js';
import styles from './styles.css';

import HeroLogo from 'img/hero-logo.svg';
import MediaImg from 'img/media.svg';

export class HomePage extends React.Component {

  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  openProjects = () => {
    this.openRoute('/projects');
  };

  render() {
    const pStyle = {
      textAlign: 'center',
    };

    return (
      <div>
        <section className={styles.logoSection}>
          <img className={styles.homeImg} src={HeroLogo} />
          <h1 className={styles.heroText}>"INSPIRING QUOTE"</h1>
        </section>
        <section className={styles.aboutSection}>
          <H1>HI, I'M DAVID.</H1>
          <P style={pStyle}>I am a 20 year old developer, student, and sometimes designer living in Boston. I currently attend Northeastern University in pursuit of a BS in Computer Science. Check out my Résumé.</P>
        </section>
        <section className={styles.projectsSection}>
          <img className={styles.homeImg} src={MediaImg} />
          <P style={pStyle}>I enjoy creating fully responsive websites using the latest and best web frameworks and libraries. My current obsession is with React (and the million dependencies that come with it). To see what else i’ve dabbled in, check out:</P>
          <Button handleRoute={this.openProjects}>MY PROJECTS</Button>
        </section>

      </div>
    );
  }
}

HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
