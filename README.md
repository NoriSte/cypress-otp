# Cypress OTP

Enter a valid OTP token in your UI tests

[![Build Status](https://travis-ci.com/NoriSte/cypress-otp.svg?branch=master)](https://travis-ci.com/NoriSte/cypress-otp)
[![Build Cron](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/cypress-otp)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/) ![npm](https://img.shields.io/npm/dw/cypress-otp?color=CB3836)

<img src="assets/cy-otp.jpg" alt="Cypress OTP" style="width:400px;"/>

Use this plugin to insert a valid OTP token in a [Cypress](https://www.cypress.io) test.

# Installation

```bash
npm i -D cypress-otp
# or
yarn add -D cypress-otp
```

then open your `cypress/plugins/index.js` file and register a new task

```javascript
module.exports = on => {
  on("task", {
    generateOTP: require("cypress-otp")
  });
};
```

# How to use it

To get an OTP code

```javascript
cy.task("generateOTP", "YOUR_SECRET").then(token => {
  cy.get("#otp-token").type(token);
});
```

Take a look at the [example test](cypress/integration/cypress-otp.test.js) source code.

# Tips

- the plugin saves the last used secret so you can avoid to pass it every time. You can even set it at the beginning of your test suite

```javascript
before(() => {
  cy.task("generateOTP", "YOUR_SECRET");
});
```

and then consume the `generateOTP` task

```javascript
cy.task("generateOTP").then(token => {
  cy.get("#otp-token").type(token);
});
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/NoriSte"><img src="https://avatars0.githubusercontent.com/u/173663?v=4" width="100px;" alt="Stefano Magni"/><br /><sub><b>Stefano Magni</b></sub></a><br /><a href="https://github.com/NoriSte/cypress-otp/commits?author=NoriSte" title="Code">💻</a> <a href="https://github.com/NoriSte/cypress-otp/commits?author=NoriSte" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
