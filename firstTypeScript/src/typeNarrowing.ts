function getChai(kind:string | number){
    if(typeof kind === 'string'){
        return `making ${kind} chai ...`
    }
    return `Chai order : ${kind}`
}
console.log(getChai('chai'))
console.log(getChai(10))


function serverChai(msg?: string ){
    if(msg) return `serving ${msg}`
    return `serving default chai`
}


function orderChai(size:'mediun' | 'small' | 'large' | number){
    if(size == 'small'){
        return `small cutting chai ..`
    }
    if(size == 'mediun' || size == 'large'){
        return `make extra chai`
    }
    return `chai order : #${size}`
}


class kulhadChai{
    serve(){
         return `Serving kulhad chai`
    }
}


class cuttingChai{
    serve(){
         return `Serving cutting chai`
    }
}

function serve(chai: kulhadChai | cuttingChai){
    if(chai instanceof kulhadChai){
        return chai.serve()

    }
     if(chai instanceof cuttingChai){
        return chai.serve()

    }
}
console.log(serve(new kulhadChai));



type ChaiOrder ={
    type:string,
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === 'object' && 
        obj != null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar == 'number'

    )
}

function sreverChai (item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving Custum Chai ${item}`
}

console.log(sreverChai(
  {  type: 'masala Chai',
    sugar: 10}
));


type masalaChai = { type:'masala'; spicelevel:number}
type gingerChai = { type:'ginger'; amount:number}
type elaichiChai = { type:'elaichi'; aroma:number}

type chai = masalaChai | gingerChai | elaichiChai ;
function makeChai(order:chai){
    switch (order.type) {
        case "masala":
            return `masala chai`
            break;
        case "ginger":
            return `ginger chai`
            break;
        case "elaichi":
            return `elaichi chai`
            break;
    }
}

console.log(makeChai({
    type:'masala',
    spicelevel:10
}))


function brew( order: masalaChai | gingerChai){
    if("spicelevel" in order){
        return `masala chai`
    }
}

console.log(brew(
    {type:'masala', spicelevel:10}
))



// function isStringArray(arr:unknown):arr is string[]{
    
// }