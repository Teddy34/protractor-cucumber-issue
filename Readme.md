## Background

This repo has been setup to highlight an issue with parallel run of protractor tests using the cucumber framework

## Install

`npm i`
`npm run update`

## Test issue

When a test is failing, the webdriver instance is not released with the cucumber framework.
This works fine in non parallel moden even with only one webdriver instance (remove count capability property from conf.cucumber.js or change the test to succeed)

Jasmine will succeed in releasing the webdriver instance with
`npm run jasmine`

Cucumber will fail in releasing the webdriver instance with
`npm run cucumber`
