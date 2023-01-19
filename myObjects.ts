import { createSuper, formatDiagnosticsWithColorAndContext } from "typescript";

const user = {
    name: "sameer",
    email: "ssameerkhan525@gmail.com",
    id: 1,
    active: false,
}

function createUser({ name: string, isActive: boolean }) { }

// createUser({name:"sameer",isActive:false,email:"ssameerkhan525@gmail.com"}) this is the weird behaviour but we could not add another parameter to this function for this to happen we have to create another object and pass it to variable
 const newUser ={
    name:"sameer asad",
    email:"ssameerkhan525@gmail.com",
    isActive:true
 }
 createUser(newUser)


function createCourse(): {name:string,id:number} {
    return {
        name: "urdu",
        id: 1
    }
}

type User ={
    name:string,
    email:string,
    id:Number,
    isActive:boolean 
}

function createNewUser(anotherUser:User):User{
   return {
      name:"sameer",
      email:"ssameerkhan525@gmail.com",
      id:0,
      isActive:true
   }
}
// with ? and : together we declare optional values 
type location ={
    readonly country1:string,
    city:string,
    area ?: string,
}

let myLocation : location ={
    country1:"Pakistan",
    city:"Karachi",
    // I could skip the the area because it is optional
}
// we could not do the below operation because the of country1 is reaad only
// myLocation.country1="India";

type cardNumber = {
    cardnumber:number
}

type cardHolderName ={
    name:string
}

//  let combine multiple type to create another type

type cardDetails = cardNumber &  cardHolderName & {ccv:number}

const createCardDetails =(details:cardDetails):cardDetails=>{
    return details;
} 

createCardDetails({cardnumber:444,name:"sameer",ccv:1233})