'use strict';

module.exports = agent => {
  if (agent.config.ClickHouse.agent) require('./lib/clickhouse')(agent);
};
