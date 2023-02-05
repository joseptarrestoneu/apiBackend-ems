var express = require('express');
var router = express.Router();

const userRoutes = require('./users')
const rolRoutes = require('./rols')
const usuariRoutes = require('./usuaris')
const serveiRoutes = require('./serveis')
const taskRoutes = require('./tasks')
const tipusactuacionsRoutes = require('./tipusactuacions')
const seguimentRoutes = require('./seguiments')
const dimensioRoutes = require('./dimensions')
const actuacioRoutes = require('./actuacions')
const paiRoutes = require('./pais')
const operationRoutes = require('./operations')

router
  .use("/users", userRoutes)
  .use("/rols", rolRoutes)
  .use("/usuaris", usuariRoutes)
  .use("/serveis", serveiRoutes)
  .use("/tasks", taskRoutes)
  .use("/tipusactuacions", tipusactuacionsRoutes)
  .use("/seguiments", seguimentRoutes)
  .use("/dimensions", dimensioRoutes)
  .use("/actuacions", actuacioRoutes)
  .use("/pais", paiRoutes)
  .use("/operations", operationRoutes)

module.exports = router
