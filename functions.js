var x = 1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}
//output 
// 10
// 100
// 1
// how this works 
//  first GEC(Global excution context will be created)
//  and variable end thread excution will be created 
//   first starting first line memory for var and function will be initialized 
//  second code excution happen 
// x=1
// new ec will created again all things repeat and output 10 and ec vanised out
//  new ec will created again all things repeat and output 100 and ec vanised out
// x = 1 print and GEC will be vanished out program ends

// remember when ever EC created this also created for that EC 
