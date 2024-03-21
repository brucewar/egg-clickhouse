# egg-clickhouse

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-clickhouse.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-clickhouse
[travis-image]: https://img.shields.io/travis/eggjs/egg-clickhouse.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-clickhouse
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-clickhouse.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-clickhouse?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-clickhouse.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-clickhouse
[snyk-image]: https://snyk.io/test/npm/egg-clickhouse/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-clickhouse
[download-image]: https://img.shields.io/npm/dm/egg-clickhouse.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-clickhouse

<!--
Description here.
-->

## Install

```bash
$ npm i egg-clickhouse --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.ClickHouse = {
  enable: true,
  package: 'egg-clickhouse',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.ClickHouse = {
};
```

see [ClickHouse](https://clickhouse.com/docs/en/integrations/language-clients/nodejs) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
