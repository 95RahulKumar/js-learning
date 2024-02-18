// what is block 
// the code inside {} is called block
// if we wnat to excute a multipleline of code where js expect single line 
// we will wrap inside {}
if(true){
    ///
    // code goes here
}
// block scope -- what are var and function acessible inside ths block
{
    let a =10
    const b =20
    var c =30
}
// here a b are block scope
// and c has global scope
// same var can be shadowed inside a block
// and it also modify the value 
var x =100
let y =100 // script scope
const t =30
{
    var x =30
    let y =10
    const t = 300
    console.log(x); // x 30
    console.log(y); // y 10 shdow it have a block scope
    console.log(t); // t 300
}
console.log(x); // x=30 so here both x is ref to samre global scope
console.log(y); // y 100 not ref to same global scope so val is 100
console.log(t); // t= 30
// let or const cant be shadowed with var for same var
// let v = 20 // cant redclare block scope var
// {
//     var v = 10; // cant redclare block scope var
//     console.log(v); // v
// }
//same here 
// const v =10
// {
//     var v = 30
// }