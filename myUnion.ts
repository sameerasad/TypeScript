type User ={
    name:string,
    password: string|number;
}

type Admin ={
    userName:string,
    password: string &number;
}

 let userType : User |Admin ={
    name:"SAMEER",
    password:1234,
}

userType ={name:"sameer admin",password:12113}
function getDbId(id:string|number){
    if(typeof(id)=="string"){
        id.toLowerCase()

    }else{
        return id.toString()
    }
}


// union in arrays
// it will either accept string or number in the below declaration
const data:string|number[] =[1]
// it will accept both string and number 
const data1:(string|number)[] =[1,2,"3"];


export{}

