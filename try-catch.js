try{
    let user = '{"name":"rahul"}';
    let userObj = JSON.parse(user)
console.log('hello i am rahul')
if(!userObj.value)
//here we are throwing the custom error
throw new SyntaxError('there is no valide value in json res')
}catch(err){
console.log('name of the error',err.name,'message in the error',err.message,'error stack',err.stack);
}
//if we use settime out then catch block will not execute 
try{
console.log('log....')
}catch(err){
    console.log('name of the error',err.name,'message in the error',err.message);
}
