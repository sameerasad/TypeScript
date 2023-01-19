interface User {
    name:string,
    email:string,   
    readonly id:number, //readonly
    location():string, // it is way to define a function in an interface
    couponNumber(value:string):string 
    gender?:string, // it is an optional parameter you could leave or either pass it 
}
 


interface User{
    type:string
}

//inheritance
interface Admin extends User{
  role:"Admin"|"user"|"other"
}


let Sameer : User = { //if a variable has a type of User it has all the value with the same types defined in User....   
    name:"Sameer",
    email:"ssameerkhan525@gmail.com",
    id:4,
    location:()=>"Karachi",
    couponNumber:(value:"s")=>"ret5555",
    type:"isAdmin",
}

// interface reopening



console.log(Sameer);
export{}