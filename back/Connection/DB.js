const sql = require("mssql");
const config = {
  user: "steven",
  password: "1234",
  server: "localhost",
  database: "person",
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  },
};
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));
module.exports = {
  sql,
  poolPromise,
};
