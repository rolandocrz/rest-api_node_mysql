import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "crzpass",
  port: 3306,
  database: "usuarios",
});
