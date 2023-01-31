module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      nome: String,
      CPF: Number,
      dataNascimento: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const cliente = mongoose.model("cliente", schema);
  return cliente;
};