// here we will learn about call bind and apply()
// it is usefull if you want to share the methodes

let obj1 = {
  name:'rahul',
  sirname:'kumar',
  fullname:function(){
   // so this have always refrernce to current object where it exsist
    console.log('fullname inside obj1',this.name+""+this.sirname)
  }
}
obj1.fullname()  // ouStput  fullname inside obj1 rahulkumar
// now lets another object 
let obj2 = {
    name:'rohit',
    sirname:'kumar',
    // if we want to print the full name we can coppy fullname method from obj1
    // but this is not a good way to do this..  
    // thats why call() comes into picture 
}

// actually this is called function borrowing where we can borrow a fun from 
// another object and use with data of other objects
// now we know each and every methode of js have acess to this call 
// where first arg we will pass the ref or in simple terms which object we want this should point 
// to so...
// and one more thing obj2.fullname() we cant do bcz fullname() is there in obj2
obj1.fullname.call(obj2)  
// or value of this = obj2
// obj2 fullname 
// how ever we dont keep method inside a obj if we want to reuse them we will keep 
// outside 
// lets look the new example 
let obj3 = {
    vill:'chuppepur',
    post:'ghamahapur'
}

let obj4 = {
    vill:'bhu',
    post:'varanasi'
}

function add(){
    console.log(this.vill+" "+this. post)
}

add.call(obj3);  //output chuppepur ghamahapur
add.call(obj4);  //output bhu varanasi
// what if have more parameter 
function add(pincode){
    console.log(this.vill+" "+this. post+" "+pincode)
}

//so first arg will be ref followed by args to function
add.call(obj3,221105);  //output chuppepur ghamahapur 221105
add.call(obj4,221107);  //output bhu varanasi 221107
// the difference between call and apply mehtod is how we are passing the arg
// ie a=arguments will list of arguments
add.apply(obj3,[221105]); //output chuppepur ghamahapur 221105
add.apply(obj4,[221107]); //output bhu varanasi 221107

//bind() is similar to call methode instead directally calling to function 
// it will bind the object and return the copy of that mt
// it will return  fun which invoke later 
let add1 = add.bind(obj3,221105);  //fun will bind to obj3 and return the the copy of it
add1()  // out chuppepur ghamahapur 221105


//summary 
// call method directly invoke the mt on object with ref 
// apply is similar to call just args in list formate
// bind is similar to call but instead of calling/invoking directly method
// it bind the obj nd return the copy of that mt wich invoke later 