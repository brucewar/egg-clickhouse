'use strict';

const assert = require('assert');
const { createClient } = require('@clickhouse/client');

module.exports = app => {
  const config = app.config.ClickHouse;
  assert(config.host, '[egg-clickhouse] \'host\' is required on config');

  app.coreLogger.info('[egg-clickhouse] connecting ClickHouse server');

  const client = createClient(config);

  Object.defineProperty(app, 'ClickHouse', {
    value: client,
    writable: false,
    configurable: false,
  });

  app.beforeStart(async () => {
    try {
      await client.ping();
      app.coreLogger.info('[egg-clickhouse] ClickHouse connects successfully');
    } catch (err) {
      app.coreLogger.error('[egg-clickhouse] ClickHouse cluster is down with error: ' + err);
    }
  });
};
