//let and const declarations are hoisted 
// these are in temporal dead zone for time being 
// let and const  variable  will hoisted but it will  be hoisted in 
// other memory not attached to global  these are attachehed to tdz(temporal dead zone)
// time when var is hoisted till when var initialized some value is called tdz
// but var will be attached to global object 
// so we can acess var using window/gloal ref but not let and const 
// we can get value as undefined before initialization of var variable
// but in case of let and const will get variable cant be used without 
// initialization 
// js will give error for redeclaration of let and var variable for same variable
// but 
var a =10
var a = 100
console.log(a);
let a = 10 // error Identifier 'a' has already been declared :::: syntaxerror
// event in case of const it is not allowed to initialazation after declaration
// but for let we declare a var and initialize later 
// typeerror, syntaxerror ,and referror
// typeerror 
const a1 =100
a1 = 10 // typeerror cant assign to const type 
// ref error when js unable to find out specific variable to memory space
// another one when variable in tdz


