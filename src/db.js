import { createPool } from "mysql2/promise";
import { DB_PORT, DB_HOST, DB_DATABASE, DB_USER, DB_PASS } from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  port: DB_PORT,
  database: DB_DATABASE,
  dateStrings: true,
});
