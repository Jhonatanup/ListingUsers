const arr = [1,3,5,7,9];

const newArr = arr.map(item => {
    return item*2;
});

console.log(newArr);

const newArr2 = arr.map((item) => {
    return item*2;
});
console.log(newArr2);

const newArr3 = arr.map((item) => item*2);
console.log(newArr3);

const teste = () => 'teste';
console.log(teste());

const teste2 = () => ({nome: 'Jhonatan'});
console.log(teste2());