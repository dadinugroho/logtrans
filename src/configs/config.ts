import { load } from 'ts-dotenv';

export const Config = load({
  DB_SOURCE_HOST: String,
  DB_SOURCE_PORT: String,
  DB_SOURCE_NAME: String,
  DB_SOURCE_USER: String,
  DB_SOURCE_PASS: String,
  DB_MONGODB_URL: String
});
