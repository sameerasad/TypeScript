// function argument with typecasting
const login =(email:string,password:string,ispaid:boolean)=>{
    return 0;
}

login("s@s.com","12334",false)
 
// function argument with default values

let signUp=(name:string,email:string,password:number=123,)=>{
return name;
}
signUp("sameer","s@s.com");

export {}




// handle return type of a function

const addTwo=(val:number):number=>{
    return val +1;
}
addTwo(5)

const heros = ["kamal","kamal","jamal"]
 heros.map((getHeros):string=>{
    return `this will be our ${getHeros}`
 })

// define function explicitly  even the return type is void so every person is working on that project will have idea that it has that return type.
 const consoleError=(errrorMessage:string):void=>{
    console.log(errrorMessage)
 }

//  the never type is a value that never rturn a value or intentional termination of the code.
 const handleError =(err:string):never=>{
   throw new Error(err);
 }