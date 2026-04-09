type Chaiorder={
    type:string,
    sugar:number,
    strong:boolean
}

function makeChai(order:Chaiorder){
    console.log(order)
}

function serverChai(order:Chaiorder){
    console.log(order)
}


type chaiRecipe ={
    water:number,
    milk:number
}

class masalaChai implements chaiRecipe{
    water= 100;
    milk=80;
}

interface cupSize {
    size :'small'|'medium'
} 
class chai implements cupSize{
    size: "small" | "medium"= 'small'
} 