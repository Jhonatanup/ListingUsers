"use strict";

var usuario = {
  nome: 'Jhonatan',
  idade: 23,
  endereco: {
    cidade: 'Dourados',
    estado: 'MS'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(cidade);

function mostraCidade(_ref) {
  var endereco = _ref.endereco;
  console.log(endereco.cidade);
}

mostraCidade(usuario);
