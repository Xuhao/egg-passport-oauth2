'use strict';

const debug = require('debug')('egg-passport-oauth2');
const assert = require('assert');
const Strategy = require('passport-oauth2').Strategy;

module.exports = app => {
  const config = app.config.passportOauth2;
  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-oauth2] config.passportOauth2.key required');
  assert(config.secret, '[egg-passport-oauth2] config.passportOauth2.secret required');
  assert(config.authorizationURL, '[egg-passport-oauth2] config.passportOauth2.authorizationURL required');
  assert(config.tokenURL, '[egg-passport-oauth2] config.passportOauth2.tokenURL required');
  assert(config.callbackURL, '[egg-passport-oauth2] config.passportOauth2.callbackURL required');
  config.clientID = config.key;
  config.clientSecret = config.secret;
  const provider = config.provider || 'oauth2';

  // must require `req` params
  app.passport.use(provider, new Strategy(config, (req, token, tokenSecret, params, profile, done) => {
    // format user
    const user = {
      provider,
      id: profile.id,
      name: profile.username,
      displayName: profile.displayName,
      token,
      tokenSecret,
      params,
      profile,
    };
    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
