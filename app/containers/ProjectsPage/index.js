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

import HotCold from 'img/hot+cold.png';
import MusicAggr from 'img/musicaggr.png';
import ResPickr from 'img/respickr.png';
import PerWeb from 'img/perweb.png';

const ProjectsPage = () => (
  <div className={styles.projectsWrapper}>
    <H1>MY PROJECTS</H1>
    <div className={styles.project}>
      <ProjectImageBox title="PERSONAL WEBSITE" img={PerWeb} />
      <P>This project was the first released version of my personal website. The website was one page and contained basic about information and a projects section. The layout consisted of a grid of cards underneath a hero image.</P>
      <P>I wrote the site using basic HTML, SCSS, and Javascript. I wanted to avoid any major frameworks or libraries so I could learn some of the basics of web development before adding a lot of overhead to my projects. I ended up putting the most work into designing the website to get it to be properly responsive across all platforms. </P>
      <div className={styles.buttonContainer}>
        <Button href="https://github.com/dalelyunas/PersonalWebsite">GITHUB</Button>
      </div>
    </div>
    <div className={styles.project}>
      <ProjectImageBox title="HOT+COLD" img={HotCold} />
      <P>Hot+Cold is an iOS app I worked on during Hack Beanpot in January of 2015. The app randomly selects a destination using the Google Places API and directs the user there using warmer and colder instructions. The screen tracks progress by transitioning from blue to white to red, indicating how close you are to the destination.</P>
      <P>I developed a good portion of the internal workings of the app including the location tracking code, the color interpolation for the screen, and the basic logic behind the warmer and colder notifications. I went into the hackathon relatively inexperienced with Swift and managed to learn a lot about core location and the MVC pattern by the end. The app ended up winning the "Most Fun" award at the hackathon.</P>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonRight}>
          <Button href="https://itunes.apple.com/us/app/hot-+-cold/id979447640?mt=8">APP STORE</Button>
        </div>
        <div className={styles.buttonLeft}>
          <Button href="https://github.com/jackfrys/Hot-Cold">GITHUB</Button>
        </div>
      </div>
    </div>

    <div className={styles.project}>
      <ProjectImageBox title="MUSICAGGR" img={MusicAggr} />
      <P>MusicAggr is a Python script I put together as a learning project. It first uses the LastFm API to get the last 10 songs a group has listened to. Then it finds the albums of those songs and adds every song in those albums to a spotify playlist. Finally, after the songs are a week old, it deletes them from the playlist</P>
      <P>The script is pretty basic and mainly consists of various for loops to filter the content from the LastFm API to get relevant data.</P>
      <div className={styles.buttonContainer}>
        <Button href="https://github.com/dalelyunas/MusicAggr">GITHUB</Button>
      </div>
    </div>

    <div className={styles.project}>
      <ProjectImageBox title="RESTAURANT PICKER" img={ResPickr} />
      <P>Restaurant Picker is a website I made to learn Angular. The website asks for a set of parameters from the user, such as search radius, food type, etc., and randomly selects a reestaurant that fits the criteria using the Yelp API.</P>
      <P>The website has a service that interacts with the Yelp API to pull information and process it. The rest of the code is to style and format the site and to add a few effects like a slideshow background.</P>
      <div className={styles.buttonContainer}>
        <Button href="https://github.com/dalelyunas/Restaurant-Picker">GITHUB</Button>
      </div>
    </div>
  </div>
);

export default ProjectsPage;
