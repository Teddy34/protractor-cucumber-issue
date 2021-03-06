'use strict';

const width = 1920;
const height = 1080;

const chromeOptions = {
  args: ['--headless', `--window-size=${width},${height}`]
};

exports.config = {
  capabilities: {
    acceptInsecureCerts: true,
    browserName: 'chrome',
    chromeOptions,
    count: 2,
    name: 'all',
    logName: 'all',
    specs: [
      './cucumber.feature'
    ]
  },
  directConnect: true,
  maxSessions: 1,
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      'support.cornichon.js',
    ],
    format: 'progress-bar'
  }
};
