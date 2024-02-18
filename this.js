'strict mode'
// All About This Keyword in js 
// Outside of a function this has a global scope.
// Inside function this will be replaced by global object only in nonstrict mode (generally in interview tells like it is null or undefined but js has a this substitution)
function y(){
    // console.log('inside a fun',this);
}
y()  
// So it will replace to global object in strict mode)
// And it is also depends on how this is called 
// window.fun() then it will be window object in strict mode 
// This inside a object`s method
// subques->
// what is difference between function and method
// Function witch is part of javascript object is called method
// Lets have a example 
let obj = {
a:10,
x:function(){
console.log('inside obj',this)  //{ a: 10, x: [Function: x] }
}}  
//here x is method of obj
// What will be the value of this
// We remember value of this depends on how this will call 
obj.x()

//  meas x inside this obj means 
// This will point to current obj where it currentally exist 

// Note: before talking further lets discuss three imp topic ie call(),bind(),apply() learn from file 
// this inside arrow function -- arrow fun wont provide 
// this binding it takes from enclosing lexical context
// lexical context means where it is present ex..
let object = {
    a:10,
    z:()=>{
  console.log(this,'inside arrow fun');
    }
}
object.z()
let object1 = {
    a:30,
    z:function (){
     let x = ()=>{
        console.log(this,'inside nested function');
     }
     x(); // output { a: 30, z: [Function: z] } inside nested function 
     // ref to outer obj
    }
}
object1.z()
// inside the DOM  == value will be ref to html element
