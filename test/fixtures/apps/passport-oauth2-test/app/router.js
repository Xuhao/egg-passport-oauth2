'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = `hi, ${app.plugins.passportOauth2.name}`;
  });

  app.passport.mount('oauth2');
};
