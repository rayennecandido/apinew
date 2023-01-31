require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./app/models");
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Conectado ao banco de dados!");
})
.catch(err => {
  console.log("Não é possível conectar ao banco de dados!", err);
  process.exit();
})

var corsOptions = {
origin:'*', 
 credentials:true,            //access-control-allow-credentials:true
 optionSuccessStatus:200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Cadastro ao usuário!" });
});

// set port, listen for requests
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
const PORT = process.env.PORT || 8080;
require("./app/Routes/clienteRoutes")(app);
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}.`);
});
