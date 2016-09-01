/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Button from 'components/Button/index.js';
const HomePage = () => (
  <div>
    <h1>This is the Homepage!</h1>
    <Button children='MY PROJECTS'/>
  </div>
);

export default HomePage;
