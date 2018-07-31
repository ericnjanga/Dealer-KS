import { configure } from '@storybook/react';

// Injectging jQuery to the global scope (for storybook)
const jQuery = require('jquery');
global.$ = jQuery;
global.jQuery = jQuery;

function loadStories() {
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);