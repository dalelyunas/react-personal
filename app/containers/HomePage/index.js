/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Button from 'components/Button/index.js';
import H1 from 'components/H1/index.js';
import P from 'components/P/index.js';

const HomePage = () => (
  <div>
    <div style={{ backgroundColor: '#F4F5F8', paddingBottom: '40px' }}>
      <H1 text="HI, I'M DAVID." />
      <P text="I am a 20 year old developer, student, and sometimes designer living in Boston. I currently attend Northeastern University in pursuit of a BS in Computer Science. Check out my Résumé." />
    </div>
    <Button text="MY PROJECTS" />
  </div>
);

export default HomePage;
