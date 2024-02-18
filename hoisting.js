let x = 7
function getName(){
    console.log('rahul kumar')
}
console.log(x)
getName()
// output 7 and rahul kumar
// lets see another example 
getVal()  //val is 10 this is happen bcz of hoisting 
function getVal(){
    console.log('val is 10');
}
console.log(y);  // error 
let y = 5
// =======================
//   hoisting in js is concept by which you can acess var and fun even without initializing
// =======================
// so if getVal() is not an arrow fun whole definition 
// assign to getVal() when we call it it excute it in begning 
// but for var it is undefined
// similarly for arrow fun and got error getVal not a fun