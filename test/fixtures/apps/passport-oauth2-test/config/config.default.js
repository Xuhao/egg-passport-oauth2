'use strict';

exports.keys = 'foo';

exports.passportOauth2 = {
  provider: 'oauth2',
  key: 'test key',
  secret: 'test secret',
  authorizationURL: '/oauth2/authorize',
  tokenURL: '/oauth2/token',
  callbackURL: '/passport/oauth2/callback',
};
