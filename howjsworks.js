// =======================
//    Introduction
// =======================

//javascript is syncronous single threded language 
// every thing in js excute in excecution context 
// there are two part of this 
// Variable env and thread of execution 
// variable env contaons var and their val in for of obj
// while thread of exe contains block of code 

// lets see how js works 
// in order to run the code js first create excution context 
// where first var env will be created and all var initailized with 
// undefined and fun as whole definition 
// thread of exe will be created and code run line by line 
// it will dont do anything on fun def 
// when comes to fun envocation 
// a new excution context will be created 
// inside a fun var env will be created for local variables and arguments of function
// and place undefined for var
// code inside tread of exe will execute when return found it returns whole 
// context back to env where function was envoked 
// after return whole excution context will be deleted for fun
// after all code excution whole exc context will be deleted
// js will handeled all this using 
// call stack 
// in call stack always GEC(Global excution context) be there 
// and on fun invocation new exc context will be put on top of it 
// call stack aka as excution context stack,program stack,control stack,
// runtime stack,machine stack 

// js is loosaly typed language 
// which means var in js does not asociate with a perticular type 
// we can do 
// let x=10 
// leter x='ram'