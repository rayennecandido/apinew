module.exports = app => {
    const cliente = require("../controllers/cliente.controller.js");
  
    var router = require("express").Router();
    // Create a new cliente

  router.post("/", cliente.create);
    
    app.use('/api/cliente', router);
};