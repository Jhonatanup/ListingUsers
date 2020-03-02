"use strict";

var arr = [1, 3, 5, 7, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 1;
});
console.log(filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
