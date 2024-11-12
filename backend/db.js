import mysql from "mysql";

import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "sneakers"
});
//In case of PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';