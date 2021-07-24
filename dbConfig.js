var dbConfig = {
    server: "localhost",
    user:"sa",
    password:"testpass@123",
    database: "API",
    encrypt: true,
    dialectOptions: {
      instanceName : "SQLEXPRESS",
      // trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}
module.exports = {
  dbConfig
}
  