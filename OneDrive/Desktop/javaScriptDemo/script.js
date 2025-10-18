// let a, b , c;
// a = 5;
// b = 6;
// c = a + b;
// const d = 5;
// let result = (5<a)?'a is greater than 5':'a is less than 5';

// console.log(result);

// function sum(a,b){
//     let sum = a + b;
//     return sum;
// }

// 
// let b = () =>{
//     let sum = 5;
//     return sum;
// }
//
//console.log(b(2,3));
// let a = (a = "madhu",b = 7) =>{
//     console.log(a,b);

// }
// a(undefined,5);
const Applyoperation = (a,b,operation) =>{

    return operation(a,b);
}
const add = (x,y) => x +y;
const multiply =(x,y) => x *y;
console.log(Applyoperation(2,3,add));
console.log(Applyoperation(2,3,multiply));