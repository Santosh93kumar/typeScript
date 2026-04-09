let response:any ='42'

let numericlength:number = (response as string).length
console.log('numericlength : ', numericlength)


type book={
    name:string
}

let bookString = '{"name":"my favorite one"}';
let bookObject = JSON.parse(bookString) as book
console.log(bookObject);

// difference b/w  any and unknown 


let value:any;

value= 'name'
value:[1,2,3];
value.toUpperCase();


let newvalue:unknown;

newvalue= 'name'
newvalue=[1,2,3];
if(typeof newvalue === 'string'){
    value.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log(error)
    
}

const data:unknown='hello santosh';
const strdata:string = data as string;


type role = 'user' | 'admin' | 'superAdmin' ;
function  redirectBasedOnRole(role:role):void{
    if(role == 'user'){
        console.log("redirect to user dashbaord");
        return;
    }
    if(role == 'admin'){
           console.log("redirect to admin dashbaord");
        return;
    }
    role;


}