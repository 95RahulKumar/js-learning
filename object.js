//first way of creating the object using object constructor syntax
let user = new Object({
    'name':'rahul',
    'age':28
});
console.log('user',user)
let user1 = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
  user1.add='vns'
  console.log('user',user1)
//sorthand for object creation
  function obj(name,age){
  return {
    name, // same as name:name
    age // same as age:age
  }
  }
console.log(obj('rahul',28))
//using "key" in object we get boolean value that key is exist in obj or not
let userobj = { name: "John", age: 30 };

console.log( "age" in userobj ); // true, userobj.age exists
console.log( "blabla" in userobj )
//The "for..in" loop
//To walk over all keys of an object, there exists a special form of the loop: for..in. 
let userobj1 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
for(key in userobj1){
    console.log(userobj1[key]);
}
//*************** */
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }
//   The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first.
  
//   But if we run the code, we see a totally different picture:
  
//   USA (1) goes first
//   then Switzerland (41) and so on.
//if the keys are non-integer, then they are listed in the creation order, for instance:
//So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

//Like this:

let codesobj = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codesobj) {
  console.log( +code ); // 49, 41, 44, 1
}

//==============================================//
// Object references and copying
// Comparison by reference
// two object are equal if they have same object
let a = {};
let b = a; // copy the reference

console.log( a == b ); //true
//And here two independent objects are not equal, even though they look alike (both are empty):
let a1 = {};
let b1 = {}; // two independent objects

console.log( a1 == b1 ); // false
let us = {
    name: "John",
    age: 30
  };
  const clone = Object.assign({}, us)
  console.log( clone)