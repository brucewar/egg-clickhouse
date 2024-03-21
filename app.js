'use strict';

module.exports = app => {
  if (app.config.ClickHouse.app) require('./lib/clickhouse')(app);
};
