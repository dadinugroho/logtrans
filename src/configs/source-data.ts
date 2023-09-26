import { Config } from "./config";

export const SourceData = require('knex')({
  client: 'mysql2',
  connection: {
    host: Config.DB_SOURCE_HOST,
    port: Config.DB_SOURCE_PORT,
    user: Config.DB_SOURCE_USER,
    password: Config.DB_SOURCE_PASS,
    database: Config.DB_SOURCE_NAME
  }
});
