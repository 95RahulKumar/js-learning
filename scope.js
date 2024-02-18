// scope is directly related to lexical scope in js 
// scope is where u can acess a function or variable in code 
// two aspect ex...
let a=10
 function val(){
    let b =20
  console.log(a);  // a=10
 }
 val()
// first what is scope of variable a (ie where i can acess this var a)
// second is a inside the scope of a fun (ie can i acess this a inside the fun)
console.log(b) 
//lexical scope means where that code exist here val is lexically scoped inside global
//lexicl env =  local memory +lexical env of parent
// this serching var is called scope chain