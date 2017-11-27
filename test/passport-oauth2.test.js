'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-oauth2.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-oauth2-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportOauth2')
      .expect(200);
  });

  it('should GET /passport/oauth2 redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/oauth2')
      .expect('Location', /^\/oauth2\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });

  it('should GET /passport/oauth2/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/oauth2/callback')
      .expect('Location', /^\/oauth2\/authorize\?response_type=code&redirect_uri=http/)
      .expect(302);
  });
});
