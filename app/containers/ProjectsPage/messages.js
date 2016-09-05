/*
 * ProjectsPage Messages
 *
 * This contains all of the text for the ProjectsPage component
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  projectHotColdHeader: {
    id: 'boilerplate.containers.ProjectsPage.project.hotcold.header',
    defaultMessage: 'HOT+COLD',
  },
  projectHotColdBlockOne: {
    id: 'boilerplate.containers.ProjectsPage.project.hotcold.block.one',
    defaultMessage: 'Hot+Cold is an iOS app I worked on during Hack Beanpot in January of 2015. The app randomly selects a destination using the Google Places API and directs the user there using warmer and colder instructions. The screen tracks progress by transitioning from blue to white to red, indicating how close you are to the destination.',
  },
  projectHotColdBlockTwo: {
    id: 'boilerplate.containers.ProjectsPage.project.hotcold.block.two',
    defaultMessage: 'I developed a good portion of the internal workings of the app including the location tracking code, the color interpolation for the screen, and the basic logic behind the warmer and colder notifications. I went into the hackathon relatively inexperienced with Swift and managed to learn a lot about core location and the MVC pattern by the end. The app ended up winning the "Most Fun" award at the hackathon.',
  },
});
