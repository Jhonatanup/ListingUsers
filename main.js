//REST
const usuario = {
    nome: 'Jhonatan',
    idade: 23,
    empresa: 'Dourasoft'
};

const { nome, ...resto } = usuario;

console.log(resto);

const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;

console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next );
}

console.log(soma(1,3,4))

//SPREAD

const arr1 = [1,2,24];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Jhonatan',
    email: 'jleandroweb@gmail.com'
}

const usuario2 = {
    ...usuario1,  nome: 'Jhon' };

console.log(usuario2);