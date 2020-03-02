function soma(a = 3, b = 8){
    return a + b;
}
console.log(soma(1));
console.log(soma(1,3));

const sum = (a = 3, b = 3) => a + b;
console.log(sum(1));
console.log(sum(1,3));