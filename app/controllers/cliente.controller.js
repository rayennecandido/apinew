const db = require("../models");
const cliente = db.cliente;

exports.create = (req, res) => {
  // {name:"rayenne", CPF: 098.134.114-00, dataNascimento: 25/08/1995}
    
if(!req.body.name) {
  res.status(422).send({ error: 'O nome é obrigatório!' })
  return;
}

if(!req.body.CPF) {
  res.status(422).send({ error: 'O CPF é obrigatório!' })
  return;
}

if(!req.body.dataNascimento) {
  res.status(422).send({ error: 'A data de nascimento é obrigatória!' })
  return;
}

const cliente = new cliente ({
  name: req.body.name,
  CPF: req.body.CPF,
  dataNascimento: req.body.dataNascimento
});
cliente
    .save(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao criar cliente!"
      });
    });
};