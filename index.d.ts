import { ClickHouseClient } from '@clickhouse/client';

declare module 'egg' {
  // extend app
  interface Application {
    ClickHouse: ClickHouseClient
  }
}