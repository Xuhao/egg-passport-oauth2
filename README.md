# egg-passport-oauth2

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-oauth2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-oauth2
[travis-image]: https://img.shields.io/travis/Xuhao/egg-passport-oauth2.svg?style=flat-square
[travis-url]: https://travis-ci.org/Xuhao/egg-passport-oauth2

General-purpose OAuth 2.0 authentication strategy for [eggjs](https://github.com/eggjs/egg), based on [passport-oauth2](https://github.com/jaredhanson/passport-oauth2).

## Install

```bash
$ npm i egg-passport-oauth2 --save
```

## Usage

```js
// config/plugin.js
exports.passportOauth2 = {
  enable: true,
  package: 'egg-passport-oauth2',
};
```

## Configuration

```js
// config/config.default.js
exports.passportOauth2 = {
  provider: 'authCenter', // Optional, default is 'oauth2'
  key: '',
  secret: '',
  authorizationURL: 'https://www.example.com/oauth2/authorize',
  tokenURL: 'https://www.example.com/oauth2/token',
  callbackURL: 'http://localhost:3000/auth/authCenter/callback',
};
```

Checkout [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/Xuhao/egg-passport-oauth2/issues).

## License

[MIT](LICENSE.txt)
