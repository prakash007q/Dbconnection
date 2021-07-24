var sql = require("mssql")
var config = require("./dbConfig")
var dbConnect = new sql.ConnectionPool(config.dbConfig)
  .connect()
  .then(function(pool) {
       console.log("connected to database: " + config.dbConfig.server)
   })
  .catch(function(err) {
    console.log("Error", err)
  })
  
  module.exports = dbConnect
  
  