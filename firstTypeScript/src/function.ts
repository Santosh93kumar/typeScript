 function makeChai(type:string, cups:number){
    console.log(`Making the ${cups} cups of ${type}`);
}

makeChai('masalaChai',2);


//return type pata lag jate hai , mistake aviod k liya 
function getChaiPrice():number {
    return 23;
}


//yaha pa return type is unknown, 
function makeOrder(order:string){
    if(!order) return null;
    return order
}
console.log(makeOrder('test'))

// void 
// incase a fucntion is returrning nothing
function logChai():void{
    console.log('Chai is ready');
    
}

//optional data type
//dono he case ma type optional ho jaata hai
// function orderChai(type?: string){

// }
function orderChai(type: string  = 'test'){

}


function createChai(order:{
    type:string,
    sugar:number,
    size: 'small' | 'large'
}):number{
    return 2
}