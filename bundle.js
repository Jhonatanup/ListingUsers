"use strict";

var arr = [1, 3, 5, 7, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var newArr2 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr2);
var newArr3 = arr.map(function (item) {
  return item * 2;
});
console.log(newArr3);

var teste = function teste() {
  return 'teste';
};

console.log(teste());

var teste2 = function teste2() {
  return {
    nome: 'Jhonatan'
  };
};

console.log(teste2());
