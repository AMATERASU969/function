function first(a, b){
    return function getSum(){
        return a + b;
    }
}
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
const sum = first(a, b);
console.log("Сумма чисел " + a + " и " + b + " = " + sum());