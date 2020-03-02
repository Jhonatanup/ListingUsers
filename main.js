const usuario = {
    nome: 'Jhonatan',
    idade: 23,
    endereco: {
        cidade: 'Dourados',
        estado: 'MS',
    },
};

const { nome, idade , endereco:{cidade}} = usuario;
console.log(nome);
console.log(cidade);

function mostraCidade({endereco}){
    console.log(endereco.cidade);
}
mostraCidade(usuario);