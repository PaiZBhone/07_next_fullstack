const mysql = require("mysql2");
export const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "u6702850",
  password: "6702850",
  database: "u6702850_csc350",
});
